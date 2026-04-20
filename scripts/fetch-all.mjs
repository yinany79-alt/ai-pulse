#!/usr/bin/env node
import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const scripts = [
  'fetch-news.mjs',
  'fetch-github-trending.mjs',
  'fetch-skills.mjs',
  'fetch-salons.mjs'
];

console.log('🚀 Starting data fetch...\n');

for (const script of scripts) {
  const scriptPath = path.join(__dirname, script);
  console.log(`📦 Running ${script}...`);

  const result = spawnSync('node', [scriptPath], {
    stdio: 'inherit',
    cwd: __dirname
  });

  if (result.error) {
    console.error(`❌ Error running ${script}:`, result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`❌ ${script} exited with code ${result.status}`);
    process.exit(1);
  }

  console.log('');
}

console.log('✅ All data fetched successfully!');
