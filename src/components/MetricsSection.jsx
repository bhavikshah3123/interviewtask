import spiralLine from '../assets/images/Spiral Line.svg';
import arrowIcon from '../assets/images/button-rightarrow.svg';

const metrics = [
  { value: '11.5M+', label: 'Transactions processed monthly' },
  { value: '99.9%', label: 'Platform uptime and reliability' },
  { value: '70% Faster', label: 'Merchant onboarding with automation' },
];

const cards = [
  {
    title: 'AI Banking',
    copy:
      'Smart automated digital banking for businesses. Instant account data, intelligent insights, and real-time operations.',
    stat: '3,969',
    footer: 'transactions per second',
  },
  {
    title: 'Payments',
    copy:
      'Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.',
    stat: '1,675',
    footer: 'validated blocks',
  },
  {
    title: 'Payouts',
    copy:
      'Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.',
    stat: '163,079,581,384',
    footer: 'total transactions',
  },
  {
    title: 'Merchant Onboarding',
    copy:
      'Frictionless onboarding for merchants of any size. Automated KYC, verification, and risk assessment in minutes.',
    stat: '100%',
    footer: 'on-merchant onboarding',
  },
];

function MetricsSection({ onButtonClick }) {
  return (
    <section className="metrics-section" id="features">
      <div className="metrics-section__spiral" aria-hidden="true">
        <img src={spiralLine} alt="" />
      </div>
      <div className="container">
        <div className="metrics-section__grid">
          <div className="metrics-section__intro" data-reveal>
            <div>
              <h2>Your Business Pays Are Now Faster and Secure.</h2>
            </div>

            <div className="metrics-section__headline">
              <h3>Our Intelligent Financial Suite</h3>
              <p>Tools that accelerate every step of your finance workflow.</p>
            </div>
          </div>

          <div className="metrics-section__stats" data-reveal>
            {metrics.map((metric) => (
              <article key={metric.label} className="stat-card">
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="metrics-section__cards">
          {cards.map((card) => (
            <article key={card.title} className="feature-card" data-reveal>
              <div className="feature-card__accent" />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <strong>{card.stat}</strong>
              <span>{card.footer}</span>
            </article>
          ))}
        </div>

        <div className="metrics-section__cta" data-reveal>
          <a
            className="button button--outline"
            href="#why"
            onClick={() => onButtonClick({ frequency: 500 })}
          >
            Explore platform
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;
