'use client';

import { useEffect, useState } from 'react';

export default function LanguageToggle() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (langCode) => {
    const interval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
        setLanguage(langCode);
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: 1000
    }}>
      <button
        onClick={() => handleLanguageChange(language === 'en' ? 'mi' : 'en')}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0e938c',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        🌐 {language === 'en' ? 'Māori' : 'English'}
      </button>
    </div>
  );
}
