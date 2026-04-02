import { useEffect, useMemo, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustedStrip from './components/TrustedStrip';
import MetricsSection from './components/MetricsSection';
import WhySection from './components/WhySection';
import ApiSection from './components/ApiSection';
import StandardsSection from './components/StandardsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import { brandLogos, footerLinks, navItems, standardsCards, whyItems } from './data/content';
import useAudioFeedback from './hooks/useAudioFeedback';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const playClick = useAudioFeedback();

  const sections = useMemo(
    () => [
      { id: 'hero', label: 'AI Banking' },
      { id: 'features', label: 'Payments' },
      { id: 'why', label: 'Why UzoFin?' },
      { id: 'standards', label: 'Industry Standard' },
      { id: 'footer', label: 'Contact' },
    ],
    [],
  );

  const handleMenuToggle = () => {
    playClick({ frequency: menuOpen ? 420 : 520, duration: 0.06 });
    setMenuOpen((current) => !current);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useGSAP(() => {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
      .from('.site-header__inner', { y: -24, opacity: 0, duration: 0.7 })
      .fromTo(
        '.hero-section',
        { backgroundSize: '108% auto', backgroundPosition: 'center -24px' },
        { backgroundSize: 'cover', backgroundPosition: 'center top', duration: 1.25, ease: 'power2.out' },
        0,
      )
      .from('.hero-section__title', { y: 42, opacity: 0, duration: 0.8 }, '-=0.18')
      .from('.hero-section__copy--lead', { y: 24, opacity: 0, duration: 0.55 }, '-=0.32')
      .from('.hero-section__actions--primary', { y: 24, opacity: 0, duration: 0.5 }, '-=0.28');

    const revealItems = gsap.utils.toArray('[data-reveal]');

    revealItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
          },
        },
      );
    });

    gsap.utils.toArray('.stat-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 42, y: 10 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.75,
          delay: index * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.metrics-section__stats',
            start: 'top 78%',
          },
        },
      );
    });

    gsap.utils.toArray('.feature-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 34, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.metrics-section__cards',
            start: 'top 82%',
          },
        },
      );
    });

    gsap.fromTo(
      '.metrics-section__headline',
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.metrics-section',
          start: 'top 68%',
        },
      },
    );

    gsap.fromTo(
      '.why-marquee',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-section',
          start: 'top 80%',
        },
      },
    );

    gsap.fromTo(
      '.standards-section .section-heading',
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.standards-section',
          start: 'top 78%',
        },
      },
    );

    gsap.fromTo(
      '.standards-section__marquee',
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.standards-section',
          start: 'top 76%',
        },
      },
    );

    gsap.timeline({ repeat: -1 })
      .to('.metrics-section__spiral', {
        rotate: '+=360',
        duration: 7.4,
        ease: 'none',
      })
      .to('.metrics-section__spiral', {
        duration: 2.6,
      })
      .to('.metrics-section__spiral', {
        rotate: '+=80',
        duration: 1.25,
        ease: 'sine.inOut',
      })
      .to('.metrics-section__spiral', {
        rotate: '+=100',
        duration: 1.4,
        ease: 'sine.inOut',
      })
      .to('.metrics-section__spiral', {
        rotate: '+=40',
        duration: 1.05,
        ease: 'sine.inOut',
      })
      .to('.metrics-section__spiral', {
        duration: 1.4,
      });

    gsap.fromTo(
      '.api-section__content',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.api-section',
          start: 'top 78%',
        },
      },
    );

    gsap.fromTo(
      '.api-section__content .button',
      { scale: 0.94, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.65,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.api-section',
          start: 'top 75%',
        },
      },
    );

    gsap.fromTo(
      '.final-cta__content',
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 80%',
        },
      },
    );

    gsap.utils.toArray('.site-footer__column, .site-footer__socials, .site-footer__brand').forEach(
      (item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: index * 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.site-footer',
              start: 'top 85%',
            },
          },
        );
      },
    );

    gsap.to('.button--hero-primary, .button--api-primary, .button--final-primary', {
      boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 10px 44px rgba(122, 60, 255, 0.5)',
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: 'sine.inOut',
      stagger: {
        each: 0.12,
        from: 'random',
      },
    });

    gsap.to('.hero-section', {
      backgroundPosition: 'center 18px',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  useGSAP(
    () => {
      if (menuOpen) {
        gsap.fromTo(
          '.mobile-menu__nav a',
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.42,
            stagger: 0.06,
            ease: 'power3.out',
          },
        );
      }
    },
    { dependencies: [menuOpen] },
  );

  return (
    <div className="app-shell">
      <Header
        items={navItems}
        sections={sections}
        menuOpen={menuOpen}
        onMenuToggle={handleMenuToggle}
        onMenuClose={() => setMenuOpen(false)}
        onButtonClick={playClick}
      />

      <main>
        <HeroSection onButtonClick={playClick} />
        <TrustedStrip logos={brandLogos} />
        <MetricsSection onButtonClick={playClick} />
        <WhySection items={whyItems} />
        <ApiSection onButtonClick={playClick} />
        <StandardsSection cards={standardsCards} />
        <FinalCtaSection onButtonClick={playClick} />
      </main>

      <Footer links={footerLinks} />
    </div>
  );
}

export default App;
