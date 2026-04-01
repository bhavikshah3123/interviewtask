import arrowIcon from '../assets/images/button-rightarrow.svg';

function HeroSection({ onButtonClick }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-section__content" data-reveal>
          <h1 className="hero-section__title">
            AI-powered <span className="gradient-text">Banking &amp; Payment Solutions</span>
            <br />
            built for Modern Businesses
          </h1>
          <p className="hero-section__copy hero-section__copy--lead">
            UzoFin brings intelligent automation, real-time payments, and seamless
            financial operations together so you can scale without friction.
          </p>

          <div className="hero-section__actions hero-section__actions--primary">
            <a
              className="button button--primary button--hero-primary"
              href="#features"
              onClick={() => onButtonClick({ frequency: 540 })}
            >
              Start Building
              <img src={arrowIcon} alt="" aria-hidden="true" />
            </a>
            <a
              className="button button--ghost"
              href="#why"
              onClick={() => onButtonClick({ frequency: 440 })}
            >
              Read Docs
              <img src={arrowIcon} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
