import HoverTextReveal from '../HoverTextReveal';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <h2 className="footer-title">
          <span className="title-italic">Blending </span>
          <span className="title-view-inter _2">code</span>
          <br />
          <span className="title-italic">& </span>
          <span className="title-view-inter _4">commerce</span>
          <br />
          <span className="title-italic _2">to </span>
          <span className="title-view-inter _5">craft solutions</span>
          <br />
          <span className="title-italic _6">since </span>
          <span className="title-view-inter _6">2019</span>
        </h2>
      </div>
      <div className="footer-nav">
        <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="footer-link">
          <HoverTextReveal 
            text="LinkedIn" 
            staggerDelay={0.03}
            className="inline-block"
          />
        </a>
        <a href="mailto:veronica.zubakova@gmail.com" className="footer-link">
          <HoverTextReveal 
            text="Email" 
            staggerDelay={0.03}
            className="inline-block"
          />
        </a>
      </div>
    </footer>
  );
}
