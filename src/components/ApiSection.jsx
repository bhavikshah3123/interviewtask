import arrowIcon from '../assets/images/button-rightarrow.svg';

function ApiSection({ onButtonClick }) {
  return (
    <section className="api-section">
      <div className="container">
        <div className="api-section__content" data-reveal>
          <h2>
            Build Faster with Our <span className="gradient-text">Powerful API&apos;s</span>
          </h2>
          <p>
            Plug into secure, developer-friendly financial API&apos;s and launch in days
            not months
          </p>
          <a
            className="button button--primary button--small button--api-primary"
            href="#standards"
            onClick={() => onButtonClick({ frequency: 560 })}
          >
            Start Building
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ApiSection;
