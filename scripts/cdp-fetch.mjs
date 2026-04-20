#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataDir = path.join(__dirname, '..', 'data');
const screenshotsDir = path.join(__dirname, '..', 'public', 'screenshots');

// 确保目录存在
[dataDir, screenshotsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// CDP Proxy API
const CDP_BASE = 'http://localhost:3457';

async function cdpRequest(method, endpoint, data = null) {
  const url = `${CDP_BASE}${endpoint}`;
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  const response = await fetch(url, options);
  return response.json();
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchOpenAI() {
  console.log('🚀 Fetching OpenAI...');
  try {
    const tab = await cdpRequest('GET', '/new?url=https://openai.com/zh-Hans-CN/news/');
    await sleep(3000);

    const screenshotFile = path.join(screenshotsDir, 'openai-news.png');
    await cdpRequest('GET', `/screenshot?target=${tab.targetId}&file=${screenshotFile}`);

    const content = await cdpRequest('POST', `/eval?target=${tab.targetId}`,
      'Array.from(document.querySelectorAll("a[href*=\'/zh-Hans-CN/index/\']")).slice(0,5).map(el => ({' +
      '  title: el.innerText?.split("\\n")[0],' +
      '  href: el.href,' +
      '  date: el.innerText?.match(/\\d{4}年\\d+月\\d+日/)?.[0]' +
      '}))'
    );

    await cdpRequest('GET', `/close?target=${tab.targetId}`);

    return {
      source: 'OpenAI',
      screenshot: '/screenshots/openai-news.png',
      items: content.value || [],
    };
  } catch (e) {
    console.error('❌ OpenAI fetch failed:', e);
    return null;
  }
}

async function fetchAnthropic() {
  console.log('🚀 Fetching Anthropic...');
  try {
    const tab = await cdpRequest('GET', '/new?url=https://www.anthropic.com/index');
    await sleep(3000);

    const screenshotFile = path.join(screenshotsDir, 'anthropic-index.png');
    await cdpRequest('GET', `/screenshot?target=${tab.targetId}&file=${screenshotFile}`);

    await cdpRequest('GET', `/close?target=${tab.targetId}`);

    return {
      source: 'Anthropic',
      screenshot: '/screenshots/anthropic-index.png',
    };
  } catch (e) {
    console.error('❌ Anthropic fetch failed:', e);
    return null;
  }
}

async function fetchGoogleAI() {
  console.log('🚀 Fetching Google AI...');
  try {
    const tab = await cdpRequest('GET', '/new?url=https://ai.google.dev');
    await sleep(3000);

    const screenshotFile = path.join(screenshotsDir, 'google-ai.png');
    await cdpRequest('GET', `/screenshot?target=${tab.targetId}&file=${screenshotFile}`);

    await cdpRequest('GET', `/close?target=${tab.targetId}`);

    return {
      source: 'Google',
      screenshot: '/screenshots/google-ai.png',
    };
  } catch (e) {
    console.error('❌ Google AI fetch failed:', e);
    return null;
  }
}

async function main() {
  console.log('🤖 Starting CDP crawler...\n');

  const results = [];

  const openai = await fetchOpenAI();
  if (openai) results.push(openai);

  const anthropic = await fetchAnthropic();
  if (anthropic) results.push(anthropic);

  const google = await fetchGoogleAI();
  if (google) results.push(google);

  // 保存爬取结果
  const outputPath = path.join(dataDir, 'crawl-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8');

  console.log(`\n✅ Crawl complete! Results saved to ${outputPath}`);
  console.log(`   ${results.length} sources fetched`);
}

main().catch(console.error);
