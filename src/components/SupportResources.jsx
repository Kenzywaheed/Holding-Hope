import React from 'react';
import { Globe, BookOpen, Users, PhoneCall, Heart, ExternalLink } from 'lucide-react';

const organizations = [
  {
    name: "Down Syndrome International (DSi)",
    desc: "A UK-based global federation of individuals and organizations committed to improving quality of life for people with Down syndrome worldwide.",
    link: "https://www.ds-int.org",
    scope: "Global Advocacy"
  },
  {
    name: "National Down Syndrome Society (NDSS)",
    desc: "The leading human rights organization for individuals with Down syndrome in the United States, providing comprehensive parent guides, legal advocacy, and educational resources.",
    link: "https://ndss.org",
    scope: "US & International"
  },
  {
    name: "Global Down Syndrome Foundation",
    desc: "Dedicated to significantly improving the lives of people with Down syndrome through research, medical care, education, and advocacy.",
    link: "https://www.globaldownsyndrome.org",
    scope: "Medical & Research"
  },
  {
    name: "Down Syndrome Medical Interest Group (DSMIG)",
    desc: "Provides evidence-based healthcare guidelines for children and adults with Down syndrome for pediatricians and parents.",
    link: "https://www.dsmig-usa.org",
    scope: "Clinical Guidelines"
  }
];

const books = [
  {
    title: "Babies with Down Syndrome: A New Parents' Guide",
    author: "Susan J. Skallerup",
    theme: "Comprehensive medical, emotional, and daily living guide for new mothers."
  },
  {
    title: "Teaching Reading to Children with Down Syndrome",
    author: "Patricia Logan Oelwein",
    theme: "A proven, visual step-by-step reading guide utilized by educators and mothers worldwide."
  },
  {
    title: "Gross Motor Skills in Children with Down Syndrome",
    author: "Patricia C. Winders, PT",
    theme: "Physical therapy guide with illustrated exercises to build motor strength and balance."
  },
  {
    title: "Early Communication Skills for Children with Down Syndrome",
    author: "Libby Kumin, Ph.D., CCC-SLP",
    theme: "Practical speech, signing, and oral-motor strategies from infancy through early childhood."
  }
];

export default function SupportResources() {
  return (
    <section id="resources" className="section-peace" style={{ backgroundColor: 'var(--color-canvas-subtle)' }}>
      <div className="container-peace">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <span className="peace-badge peace-badge-sage" style={{ marginBottom: '14px' }}>
            <Globe size={14} className="text-sage-600" />
            Support Community
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Global Networks & Maternal Resources
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            You are never alone on this journey. Connect with passionate global foundations, clinical specialists, and empowering books written for mothers.
          </p>
        </div>

        {/* Global Organizations Grid */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={20} className="text-sage-600" />
            Accredited Global Organizations
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className="peace-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span className="peace-badge peace-badge-sky" style={{ marginBottom: '10px' }}>
                    {org.scope}
                  </span>
                  <h4 style={{ fontSize: '1.14rem', marginBottom: '10px' }}>
                    {org.name}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                    {org.desc}
                  </p>
                </div>

                <a
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--sage-700)',
                    textDecoration: 'none'
                  }}
                >
                  <span>Visit Foundation Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Books for Mothers */}
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} className="text-honey-600" />
            Empowering Books for Mothers & Caregivers
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {books.map((b, idx) => (
              <div
                key={idx}
                className="peace-card"
                style={{
                  padding: '22px',
                  background: 'white',
                  borderLeft: '4px solid var(--honey-500)'
                }}
              >
                <div style={{ fontSize: '1.04rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {b.title}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '10px' }}>
                  By {b.author}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {b.theme}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
