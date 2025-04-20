import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbPath = path.resolve(process.cwd(), 'data');
const dbFile = path.join(dbPath, 'content.db');

// Ensure the data directory exists
if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath, { recursive: true });
}

const db = new Database(dbFile);

db.exec(`
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  )
`);

export function getSetting(key: string): string | null {
  const stmt = db.prepare('SELECT value FROM settings WHERE key = ?');
  const result = stmt.get(key) as { value: string } | undefined;
  return result ? result.value : null;
}

export function setSetting(key: string, value: string): void {
  const stmt = db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)');
  stmt.run(key, value);
}

// Seed initial title if it doesn't exist
const initialTitleKey = 'homepageTitle';
const currentTitle = getSetting(initialTitleKey);
if (currentTitle === null) {
  // Use inline styles matching the original hardcoded version in app/page.tsx
  const defaultTitle = 'Hyper boost your <span style="color: #FFBD59;">Revenue<br/>Management</span><span style="color: #FFBD59;">,</span> <span style="color: #FFBD59;">Marketing</span> and<br/>Commercial Functions with<br/>Business Ready AI';
  setSetting(initialTitleKey, defaultTitle);
  console.log(`Initialized database with default title for key: ${initialTitleKey}`);
} 