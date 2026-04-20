import { NewsItem, GitHubRepo, SkillItem, SalonItem } from './types';

export const mockNews: NewsItem[] = [
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
    title: 'Claude 3 Opus 新 Skill',
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

export const mockGitHub: GitHubRepo[] = [
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

export const mockSkills: SkillItem[] = [
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

export const mockSalons: SalonItem[] = [
  {
    id: 's1',
    title: '奇点智能技术大会',
    organizer: '奇点汽车',
    date: '2026-04-25',
    time: '09:00-18:00',
    location: '上海 · 国际会议中心',
    description: '李建忠分享 Agent 驱动的软件新范式；陈恺解析万亿参数 Intern-S1-Pro 技术细节',
    tags: ['Agent', '大模型', '上海']
  },
  {
    id: 's2',
    title: '中国人形机器人生态大会',
    organizer: '宇树科技',
    date: '2026-04-26',
    time: '10:00-17:00',
    location: '上海 · 张江科学会堂',
    description: '宇树 G1 EDU 进阶版现场演示多模态交互；讨论人形机器人对算力集群的实时调度需求',
    tags: ['具身智能', '机器人', '上海']
  },
  {
    id: 's3',
    title: 'AI Infra 闭门研讨会',
    organizer: 'AI 基础设施联盟',
    date: '2026-04-27',
    time: '14:00-18:00',
    location: '北京 · 望京 SOHO',
    description: '讨论 Metric Center（指标中心）在超大规模训练中的实时观测性挑战',
    tags: ['MLOps', '算力中心', '北京']
  },
  {
    id: 's4',
    title: '大模型应用开发沙龙',
    organizer: '字节跳动火山引擎',
    date: '2026-04-26',
    time: '13:30-17:00',
    location: '北京 · 中关村创新中心',
    description: '豆包大模型应用开发实战，Agent 开发最佳实践分享',
    tags: ['应用开发', 'Agent', '北京']
  }
];
