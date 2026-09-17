import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Mother's Guide", href: "#mothers-guide" },
    { label: "Mama's Haven", href: "#mothers-toolkit" },
    { label: "Home Activities", href: "#activity-planner" },
    { label: "Medical Knowledge", href: "#knowledge-base" },
    { label: "Individual Differences", href: "#differences" },
    { label: "Myths & Facts", href: "#myths" },
    { label: "Daily Schedule", href: "#routine-builder" },
    { label: "Resources", href: "#resources" }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: 'var(--transition-smooth)',
        backgroundColor: scrolled ? 'rgba(251, 251, 249, 0.92)' : 'rgba(251, 251, 249, 0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-soft)' : 'none',
        padding: scrolled ? '6px 0' : '10px 0'
      }}
    >
      <div className="container-peace" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0
          }}
          aria-label="Holding Hope Home"
        >
          <img
            src="/logo.png"
            alt="Holding Hope Logo"
            className="navbar-brand-logo"
            style={{
              width: '99px',
              height: '92px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 3px 10px rgba(82, 121, 111, 0.16))'
            }}
          />
        </a>

        {/* Desktop Navigation - All Links in One Single Line */}
        <nav
          style={{
            display: 'none',
            gap: '6px',
            alignItems: 'center',
            flexWrap: 'nowrap'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--sage-700)';
                e.currentTarget.style.background = 'var(--sage-50)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: Quick Search & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="btn-peaceful btn-peaceful-pill"
            style={{
              background: 'white',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-soft)',
              padding: '8px 12px'
            }}
            title="Search guides and topics"
            aria-label="Search guides"
          >
            <Search size={16} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '6px'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'white',
            borderBottom: '1px solid var(--border-soft)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(0,0,0,0.04)',
                whiteSpace: 'nowrap'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 1120px) {
          .desktop-nav {
            display: flex !important;
          }
          .navbar-brand-logo {
            margin-left: -78px;
          }
        }
        @media (max-width: 1119px) {
          .mobile-nav-toggle {
            display: block !important;
          }
          .navbar-brand-logo {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </header>
  );
}
