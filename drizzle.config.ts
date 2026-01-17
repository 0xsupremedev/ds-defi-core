import type { Config } from 'drizzle-kit';

export default {
  schema: './database/schema/*.ts',
  out: './database/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/dsdefi',
  },
} satisfies Config;
