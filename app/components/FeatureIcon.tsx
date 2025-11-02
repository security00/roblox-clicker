import React from 'react';

interface Props {
  name:
    | 'gamepad'
    | 'star'
    | 'rocket'
    | 'coin'
    | 'trophy'
    | 'device'
    | 'palette'
    | 'free';
  className?: string;
}

// Simple inline SVG icons using currentColor so parent text color applies
export default function FeatureIcon({ name, className }: Props) {
  switch (name) {
    case 'gamepad':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 9v6M16 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="2" y="9" width="20" height="6" rx="3" ry="3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <path d="M12 3l3 6 6 .9-4.5 4.2 1.1 6L12 17l-5.6 3.9 1.1-6L3 9.9 9 9l3-6z" fill="currentColor" />
        </svg>
      );
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <path d="M14 3l7 7-5 1-4 4-1 5-7-7 5-1 4-4 1-5z" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="15" cy="9" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'coin':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <ellipse cx="12" cy="12" rx="8" ry="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 12c0 3.3 3.6 6 8 6s8-2.7 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <path d="M6 6h12v3a6 6 0 01-12 0V6z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 21h8M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 7h3a4 4 0 01-4 4M6 7H3a4 4 0 004 4" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'device':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <rect x="4" y="4" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M2 18h20" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <path d="M12 3a9 9 0 100 18h2a2 2 0 000-4h-1a3 3 0 01-3-3V9a6 6 0 014-6z" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
        </svg>
      );
    case 'free':
      return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M7 12h10M7 9h10M7 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
