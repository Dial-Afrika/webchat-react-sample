import React, { useEffect } from 'react';

function DaWebChat({ greetings, message, apiKey, primaryColor, textColor, logo }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/da-web-chat@2.1.5/dist/assets/index.js';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <da-web-chat greetings={greetings} message={message} apikey={apiKey} primaryColor={primaryColor} textcolor={textColor}>
      <img style={{ minWidth: '50px', width: '50px', maxWidth: '100px' }} src={logo} alt="Logo" />
    </da-web-chat>
  );
}

export default DaWebChat;