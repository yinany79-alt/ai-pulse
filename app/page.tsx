import NewsCard from '@/components/NewsCard';
import GitHubCard from '@/components/GitHubCard';
import SkillCard from '@/components/SkillCard';
import SalonCard from '@/components/SalonCard';
import newsData from '@/data/news.json';
import githubData from '@/data/github-trending.json';
import skillsData from '@/data/skills.json';
import salonsData from '@/data/salons.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7f3] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">AI Pulse</h1>
              <p className="text-gray-500 text-sm">全球 AI 脉搏 · 每三天更新</p>
            </div>
          </div>
        </header>

        {/* Global AI Pulsar Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Global AI Pulsar</h2>
            <span className="text-xs text-gray-400 ml-auto font-medium bg-white px-3 py-1 rounded-full border border-gray-200">近 72 小时 · 大厂动态</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-5">
            {newsData.map((item: any) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Trending Skills Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Trending Skills</h2>
            <span className="text-xs text-gray-400 ml-auto font-medium bg-white px-3 py-1 rounded-full border border-gray-200">本周热门技能</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.map((item: any) => (
              <SkillCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* GitHub Trending Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">GitHub Trending</h2>
            <span className="text-xs text-gray-400 ml-auto font-medium bg-white px-3 py-1 rounded-full border border-gray-200">今日热门</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {githubData.map((item: any) => (
              <GitHubCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Salon Radar Section */}
        <section>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Salon Radar</h2>
            <span className="text-xs text-gray-400 ml-auto font-medium bg-white px-3 py-1 rounded-full border border-gray-200">本周末活动</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {salonsData.map((item: any) => (
              <SalonCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400 text-sm pb-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span>Last updated: 2026-04-20</span>
            <span className="text-gray-300">·</span>
            <span>Powered by AI-Agentic Pipeline</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
