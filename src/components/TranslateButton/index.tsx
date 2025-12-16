import React, { useState } from 'react';

const TranslateButton = () => {
  const [isUrdu, setIsUrdu] = useState(false);
  const [translating, setTranslating] = useState(false);

  const translatePage = async () => {
    setTranslating(true);
    
    if (!isUrdu) {
      // Translate to Urdu
      const content = document.querySelector('article');
      if (content) {
        const elements = content.querySelectorAll('h1, h2, h3, p, li');
        
        for (const element of Array.from(elements)) {
          const originalText = element.textContent;
          if (originalText && originalText.trim()) {
            try {
              // Using Google Translate API (free tier via MyMemory)
              const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(originalText)}&langpair=en|ur`
              );
              const data = await response.json();
              
              if (data.responseData.translatedText) {
                element.setAttribute('data-original', originalText);
                element.textContent = data.responseData.translatedText;
              }
            } catch (error) {
              console.error('Translation error:', error);
            }
          }
        }
      }
      setIsUrdu(true);
    } else {
      // Restore English
      const content = document.querySelector('article');
      if (content) {
        const elements = content.querySelectorAll('[data-original]');
        elements.forEach(element => {
          const original = element.getAttribute('data-original');
          if (original) {
            element.textContent = original;
            element.removeAttribute('data-original');
          }
        });
      }
      setIsUrdu(false);
    }
    
    setTranslating(false);
  };

  return (
    <div style={{
      padding: '16px',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      textAlign: 'center'
    }}>
      <button
        onClick={translatePage}
        disabled={translating}
        style={{
          background: 'white',
          color: '#667eea',
          border: 'none',
          padding: '12px 32px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: translating ? 'wait' : 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {translating ? 'Translating...' : (isUrdu ? '🇬🇧 Show English' : '🇵🇰 اردو میں پڑھیں')}
      </button>
      {!isUrdu && (
        <p style={{ color: 'white', margin: '8px 0 0 0', fontSize: '14px' }}>
          Click to translate this chapter to Urdu
        </p>
      )}
    </div>
  );
};

export default TranslateButton;