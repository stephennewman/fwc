import Link from 'next/link';
import { Phone } from 'lucide-react';

const PHONE_HREF = 'tel:+1-727-278-7045';

type CTAVariant = 'primary' | 'secondary' | 'outline';

interface CTAButtonProps {
  variant?: CTAVariant;
  href?: string;
  isPhone?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<CTAVariant, { style: React.CSSProperties; className: string }> = {
  primary: {
    style: { backgroundColor: 'var(--accent)' },
    className: 'text-white hover:opacity-90',
  },
  secondary: {
    style: { backgroundColor: 'var(--primary)' },
    className: 'text-white hover:opacity-90',
  },
  outline: {
    style: { borderColor: 'var(--primary)', color: 'var(--primary)' },
    className: 'bg-transparent border-2 hover:bg-[var(--primary)] hover:text-white',
  },
};

export default function CTAButton({
  variant = 'primary',
  href,
  isPhone = false,
  children,
  className = '',
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all text-base sm:text-lg';
  const config = variantConfig[variant];
  const combinedStyles = `${baseStyles} ${config.className} ${className}`;

  if (isPhone) {
    return (
      <a href={PHONE_HREF} className={combinedStyles} style={config.style}>
        <Phone className="w-5 h-5" />
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedStyles} style={config.style}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedStyles} style={config.style}>
      {children}
    </button>
  );
}
