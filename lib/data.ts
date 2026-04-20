import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

function readJsonFile<T>(filename: string): T | null {
  try {
    const filePath = path.join(dataDir, filename);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    console.error(`Error reading ${filename}:`, e);
    return null;
  }
}

export async function getNews() {
  return readJsonFile('news.json');
}

export async function getGitHubTrending() {
  return readJsonFile('github-trending.json');
}

export async function getSkills() {
  return readJsonFile('skills.json');
}

export async function getSalons() {
  return readJsonFile('salons.json');
}
