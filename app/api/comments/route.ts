import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const last = searchParams.get('last')

  if (last === '1') {
    const rows = await sql`SELECT name, text, color, TO_CHAR(created_at, 'DD.MM.YYYY HH24:MI') as date FROM comments ORDER BY id DESC LIMIT 1`
    return NextResponse.json(rows[0] || null)
  }

  const rows = await sql`SELECT id, name, text, color, TO_CHAR(created_at, 'DD.MM.YYYY HH24:MI') as date FROM comments ORDER BY id DESC`
  return NextResponse.json(rows)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, text } = body

  if (!name || !text || name.trim().length === 0 || text.trim().length === 0) {
    return NextResponse.json({ error: 'Name and text are required' }, { status: 400 })
  }

  const trimmedName = name.trim().substring(0, 20)
  const trimmedText = text.trim().substring(0, 500)

  const pastelColors = ['#FFE0B2', '#C8E6C9', '#BBDEFB', '#F8BBD0', '#D1C4E9', '#FFF9C4', '#B2DFDB', '#FFCCBC']
  const color = pastelColors[Math.floor(Math.random() * pastelColors.length)]

  await sql`INSERT INTO comments (name, text, color) VALUES (${trimmedName}, ${trimmedText}, ${color})`

  return NextResponse.json({ ok: true })
}
