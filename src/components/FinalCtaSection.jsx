import arrowIcon from '../assets/images/button-rightarrow.svg';

function FinalCtaSection({ onButtonClick }) {
  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <div className="final-cta__panel" data-reveal>
          <div className="final-cta__content">
            <h2>
              The future of your industry <span className="gradient-text">starts here</span>
            </h2>
            <div className="final-cta__actions">
              <a
                className="button button--primary button--small button--final-primary"
                href="#footer"
                onClick={() => onButtonClick({ frequency: 540 })}
              >
                Book a Demo
                <img src={arrowIcon} alt="" aria-hidden="true" />
              </a>
              <a
                className="button button--ghost button--small"
                href="#hero"
                onClick={() => onButtonClick({ frequency: 420 })}
              >
                Build AI
                <img src={arrowIcon} alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
