'use client';

interface CompanyLogoProps {
  company: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CompanyLogo({ company, size = 'md' }: CompanyLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const companyStyles: Record<string, { bg: string; text: string; initial: string }> = {
    OpenAI: { bg: 'bg-emerald-100', text: 'text-emerald-700', initial: 'O' },
    Anthropic: { bg: 'bg-amber-100', text: 'text-amber-700', initial: 'A' },
    Google: { bg: 'bg-blue-100', text: 'text-blue-700', initial: 'G' },
    Meta: { bg: 'bg-slate-200', text: 'text-slate-700', initial: 'M' },
    ByteDance: { bg: 'bg-red-100', text: 'text-jd-red', initial: '字' },
  };

  const style = companyStyles[company] || { bg: 'bg-gray-100', text: 'text-gray-700', initial: company[0] || '?' };

  return (
    <div className={`${sizeClasses[size]} ${style.bg} rounded-xl flex items-center justify-center font-bold ${style.text} shrink-0`}>
      {style.initial}
    </div>
  );
}
