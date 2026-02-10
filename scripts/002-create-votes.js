import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS votes (
      id SERIAL PRIMARY KEY,
      costume_id VARCHAR(20) NOT NULL,
      ip_hash VARCHAR(64),
      created_at TIMESTAMP DEFAULT NOW()
    )
  `
  console.log('Table "votes" created successfully')
}

main().catch(console.error)
