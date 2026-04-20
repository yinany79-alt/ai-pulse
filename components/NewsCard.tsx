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

const companyGradients: Record<string, string> = {
  OpenAI: 'linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 50%, #34d399 100%)',
  Anthropic: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 50%, #fb923c 100%)',
  Google: 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 50%, #60a5fa 100%)',
  Meta: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
  ByteDance: 'linear-gradient(135deg, #fecdd3 0%, #fda4af 50%, #fb7185 100%)',
};

export default function NewsCard({ item }: NewsItem) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-1 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-1',
  };

  const accent = companyAccents[item.company] || '#6b7280';
  const gradient = companyGradients[item.company] || 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)';

  return (
    <div
      className={`${sizeClasses[item.size]} bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer group flex flex-col overflow-hidden`}
    >
      {/* Image Placeholder */}
      <div
        className="h-24 md:h-28 flex items-center justify-center relative overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-32 h-32 rounded-full bg-white/40 -left-10 -bottom-10" />
          <div className="absolute w-20 h-20 rounded-full bg-white/30 -right-5 -top-5" />
        </div>
        <div className="text-4xl font-bold tracking-tight text-white/60">
          {item.company[0]}
        </div>
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
