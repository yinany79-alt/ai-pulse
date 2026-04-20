#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataDir = path.join(__dirname, '..', 'data');

// 确保 data 目录存在
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 模拟的 GitHub Trending 数据（真实环境可以用 API 或爬虫）
const mockGitHubData = [
  {
    id: 'g1',
    name: 'openai-agents-python',
    owner: 'openai',
    description: 'Build multi-agent workflows with this lightweight, provider-agnostic framework',
    language: 'Python',
    stars: '12.4k',
    starsToday: '752',
    url: 'https://github.com/openai/openai-agents-python',
    tags: ['Agents', 'LLM']
  },
  {
    id: 'g2',
    name: 'thunderbolt',
    owner: 'thunderbird',
    description: 'High-performance inference engine for multimodal models',
    language: 'TypeScript',
    stars: '8.2k',
    starsToday: '695',
    url: 'https://github.com/thunderbird/thunderbolt',
    tags: ['Inference', 'Multimodal']
  },
  {
    id: 'g3',
    name: 'omi',
    owner: 'BasedHardware',
    description: 'Open-source AI wearable device firmware and app',
    language: 'Dart',
    stars: '23.1k',
    starsToday: '685',
    url: 'https://github.com/BasedHardware/omi',
    tags: ['Wearable', 'AI']
  },
  {
    id: 'g4',
    name: 'paperless-ngx',
    owner: 'paperless-ngx',
    description: 'Document management system with AI-powered OCR',
    language: 'Python',
    stars: '41.2k',
    starsToday: '393',
    url: 'https://github.com/paperless-ngx/paperless-ngx',
    tags: ['OCR', 'Document']
  },
  {
    id: 'g5',
    name: 'evolver',
    owner: 'EvoMap',
    description: 'Interactive visualization for LLM evolution trajectories',
    language: 'JavaScript',
    stars: '5.7k',
    starsToday: '527',
    url: 'https://github.com/EvoMap/evolver',
    tags: ['Visualization', 'LLM']
  },
  {
    id: 'g6',
    name: 'RuView',
    owner: 'ruvnet',
    description: 'AI-powered code review and refactoring assistant',
    language: 'Rust',
    stars: '3.2k',
    starsToday: '149',
    url: 'https://github.com/ruvnet/RuView',
    tags: ['Code Review', 'AI']
  }
];

// 写入文件
const outputPath = path.join(dataDir, 'github-trending.json');
fs.writeFileSync(outputPath, JSON.stringify(mockGitHubData, null, 2), 'utf-8');

console.log(`✅ GitHub Trending data saved to ${outputPath}`);
console.log(`   ${mockGitHubData.length} repos fetched`);
