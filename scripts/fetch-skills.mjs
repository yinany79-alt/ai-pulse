#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataDir = path.join(__dirname, '..', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const mockSkillsData = [
  {
    id: 'sk1',
    name: 'OpenAI Agents SDK',
    author: 'OpenAI',
    description: '官方多 Agent 框架，支持 100+ LLMs，可构建复杂的工作流',
    platform: 'OpenAI Agents',
    stars: '12.4k',
    url: 'https://github.com/openai/openai-agents-python',
    tags: ['Agents', '框架', '官方']
  },
  {
    id: 'sk2',
    name: 'Claude Code Interpreter',
    author: 'Anthropic',
    description: '强大的代码执行和数据分析能力，支持 Python、JavaScript',
    platform: 'Claude',
    stars: '8.2k',
    url: 'https://claude.ai',
    tags: ['代码执行', '数据分析']
  },
  {
    id: 'sk3',
    name: 'GPT-4o Vision Master',
    author: 'Community',
    description: '图像识别和视觉理解最佳实践，支持多模态 Agent',
    platform: 'GPT',
    stars: '5.7k',
    url: 'https://github.com/example/gpt-vision',
    tags: ['视觉', '多模态']
  },
  {
    id: 'sk4',
    name: 'Gemini Function Calling Pro',
    author: 'Google',
    description: '高级函数调用模式，支持复杂的工具编排',
    platform: 'Gemini',
    stars: '4.3k',
    url: 'https://ai.google.dev',
    tags: ['函数调用', '工具']
  },
  {
    id: 'sk5',
    name: 'Auto Coder Agent',
    author: 'Community',
    description: '自动编码 Agent，可完成从需求到代码的全流程',
    platform: 'OpenAI Agents',
    stars: '9.1k',
    url: 'https://github.com/example/auto-coder',
    tags: ['编码', '自动']
  },
  {
    id: 'sk6',
    name: 'Web Research Agent',
    author: 'Community',
    description: '联网搜索和信息整合 Agent，可自动生成研究报告',
    platform: 'Claude',
    stars: '6.8k',
    url: 'https://github.com/example/web-research',
    tags: ['搜索', '研究']
  }
];

const outputPath = path.join(dataDir, 'skills.json');
fs.writeFileSync(outputPath, JSON.stringify(mockSkillsData, null, 2), 'utf-8');

console.log(`✅ Skills data saved to ${outputPath}`);
console.log(`   ${mockSkillsData.length} skills fetched`);
