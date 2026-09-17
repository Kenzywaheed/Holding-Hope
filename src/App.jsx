import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3DSection from './components/Hero3DSection';
import MothersGuideSection from './components/MothersGuideSection';
import MothersToolkitSection from './components/MothersToolkitSection';
import ActivityGenerator from './components/ActivityGenerator';
import KnowledgeBaseSection from './components/KnowledgeBaseSection';
import DifferencesSection from './components/DifferencesSection';
import MilestoneCompass from './components/MilestoneCompass';
import MythVsFact from './components/MythVsFact';
import RoutineBuilder from './components/RoutineBuilder';
import SupportResources from './components/SupportResources';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Floating Serene Navigation */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero with Interactive 3D Child Avatar */}
        <Hero3DSection />

        {/* 2. Mother's Teaching Journey ("Mother's Heart & Hands") */}
        <MothersGuideSection />

        {/* 2b. Mother's Haven & Daily Toolkit (Sanctuary, Signs, Feeding, Doctor Visit Prep, Joy Jar) */}
        <MothersToolkitSection />

        {/* 3. Interactive Home Activity Planner */}
        <ActivityGenerator />

        {/* 4. Complete Down Syndrome Knowledge Base */}
        <KnowledgeBaseSection />

        {/* 5. Celebrating Individual Differences & Trailblazers */}
        <DifferencesSection />

        {/* 6. Compassionate Milestone Compass */}
        <MilestoneCompass />

        {/* 7. Interactive Myth vs Fact Flip Cards */}
        <MythVsFact />

        {/* 8. Visual Daily Schedule Maker */}
        <RoutineBuilder />

        {/* 9. Support Networks & Recommended Reading */}
        <SupportResources />
      </main>

      {/* Peaceful Footer */}
      <Footer />
    </div>
  );
}
