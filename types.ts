
export interface NavItem {
  label: string;
  path: string;
}

export interface ContentSection {
  title: string;
  body: string;
}

// Fixed: Added AdProps interface which was missing and causing an import error in AdPlaceholder.tsx
export interface AdProps {
  slot?: string;
  type?: 'mid-content' | 'sidebar' | 'top';
  className?: string;
}
