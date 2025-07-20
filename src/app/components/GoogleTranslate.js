'use client';

import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    // Define callback before script loads
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'mi', // Māori
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Inject script only if it doesn't already exist
    if (!document.querySelector('#google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleTranslateClick = () => {
    const confirmTranslation = window.confirm(
      'Would you like to translate this website into Māori?'
    );
    if (!confirmTranslation) return;

    const tryTranslate = () => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = 'mi';
        select.dispatchEvent(new Event('change'));
      } else {
        setTimeout(tryTranslate, 500);
      }
    };

    tryTranslate();
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }} />

      <div
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 1000,
        }}
      >
        <button
          onClick={handleTranslateClick}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
        >
          🌐 Translate
        </button>
      </div>

      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon {
          display: none !important;
        }

        body {
          top: 0px !important;
        }

        .goog-te-gadget {
          font-size: 0 !important;
        }

        .goog-te-combo {
          width: 100%;
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
