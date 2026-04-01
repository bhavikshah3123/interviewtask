function WhySection({ items }) {
  const rows = [
    [items[0], items[1], items[7], items[0]],
    [items[2], items[3], items[2], items[4]],
    [items[1], items[4], items[3], items[2]],
  ];

  return (
    <section className="why-section" id="why">
      <div className="container">
        <div className="section-heading" data-reveal>
          <h2>
            Why <span className="gradient-text">UzoFin?</span>
          </h2>
          <p>
            Discover endless creativity with PromptVerse. Generate diverse content
            effortlessly using prompts. Stay updated with real-time trends, automate
            tasks, and extract insights from any document or URL.
          </p>
        </div>

        <div className="why-marquee" data-reveal>
          {rows.map((row, rowIndex) => (
            <div
              key={`why-row-${rowIndex}`}
              className={`why-row${rowIndex % 2 === 1 ? ' why-row--reverse' : ''}`}
            >
              <div className="why-row__track">
                {[...row, ...row].map((item, itemIndex) => (
                  <article key={`${item.title}-${rowIndex}-${itemIndex}`} className="why-card">
                    <div className="why-card__top">
                      <h3>{item.title}</h3>
                      <span aria-hidden="true">&#8599;</span>
                    </div>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
