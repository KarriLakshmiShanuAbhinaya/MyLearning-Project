import { Pool } from 'pg';

declare global {
  var pgPool: Pool | undefined;
}

if (!process.env.DATABASE_URL) {
  console.error('CRITICAL: DATABASE_URL is missing');
}

// Aggressive SSL configuration for Supabase/Vercel
const pool = global.pgPool || new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // This ignores the self-signed certificate error
  },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000, // Increased timeout for stability
});

if (process.env.NODE_ENV !== 'production') {
  global.pgPool = pool;
}

export default pool;
