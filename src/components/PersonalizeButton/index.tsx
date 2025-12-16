import React, { useState, useEffect } from 'react';

const PersonalizeButton = () => {
  const [level, setLevel] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userLevel') || 'beginner';
    }
    return 'beginner';
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userLevel', level);
      applyPersonalization(level);
    }
  }, [level]);

  const applyPersonalization = (userLevel: string) => {
    if (typeof window === 'undefined') return;
    
    const content = document.querySelector('article');
    if (!content) return;

    // Add personalization class to body
    document.body.className = document.body.className.replace(/level-\w+/g, '');
    document.body.classList.add(`level-${userLevel}`);

    // Show/hide content based on level
    const technicalSections = content.querySelectorAll('h3, code, pre');
    
    if (userLevel === 'beginner') {
      // Simplify technical content
      technicalSections.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.display = 'block';
        htmlEl.style.opacity = '0.7';
      });
    } else if (userLevel === 'advanced') {
      // Show all technical details
      technicalSections.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.display = 'block';
        htmlEl.style.opacity = '1';
      });
    }
  };

  const getLevelDescription = () => {
    switch(level) {
      case 'beginner': return 'New to robotics';
      case 'intermediate': return 'Some programming experience';
      case 'advanced': return 'Experienced in robotics/AI';
      default: return '';
    }
  };

  return (
    <>
      <div style={{
        padding: '16px',
        marginBottom: '24px',
        background: '#f0f9ff',
        border: '2px solid #3b82f6',
        borderRadius: '12px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <strong style={{ color: '#1e40af' }}>📚 Your Level:</strong>
            <span style={{ marginLeft: '8px', color: '#3b82f6', textTransform: 'capitalize' }}>
              {level} - {getLevelDescription()}
            </span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Change Level
          </button>
        </div>
      </div>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '16px',
            maxWidth: '500px',
            width: '90%',
          }}>
            <h2 style={{ marginTop: 0 }}>Personalize Your Learning</h2>
            <p style={{ color: '#666' }}>
              Choose your experience level to customize the content:
            </p>

            <div style={{ marginTop: '24px' }}>
              {['beginner', 'intermediate', 'advanced'].map((lvl) => (
                <div
                  key={lvl}
                  onClick={() => {
                    setLevel(lvl);
                    setShowModal(false);
                  }}
                  style={{
                    padding: '16px',
                    margin: '12px 0',
                    border: level === lvl ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: level === lvl ? '#eff6ff' : 'white',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.background = '#f9fafb';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.background = level === lvl ? '#eff6ff' : 'white';
                  }}
                >
                  <div style={{ fontWeight: '600', textTransform: 'capitalize', marginBottom: '4px' }}>
                    {lvl === 'beginner' && '🌱 Beginner'}
                    {lvl === 'intermediate' && '🚀 Intermediate'}
                    {lvl === 'advanced' && '⚡ Advanced'}
                  </div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    {lvl === 'beginner' && 'New to robotics and programming'}
                    {lvl === 'intermediate' && 'Some programming experience, learning robotics'}
                    {lvl === 'advanced' && 'Experienced in robotics, AI, or related fields'}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: '24px',
                padding: '12px 24px',
                background: '#e5e7eb',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: '600',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalizeButton;