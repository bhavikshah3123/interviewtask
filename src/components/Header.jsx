import headerLogo from '../assets/images/header-logo.svg';
import dropdownIcon from '../assets/images/menu-dropdown.svg';
import arrowIcon from '../assets/images/button-rightarrow.svg';

function Header({
  items,
  sections,
  menuOpen,
  onMenuToggle,
  onMenuClose,
  onButtonClick,
}) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <a className="site-header__brand" href="#hero" onClick={onMenuClose}>
            <img src={headerLogo} alt="UzoFin" />
          </a>

          <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
            {items.map((item) => (
              <a key={item.label} href={item.href} className={item.hasDropdown ? 'site-header__nav-link has-dropdown' : 'site-header__nav-link'}>
                {item.label}
                {item.hasDropdown ? <img src={dropdownIcon} alt="" aria-hidden="true" /> : null}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              className="button button--outline button--small"
              href="#standards"
              onClick={() => onButtonClick({ frequency: 620 })}
            >
              Start Building
              <img src={arrowIcon} alt="" aria-hidden="true" />
            </a>

            <button
              className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
              type="button"
              onClick={onMenuToggle}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} id="mobile-menu">
        <div className="container">
          <nav className="mobile-menu__nav" aria-label="Mobile">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} onClick={onMenuClose}>
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
