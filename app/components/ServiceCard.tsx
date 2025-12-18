import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  features,
}: ServiceCardProps) {
  const cardContent = (
    <>
      {/* Icon */}
      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-secondary" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-light leading-relaxed mb-4">
        {description}
      </p>

      {/* Features list */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-text-light">
              <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Link indicator */}
      {href && (
        <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </>
  );

  const className = `block bg-white border border-border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow ${
    href ? 'group cursor-pointer' : ''
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={className}>
      {cardContent}
    </div>
  );
}
