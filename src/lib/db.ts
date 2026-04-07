import { Pool } from 'pg';

if (!process.env.DATABASE_URL) {
  console.error('CRITICAL: DATABASE_URL is not defined in the environment variables.');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;
