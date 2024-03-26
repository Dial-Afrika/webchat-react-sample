# DaWebChat Integration in React

This project demonstrates how to integrate the DaWebChat widget into a React application.

## Installation
1. Clone this repository: git clone https://github.com/Dial-Afrika/webchat-react-sample
2. Install dependencies: `npm install`
3. Start the app: `npm start`

## DaWebChat Component
```jsx
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
```

The `DaWebChat` component is responsible for loading the DaWebChat widget script and rendering the `da-web-chat` custom element.

Here's how you can use the `DaWebChat` component:

```jsx
import DaWebChat from './DaWebChat';

function App() {
  return (
    <div className="App">
      {/* Other components... */}
      <DaWebChat
        greetings="Hello"
        message="Welcome to our website"
        apiKey="your-api-key"
        primaryColor="#000000"
        textColor="#ffffff"
        logo="logo-url"
      />
    </div>
  );
}

export default App;
```

> Replace apiKey, primaryColor, textColor, and logo with your actual values. The greetings and message can be configured on BongaCX dashboard.
