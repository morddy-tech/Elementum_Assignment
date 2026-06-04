export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  // classes for width/height and relative overlay offsets
  sizeClass: string;
  positionClass: string;
  animationDelay: number;
}

export interface ServiceOffering {
  id: string;
  category: string;
  title: string;
  arrowDirection?: string;
  hasCollageBadge?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  // Absolute or relative positioning in the floating cluster
  positionClass: string;
}

export interface NavLink {
  name: string;
  href: string;
}
