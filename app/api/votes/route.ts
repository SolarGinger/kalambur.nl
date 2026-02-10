import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  const rows = await sql`
    SELECT costume_id, COUNT(*)::int as count
    FROM votes
    GROUP BY costume_id
  `
  const total = await sql`SELECT COUNT(*)::int as total FROM votes`
  return NextResponse.json({ results: rows, total: total[0]?.total || 0 })
}

export async function POST(req: NextRequest) {
  const { costumeId } = await req.json()
  if (!costumeId || typeof costumeId !== 'string') {
    return NextResponse.json({ error: 'Invalid costume ID' }, { status: 400 })
  }

  // Simple IP-based duplicate check using x-forwarded-for header
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
  // Simple hash to avoid storing raw IPs
  const encoder = new TextEncoder()
  const data = encoder.encode(ip + 'kalamburSalt2026')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const ipHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')

  // Check if this IP already voted
  const existing = await sql`SELECT id FROM votes WHERE ip_hash = ${ipHash}`
  if (existing.length > 0) {
    return NextResponse.json({ error: 'already_voted' }, { status: 409 })
  }

  await sql`INSERT INTO votes (costume_id, ip_hash) VALUES (${costumeId}, ${ipHash})`

  // Return updated results
  const rows = await sql`
    SELECT costume_id, COUNT(*)::int as count
    FROM votes
    GROUP BY costume_id
  `
  const total = await sql`SELECT COUNT(*)::int as total FROM votes`
  return NextResponse.json({ results: rows, total: total[0]?.total || 0 })
}
