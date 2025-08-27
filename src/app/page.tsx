'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scripts from '@/components/Scripts';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    // Preloader animation
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        gsap.to(preloader, {
          height: '0vh',
          duration: 0.1,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsPreloaderVisible(false);
          }
        });
      }, 4000);
    }

    // Text animations
    const animateText = () => {
      const titleElements = document.querySelectorAll('.title-view-inter');
      titleElements.forEach((element, index) => {
        gsap.fromTo(element,
          { filter: 'blur(10px)', opacity: 0 },
          {
            filter: 'blur(0em)',
            opacity: 1,
            duration: 0.6,
            delay: 0.6 + (index * 0.1),
            ease: 'power2.out'
          }
        );
      });

      const italicElements = document.querySelectorAll('.title-italic');
      italicElements.forEach((element, index) => {
        gsap.fromTo(element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            delay: 0.8 + (index * 0.1),
            ease: 'power2.out'
          }
        );
      });
    };

    // Run text animation after preloader
    setTimeout(animateText, 4500);

    // Cursor animation
    const cursorArea = document.querySelector('.b-cursor-area');
    const cursorButton = document.querySelector('.b-button.is-circle');

    if (cursorArea && cursorButton) {
      const cards = document.querySelectorAll('.b-home-catalog_card-wrap');
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          setIsCursorVisible(true);
          cursorButton.classList.add('is-active');
          gsap.to(cursorButton, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          setIsCursorVisible(false);
          cursorButton.classList.remove('is-active');
          gsap.to(cursorButton, {
            scale: 0.5,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }

    // Scroll animations
    gsap.fromTo('.b-home-cover_fixed-block',
      { y: '-20vh', filter: 'blur(0px)' },
      {
        y: '0vh',
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: '.s-section.is-home-cover',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Footer background animation
    gsap.fromTo('.b-home-cover_bg.is-bot',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.s-section.is-footer',
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      }
    );

    // Footer navigation animation
    gsap.fromTo('.b-nav.is-bot',
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.s-section.is-footer',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Footer text animations
    gsap.fromTo('.b-link.is-footer',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.s-section.is-footer',
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      }
    );

  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      id: 1,
      title: 'ticket to go',
      category: 'mobile app design',
      year: '2023',
      image: '/images/1.jpeg',
      color: '#3a54b1',
      position: 'top'
    },
    {
      id: 2,
      title: 'jam.art',
      category: 'ux/ui design / no-code dev',
      year: '2024',
      image: '/images/2.jpeg',
      color: '#de6495',
      position: 'bottom'
    },
    {
      id: 3,
      title: 'pro-creative',
      category: 'web design / no-code dev',
      year: '2024',
      image: '/images/3.jpeg',
      color: '#CB2B2B',
      position: 'top'
    },
    {
      id: 4,
      title: 'uoem.pro',
      category: 'Web design / no-code dev',
      year: '2023',
      image: '/images/4.jpeg',
      color: '#0a6e93',
      position: 'bottom'
    },
    {
      id: 5,
      title: 'second life',
      category: 'ux/ui design',
      year: '2023',
      image: '/images/5.jpeg',
      color: '#014c47',
      position: 'top'
    },
    {
      id: 6,
      title: 'No toxic conf',
      category: 'web design / no-code dev',
      year: '2022',
      image: '/images/6.jpeg',
      color: '#CB952B',
      position: 'bottom'
    }
  ];

  return (
    <div className="page-wrap g-bg-color-blue g-text-color-white">
      {/* Preloader */}
      {isPreloaderVisible && (
        <div className="preloader is-main">
          <div className="preloader_wrap">
            <div className="preloader_title">
              <div className="g-text-size-55 g-text-style-allcaps g-text-centr">
                this website is built on happy energy
              </div>
            </div>
            <div className="preloader_load-wrap">
              <img 
                src="https://veronicazubakova.com/wp-content/themes/veronicas-wondrous-site-a74698_1726064536/images/66f05f21d11d188a99e2c288_happy-cat-happy-happy-cat.gif" 
                alt="" 
                className="preloader_img"
              />
              <div className="div-block-14">
                <div className="preloader_load-line"></div>
              </div>
              <div className="preloader_text">
                <span className="preloader_text-percent">0%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu */}
      <div className={`b-menu g-difference_is-mob ${isMenuOpen ? 'is-active' : ''}`}>
        <nav className="b-menu_conteiner">
          <nav className="b-menu_nav">
            <div className="b-menu_nav-mob">
              <div className="div-block-12">
                <div className="div-block-11">
                  <a href="#selected-projects" className="b-menu-mob_link">case studies</a>
                  <a href="/works" className="b-menu-mob_link">All works</a>
                  <a href="/about" className="b-menu-mob_link">About me</a>
                  <a href="https://confirmed-foam-eab.notion.site/Veronica-Zubakova-fdba2e0623de4ed3b9747f407c8c8d31?pvs=4" target="_blank" className="b-menu-mob_link">CV</a>
                </div>
                <div className="div-block-11">
                  <a href="mailto:veronica.zubakova@gmail.com" className="b-menu-mob_link">Email</a>
                  <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="b-menu-mob_link">LinkedIn</a>
                  <a href="https://www.behance.net/veronicazubakova" target="_blank" className="b-menu-mob_link">Behance</a>
                  <a href="https://instagram.com/veronique.nebloger" target="_blank" className="b-menu-mob_link">Instagram</a>
                </div>
              </div>
            </div>
            <div className="b-nav_wrap hmob-hide">
              <a href="/" className="b-link is-difference w--current">veronica zubakova</a>
              <a href="/works" className="b-link is-difference">all works</a>
              <a href="/about" className="b-link is-difference">about me</a>
            </div>
          </nav>
          <div className="b-menu_btn" onClick={toggleMenu}>
            <div className="div-block-10">
              <div className="g-text-size-16 is-menu_open">Menu</div>
              <div className="g-text-size-16 is-menu_close">Close</div>
            </div>
          </div>
          <a href="/" className="b-link is-difference is-mob _2 w--current">
            <div className="g-text-weight-500">veronica.</div>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <main className="main">
        {/* Fixed Title Block */}
        <div className="b-home-cover_fixed-block">
          <div className="g-text-desc tb-hide">Veronica Zubakova</div>
          <h1 className="b-title_h1 g-text-centr">
            <div className="title-view-inter _1">Di</div>
            <div className="title-italic _2">g</div>
            <div className="title-view-inter _2">ital</div>
            <div className="title_h1-block">
              <div className="title-italic_a">a</div>
              <div className="title-view-inter _3">nd </div>
            </div>
            <div className="title-view-inter _4">ux/ui</div>
            <div className="div-block-8">
              <div className="title-view-inter _4"> desi</div>
              <div className="title-italic _2">g</div>
              <div className="title-view-inter _5">ner</div>
            </div>
          </h1>
          <div className="g-text-desc g-text-right tb-hide">6 years of experience</div>
        </div>

        {/* Home Cover Section */}
        <section className="s-section is-home-cover">
          <div className="b-home-cover_bg">
            <img src="https://veronicazubakova.com/wp-content/themes/veronicas-wondrous-site-a74698_1726064536/images/67d985d7fbbcad94a045321b_120D18DD0BAD180D0B0D0BD.webp" alt="" className="b-img" />
            <img src="https://veronicazubakova.com/wp-content/themes/veronicas-wondrous-site-a74698_1726064536/images/66a3e79ca6be891c36fbc138_D0B1D0BED0BBD18CD188D0B0D18F20D0B7D0B0D0B3D0BED0B3D183D0BBD0B8D0BDD0B0.png" alt="" className="b-img is-home-cover_1" />
            <img src="https://veronicazubakova.com/wp-content/themes/veronicas-wondrous-site-a74698_1726064536/images/66a3e79c83f9fdbf4b1d26e6_D0BCD0B0D0BBD0B5D0BDD18CD188D0BAD0B0D18F20D0B7D0B0D0B3D0BED0B3D183D0BBD0B8D0BDD0B0.png" alt="" className="b-img is-home-cover_2" />
          </div>
          <div className="w-layout-blockcontainer b-container g-mg-global-conteiner g-h_100">
            <div className="b-nav hmob-hide">
              <div className="b-nav_wrap">
                <a href="https://instagram.com/veronique.nebloger" target="_blank" className="b-link">Instagram</a>
                <a href="https://www.behance.net/veronicazubakova" target="_blank" className="b-link">Behance</a>
                <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="b-link">LinkedIn</a>
              </div>
            </div>
            <div className="b-home-cover_nav">
              <div className="div-block-7">
                <div className="g-text-desc g-text-centr g-flex_grow is-b-home-cover_nav">Veronica Zubakova</div>
                <div className="b-home-cover_nav-wrap">
                  <div className="g-flex-v_center_top g-flex-gap_20">
                    <a href="#selected-projects" className="b-link">Selected projects</a>
                    <a href="/works" className="b-link">Other works</a>
                    <a href="/about" className="b-link">About me</a>
                    <a href="https://confirmed-foam-eab.notion.site/Veronica-Zubakova-fdba2e0623de4ed3b9747f407c8c8d31?pvs=4" target="_blank" className="b-link">CV</a>
                  </div>
                </div>
                <div className="g-text-desc g-text-centr g-flex_grow is-b-home-cover_nav _2">6 years of experience</div>
              </div>
              <a href="mailto:veronica.zubakova@gmail.com" className="b-button">contact me</a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="s-section is-home-catalog">
          <div id="selected-projects" className="w-layout-blockcontainer b-container g-mg-global-conteiner g-h_100">
            <div className="b-home-catalog">
              {projects.map((project) => (
                <div key={project.id} className="b-home-catalog_card-wrap">
                  <div 
                    className={`b-home-catalog_card-bg ${project.position === 'bottom' ? '_2' : ''}`}
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <div className="b-home-catalog_card">
                    <div className="tb_h_40em">
                      <a href={`/projects/${project.id}`} className="b-home-catalog_link">
                        <img className="b-img g-h_100 tb_h_40em" src={project.image} alt={project.title} />
                      </a>
                      <div className={`b-home-catalog_text-wrap ${project.position} bot`}>
                        <h2 className={`b-title_h2 is-home-catalog ${project.position === 'bottom' ? '_2' : ''}`}>
                          <div className="g-text-bg-color" style={{ backgroundColor: project.color }}>
                            {project.title}
                          </div>
                        </h2>
                        <div>
                          <div className={`g-text-right is-home-catalog ${project.position === 'bottom' ? '_2' : ''}`}>
                            <div className="g-text-size-20 g-text-bg-color g-text-style-allcaps year" style={{ backgroundColor: project.color }}>
                              {project.year}
                            </div>
                          </div>
                          <div className="g-text-right is-home-catalog">
                            <div className="b-project-card_text-line black _4" style={{ backgroundColor: project.color }}>
                              {project.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cursor Area */}
        <div className="b-cursor-area">
          <div className="b-button is-circle">
            <div className="b-text">View</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <section className="s-section is-footer">
          <div className="w-layout-blockcontainer b-container g-mg-global-conteiner is-footer">
            <div className="b-home-cover_bg is-bot">
              <img src="https://veronicazubakova.com/wp-content/themes/veronicas-wondrous-site-a74698_1726064536/images/67d985d7fbbcad94a045321b_120D18DD0BAD180D0B0D0BD.webp" alt="" className="b-img g-h_100" />
              <img src="https://veronicazubakova.com/wp-content/themes/veronicas-wondrous-site-a74698_1726064536/images/66a3e79ca6be891c36fbc138_D0B1D0BED0BBD18CD188D0B0D18F20D0B7D0B0D0B3D0BED0B3D183D0BBD0B8D0BDD0B0.png" alt="" className="b-img is-home-cover_1" />
              <img src="https://veronicazubakova.com/wp-content/themes/veronicas-wondrous-site-a74698_1726064536/images/66a3e79c83f9fdbf4b1d26e6_D0BCD0B0D0BBD0B5D0BDD18CD188D0BAD0B0D18F20D0B7D0B0D0B3D0BED0B3D183D0BBD0B8D0BDD0B0.png" alt="" className="b-img is-home-cover_2" />
            </div>
            <div className="div-block-3">
              <div className="g-text-desc is-footer">Veronica Zubakova</div>
              <div className="g-flex-v_center_center">
                <div>
                  <h2 className="b-title_h1_is-footer">
                    <span className="title-view-inter _1">c</span>
                    <span className="title-italic_r">r</span>
                    <span className="title-view-inter _2">eating<br />user e</span>
                    <span className="title-italic">x</span>
                    <span className="title-view-inter _3">perience<br />tailored</span> 
                    <span className="title-italic">t</span>
                    <span className="title-view-inter _4">o busine</span>
                    <span className="title-italic">s</span>
                    <span className="title-view-inter _5">s needs sin</span>
                    <span className="title-italic_c">c</span>
                    <span className="title-view-inter _6">e 2018</span>
                  </h2>
                </div>
              </div>
              <div className="g-text-desc g-text-centr is-footer--2">awwwards younG jury 2025</div>
            </div>
          </div>
        </section>
        <div className="b-nav is-bot g-difference">
          <div className="b-nav_wrap is-difference">
            <a href="https://instagram.com/veronique.nebloger" target="_blank" className="b-link">Instagram</a>
            <div className="b-link is-footer">
              design: veronica zubakova
            </div>
            <a href="https://www.behance.net/veronicazubakova" target="_blank" className="b-link">Behance</a>
            <a href="https://t.me/lucius_wd" target="_blank" className="b-link is-footer _2">development: kirill andreev</a>
            <a href="https://www.linkedin.com/in/veroni%D1%81azubakova" target="_blank" className="b-link">LinkedIn</a>
            <a href="mailto:veronica.zubakova@gmail.com" className="b-link _2">Email</a>
          </div>
        </div>
      </footer>

      {/* Awwwards Badge */}
      <div id="awwwards">
        <a href="https://www.awwwards.com/sites/veronica-zubakova-portfolio" target="_blank">
          <svg width="53.08" height="171.358">
            <path className="js-color-bg" fill="white" d="M0 0h53.08v171.358H0z"></path>
            <g className="js-color-text" fill="black">
              <path d="M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495"></path>
            </g>
          </svg>
        </a>
      </div>
      
      <Scripts />
    </div>
  );
}
