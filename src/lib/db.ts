import { Pool } from 'pg';

// Singleton pattern to prevent multiple pools during hot-reloads/serverless
declare global {
  var pgPool: Pool | undefined;
}

if (!process.env.DATABASE_URL) {
  console.error('CRITICAL: DATABASE_URL is missing in environment variables');
} else {
  // Only log the hostname part for security, to verify DNS is working
  const hostname = new URL(process.env.DATABASE_URL).hostname;
  console.log(`Database sync: targeting ${hostname}`);
}

const pool = global.pgPool || new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 10, // Limit connections for serverless stability
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

if (process.env.NODE_ENV !== 'production') {
  global.pgPool = pool;
}

export default pool;
