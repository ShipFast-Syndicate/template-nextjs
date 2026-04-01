// src/db/index.ts - Database client helper for Turso
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

// Schema placeholder - add your tables here
// import { ... } from './schema'

let db: ReturnType<typeof drizzle<any>> | null = null

export function getDb() {
  if (!db) {
    const url = process.env.DATABASE_URL || process.env.TURSO_DATABASE_URL
    const authToken = process.env.TURSO_AUTH_TOKEN
    
    if (!url) {
      throw new Error('DATABASE_URL or TURSO_DATABASE_URL is required')
    }
    
    const client = createClient({ url, authToken: authToken || undefined })
    db = drizzle(client)
  }
  return db
}

// For Cloudflare Workers - access via context.env
export function getDbFromEnv(env: Record<string, any>) {
  const url = env.DATABASE_URL || env.TURSO_DATABASE_URL
  const authToken = env.TURSO_AUTH_TOKEN
  
  if (!url) {
    throw new Error('DATABASE_URL or TURSO_DATABASE_URL is required')
  }
  
  const client = createClient({ url, authToken: authToken || undefined })
  return drizzle(client)
}