#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataDir = path.join(__dirname, '..', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 模拟的大厂新闻数据（真实环境可以用 RSS/爬虫）
const mockNewsData = [
  {
    id: '1',
    title: 'OpenAI Agents SDK 正式发布',
    company: 'OpenAI',
    type: 'release',
    description: '轻量级但功能强大的多 Agent 工作流框架，支持 OpenAI 及 100+ 其他大模型',
    date: '2026-04-20',
    url: 'https://github.com/openai/openai-agents-python',
    size: 'large',
    tags: ['Agents', '框架', '开源']
  },
  {
    id: '2',
    title: 'Gemini 2.0 Flash 推理优化',
    company: 'Google',
    type: 'release',
    description: 'TurboQuant 量化方案在保持 FP16 精度的情况下，将推理吞吐提升 40%，特别优化长文本场景',
    date: '2026-04-19',
    size: 'medium',
    tags: ['推理优化', '量化']
  },
  {
    id: '3',
    title: 'Claude 3 Opus 新功能',
    company: 'Anthropic',
    type: 'skill',
    description: '结构化数据提取能力大幅增强，支持复杂表格和多文档对比分析',
    date: '2026-04-18',
    size: 'small',
    tags: ['Skill', '数据处理']
  },
  {
    id: '4',
    title: 'Llama 3 微调最佳实践',
    company: 'Meta',
    type: 'update',
    description: '社区开源项目汇总 Llama 3 高效微调攻略，包含 LoRA、QLoRA 等多种方案对比',
    date: '2026-04-18',
    size: 'medium',
    tags: ['微调', '最佳实践']
  },
  {
    id: '5',
    title: '豆包大模型推理引擎开源',
    company: 'ByteDance',
    type: 'release',
    description: '字节跳动开源豆包大模型推理引擎，支持多卡并行和动态批处理',
    date: '2026-04-17',
    size: 'medium',
    tags: ['推理引擎', '开源']
  }
];

const outputPath = path.join(dataDir, 'news.json');
fs.writeFileSync(outputPath, JSON.stringify(mockNewsData, null, 2), 'utf-8');

console.log(`✅ News data saved to ${outputPath}`);
console.log(`   ${mockNewsData.length} news items fetched`);
