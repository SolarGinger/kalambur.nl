import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      text TEXT NOT NULL,
      color VARCHAR(10) NOT NULL DEFAULT '#ffe0b2',
      created_at TIMESTAMP DEFAULT NOW()
    )
  `
  console.log('Table "comments" created successfully.')
}

main().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
