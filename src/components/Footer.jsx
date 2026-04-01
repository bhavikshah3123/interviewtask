import footerLogo from '../assets/images/footer-logo.svg';

function Footer({ links }) {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand" data-reveal>
            <img src={footerLogo} alt="UzoFin" />
            <p>
              Connect. Control. Comply.
              <br />
              Experience the future of payments with intelligent automation.
            </p>
          </div>

          <FooterColumn title="Products" items={links.products} />
          <FooterColumn title="Company" items={links.company} />
          <FooterColumn title="Legal" items={links.legal} />

          <div className="site-footer__socials" data-reveal>
            <p>Social</p>
            <div>
              {links.socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <img src={social.icon} alt="" />
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>Copyright © 2025 UzOFin. All rights reserved</span>
          <span>India (EN)</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className="site-footer__column" data-reveal>
      <p>{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <a href="#footer">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
