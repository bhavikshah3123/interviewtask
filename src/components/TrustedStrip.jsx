function TrustedStrip({ logos }) {
  const sliderLogos = [...logos, ...logos];

  return (
    <section className="trusted-strip-section" aria-label="Trusted partners">
      <div className="container">
        <div className="trusted-strip" data-reveal>
          <p>Powering tools and integration for companies around the world</p>
          <div className="trusted-strip__slider">
            <div className="trusted-strip__track">
              {sliderLogos.map((logo, index) => (
                <span key={`${logo.name}-${index}`} className="trusted-strip__logo">
                  <img src={logo.image} alt={logo.name} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedStrip;
