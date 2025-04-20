import { sql } from '@vercel/postgres';

// Vercel Postgres automatically uses environment variables for connection details
// (POSTGRES_URL, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, etc.)

// Function to ensure the settings table exists

async function ensureTableExists() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT
      );
    `;
  } catch (error) {
    console.error('Error ensuring settings table exists:', error);
  }
}


const tableCheckPromise = ensureTableExists();

export async function getSetting(key: string): Promise<string | null> {
  await tableCheckPromise;
  try {
    const { rows } = await sql<{ value: string }>`
      SELECT value FROM settings WHERE key = ${key};
    `;
    return rows.length > 0 ? rows[0].value : null;
  } catch (error) {
    console.error(`Error getting setting for key "${key}":`, error);
    
    return null;
  }
}

export async function setSetting(key: string, value: string): Promise<void> {
  await tableCheckPromise; 
  try {
    await sql`
      INSERT INTO settings (key, value)
      VALUES (${key}, ${value})
      ON CONFLICT (key)
      DO UPDATE SET value = EXCLUDED.value;
    `;
  } catch (error) {
    console.error(`Error setting setting for key "${key}":`, error);
 
    throw error; 
  }
}
