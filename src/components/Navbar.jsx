import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, BookOpen, Sparkles, Users, Home } from 'lucide-react';

export default function Navbar({ onOpenSearch, currentPage, onNavigatePage }) {
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
    { label: "Welcome", pageId: 1, sectionId: "hero", icon: Home },
    { label: "Mother's Teaching", pageId: 2, sectionId: "mothers-guide", icon: BookOpen },
    { label: "Mama's Haven", pageId: 3, sectionId: "mothers-toolkit", icon: Heart },
    { label: "Medical Facts", pageId: 4, sectionId: "knowledge-base", icon: Sparkles },
    { label: "Community & Help", pageId: 5, sectionId: "resources", icon: Users }
  ];

  const handleLinkClick = (pageId, sectionId) => {
    setMobileMenuOpen(false);
    if (onNavigatePage) {
      onNavigatePage(pageId, sectionId);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: 'var(--transition-smooth)',
        backgroundColor: scrolled ? 'rgba(251, 251, 249, 0.94)' : 'rgba(251, 251, 249, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-soft)' : 'none',
        padding: scrolled ? '4px 0' : '8px 0'
      }}
    >
      <div className="container-peace" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#welcome"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(1, 'hero');
          }}
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
              width: '84px',
              height: '76px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(82, 121, 111, 0.16))'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            gap: '6px',
            alignItems: 'center',
            flexWrap: 'nowrap'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.pageId;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.pageId, link.sectionId)}
                style={{
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: isActive ? 'var(--sage-100)' : 'transparent',
                  color: isActive ? 'var(--sage-700)' : 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  fontFamily: 'Quicksand, sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--sage-700)';
                    e.currentTarget.style.background = 'var(--sage-50)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Controls: Quick Search & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="btn-peaceful btn-peaceful-pill"
            style={{
              background: 'white',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-soft)',
              padding: '7px 12px',
              fontSize: '0.82rem'
            }}
            title="Search guides and topics"
            aria-label="Search guides"
          >
            <Search size={15} />
            <span className="search-btn-label" style={{ marginLeft: '4px' }}>Search</span>
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
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxShadow: 'var(--shadow-medium)'
          }}
        >
          <div style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '4px' }}>
            Learning Journey Pages
          </div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentPage === link.pageId;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.pageId, link.sectionId)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  textAlign: 'left',
                  background: isActive ? 'var(--sage-50)' : 'transparent',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 12px',
                  color: isActive ? 'var(--sage-700)' : 'var(--text-primary)',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.94rem',
                  cursor: 'pointer',
                  fontFamily: 'Quicksand, sans-serif'
                }}
              >
                <Icon size={18} style={{ color: isActive ? 'var(--sage-600)' : 'var(--text-muted)' }} />
                <span>{link.label}</span>
                {isActive && (
                  <span style={{ marginLeft: 'auto', fontSize: '0.72rem', background: 'var(--sage-600)', color: 'white', padding: '2px 8px', borderRadius: '99px' }}>
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 959px) {
          .mobile-nav-toggle {
            display: block !important;
          }
          .search-btn-label {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
