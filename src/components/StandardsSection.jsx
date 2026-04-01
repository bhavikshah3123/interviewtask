import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const MARQUEE_SPEED = 48;

function StandardCard({ card, index, loopIndex, metrics, motionX, cardRef }) {
  const { viewportWidth, setWidth, cardWidth, gap } = metrics;

  const focus = useTransform(motionX, (latest) => {
    if (!viewportWidth || !setWidth || !cardWidth) {
      return 0;
    }

    const baseCenter = loopIndex * setWidth + index * (cardWidth + gap) + cardWidth / 2;
    const currentCenter = baseCenter + latest;
    const viewportCenter = viewportWidth / 2;
    const distance = Math.abs(currentCenter - viewportCenter);
    const maxDistance = viewportWidth * 0.32;

    return Math.max(0, 1 - distance / maxDistance);
  });

  const scale = useTransform(focus, [0, 1], [0.92, 1.06]);
  const opacity = useTransform(focus, [0, 0.7, 1], [0.24, 0.7, 1]);
  const y = useTransform(focus, [0, 1], [20, 0]);
  const rotateX = useTransform(focus, [0, 1], [2, 0]);
  const rotateY = useTransform(focus, [0, 1], [-2, 0]);
  const filter = useTransform(focus, (value) => {
    const saturate = 0.75 + value * 0.33;
    const brightness = 0.82 + value * 0.12;
    return `saturate(${saturate}) brightness(${brightness})`;
  });
  const boxShadow = useTransform(
    focus,
    [0, 1],
    ['0 8px 20px rgba(0,0,0,0.15)', '0 30px 80px rgba(120,70,255,0.38)'],
  );
  const borderColor = useTransform(
    focus,
    [0, 1],
    ['rgba(255, 255, 255, 0.12)', 'rgba(182, 137, 255, 0.42)'],
  );
  const zIndex = useTransform(focus, (value) => Math.round(10 + value * 10));

  return (
    <motion.article
      ref={cardRef}
      className="standard-card"
      style={{ scale, opacity, y, rotateX, rotateY, filter, boxShadow, borderColor, zIndex }}
    >
      <h3>{card.title}</h3>
      <p>{card.copy}</p>
      <a href="#footer">Know more</a>
    </motion.article>
  );
}

function StandardsSection({ cards }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const sampleCardRef = useRef(null);
  const motionX = useMotionValue(0);
  const [metrics, setMetrics] = useState({
    viewportWidth: 0,
    setWidth: 0,
    cardWidth: 0,
    gap: 0,
  });

  useLayoutEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current || !sampleCardRef.current) {
        return;
      }

      const nextGap = parseFloat(getComputedStyle(trackRef.current).gap || '0');

      setMetrics({
        viewportWidth: viewportRef.current.clientWidth,
        setWidth: trackRef.current.scrollWidth,
        cardWidth: sampleCardRef.current.getBoundingClientRect().width,
        gap: nextGap,
      });
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewportRef.current);
    resizeObserver.observe(trackRef.current);
    resizeObserver.observe(sampleCardRef.current);

    window.addEventListener('resize', measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [cards.length]);

  useEffect(() => {
    if (!metrics.setWidth) {
      return undefined;
    }

    motionX.set(0);

    const controls = animate(motionX, -metrics.setWidth, {
      duration: metrics.setWidth / MARQUEE_SPEED,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    });

    return () => controls.stop();
  }, [metrics.setWidth, motionX]);

  return (
    <section className="standards-section" id="standards">
      <div className="container">
        <div className="section-heading section-heading--left" data-reveal>
          <p className="eyebrow">24/7 support</p>
          <h2>
            Industry <span className="gradient-text">Standard</span>
          </h2>
        </div>
      </div>

      <div ref={viewportRef} className="standards-section__marquee" data-reveal>
        <motion.div
          className="standards-section__belt"
          style={{ x: motionX, willChange: 'transform', transform: 'translateZ(0)' }}
        >
          {[0, 1].map((loopIndex) => (
            <div
              key={`standards-track-${loopIndex}`}
              ref={loopIndex === 0 ? trackRef : null}
              className="standards-section__track"
              aria-hidden={loopIndex === 1}
            >
              {cards.map((card, index) => (
                <StandardCard
                  key={`${card.title}-${loopIndex}-${index}`}
                  card={card}
                  index={index}
                  loopIndex={loopIndex}
                  metrics={metrics}
                  motionX={motionX}
                  cardRef={loopIndex === 0 && index === 0 ? sampleCardRef : null}
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StandardsSection;
