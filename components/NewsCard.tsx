'use client';

import { NewsItem } from '@/lib/types';

interface NewsCardProps {
  item: NewsItem;
}

const typeLabels: Record<string, string> = {
  release: '发布',
  skill: '新功能',
  update: '更新',
};

const companyAccents: Record<string, string> = {
  OpenAI: '#10a37f',
  Anthropic: '#f97316',
  Google: '#4285f4',
  Meta: '#1877f2',
  ByteDance: '#f43f5e',
};

export default function NewsCard({ item }: NewsCardProps) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-1 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-1',
  };

  const accent = companyAccents[item.company] || '#6b7280';

  const handleClick = () => {
    if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${sizeClasses[item.size]} bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group flex flex-col overflow-hidden`}
    >
      {/* Image */}
      <div className="h-24 md:h-32 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${accent}20 0%, ${accent}40 100%)` }}
          >
            <div className="text-4xl font-bold tracking-tight" style={{ color: `${accent}60` }}>
              {item.company[0]}
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">{item.company}</span>
          <span
            className="px-2 py-0.5 text-xs rounded-full font-medium"
            style={{ background: `${accent}15`, color: accent }}
          >
            {typeLabels[item.type]}
          </span>
          <span className="text-xs text-gray-400 ml-auto">{item.date}</span>
        </div>

        <h3
          className={`font-semibold mb-2 leading-tight transition-colors ${
            item.size === 'large' ? 'text-lg' : 'text-base'
          }`}
          style={{ color: accent }}
        >
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {item.description}
        </p>

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
