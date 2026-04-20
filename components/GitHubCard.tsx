'use client';

import { GitHubRepo } from '@/lib/types';

interface GitHubCardProps {
  item: GitHubRepo;
}

const langAccents: Record<string, string> = {
  Python: '#3b82f6',
  TypeScript: '#0ea5e9',
  JavaScript: '#eab308',
  Rust: '#f97316',
  Dart: '#06b6d4',
  Go: '#14b8a6',
};

const langDots: Record<string, string> = {
  Python: 'bg-blue-500',
  TypeScript: 'bg-sky-600',
  JavaScript: 'bg-yellow-400',
  Rust: 'bg-orange-600',
  Dart: 'bg-cyan-500',
  Go: 'bg-teal-500',
};

export default function GitHubCard({ item }: GitHubCardProps) {
  const accent = langAccents[item.language] || '#6b7280';
  const dot = langDots[item.language] || 'bg-gray-400';

  const handleClick = () => {
    if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="h-24 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${accent}20 0%, ${accent}40 100%)` }}
          >
            <svg className="w-10 h-10" style={{ color: `${accent}60` }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${dot}`} />
            <span className="text-xs text-gray-500 font-medium">{item.language}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <svg className="w-4 h-4" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="font-semibold">{item.stars}</span>
          </div>
        </div>

        <div className="mb-2">
          <span className="text-gray-400 text-xs">{item.owner}/</span>
          <span className="font-semibold text-gray-900">
            {item.name}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-medium px-2 py-1 rounded-full"
            style={{ background: `${accent}15`, color: accent }}
          >
            +{item.starsToday} today
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
