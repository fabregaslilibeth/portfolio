'use client'
import HoverTextReveal from "../HoverTextReveal";

interface SideNavigationProps {
  className?: string;
}

export default function SideNavigation({ className = '' }: SideNavigationProps) {
  return (
    <nav className={`side-nav ${className}`}>
      <a href="https://instagram.com/veronique.nebloger" target="_blank" className="nav-link">
        <HoverTextReveal text="WORKS"></HoverTextReveal>
      </a>
      <a href="https://www.behance.net/veronicazubakova" target="_blank" className="nav-link">About</a>
      <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="nav-link">Contact</a>
    </nav>
  );
}
