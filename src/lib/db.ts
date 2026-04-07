import { Pool } from 'pg';

declare global {
  var pgPool: Pool | undefined;
}

if (!process.env.DATABASE_URL) {
  console.error('CRITICAL: DATABASE_URL is missing');
}

// Aggressive SSL configuration for Supabase/Vercel, but disabled for local development
const isLocal = process.env.DATABASE_URL?.includes('localhost') || process.env.DATABASE_URL?.includes('127.0.0.1');

const pool = global.pgPool || new Pool({
  connectionString: process.env.DATABASE_URL,
  ...(isLocal ? {} : {
    ssl: {
      rejectUnauthorized: false,
    }
  }),
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

if (process.env.NODE_ENV !== 'production') {
  global.pgPool = pool;
}

export default pool;
