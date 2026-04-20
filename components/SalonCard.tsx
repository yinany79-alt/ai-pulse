'use client';

import { SalonItem } from '@/lib/types';

interface SalonCardProps {
  item: SalonItem;
}

const salonGradients: Record<string, string> = {
  beijing: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 50%, #fb923c 100%)',
  shanghai: 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 50%, #60a5fa 100%)',
};

export default function SalonCard({ item }: SalonCardProps) {
  const isBeijing = item.location.includes('北京');
  const accent = isBeijing ? '#f97316' : '#4285f4';
  const gradient = isBeijing ? salonGradients.beijing : salonGradients.shanghai;
  const cityLabel = isBeijing ? '北京' : '上海';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer group flex flex-col overflow-hidden">
      {/* Image Placeholder */}
      <div
        className="h-24 flex items-center justify-center relative overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-28 h-28 rounded-full bg-white/40 -left-8 -bottom-8" />
          <div className="absolute w-16 h-16 rounded-full bg-white/30 -right-4 -top-4" />
        </div>
        <div className="flex flex-col items-center text-white/60">
          <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm font-bold">{cityLabel}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <span
            className="text-xs font-bold uppercase tracking-wide"
            style={{ color: accent }}
          >
            {item.organizer}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
          {item.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{item.date} · {item.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{item.location}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md border"
              style={{ background: `${accent}10`, color: accent, borderColor: `${accent}20` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
