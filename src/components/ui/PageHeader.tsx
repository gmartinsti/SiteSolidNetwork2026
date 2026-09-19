
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  badge,
  className = "" 
}: PageHeaderProps) => {
  return (
    <div className={`flex flex-col ${className.includes('items-') ? '' : 'items-center'} ${className.includes('text-') ? '' : 'text-center'} mb-12 ${className}`}>
      {badge && (
        <div className="inline-flex items-center rounded-full border border-solidPurple-300 bg-solidPurple-50 px-4 py-1.5 text-sm font-medium text-solidPurple-700 mb-4">
          <span>{badge}</span>
        </div>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter md:leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-[800px] text-gray-700 md:text-xl/relaxed lg:text-xl/relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
