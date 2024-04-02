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

### For Javascript

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
### For Typescript

```tsx
import React from 'react';
import Image from 'next/image';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'da-web-chat': {
        children?: React.ReactNode;
        primaryColor?: string;
        textColor?: string;
        apiKey?: string;
      };
    }
  }
}

interface DaWebChatProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryColor: string;
  textColor: string;
  apiKey: string;
  logo: string;
}

const WebChatComponent: React.FC<DaWebChatProps> = ({
  primaryColor,
  textColor,
  apiKey,
  logo,
}) => {
  return (
    <div>
      <da-web-chat
        primaryColor={primaryColor}
        textColor={textColor}
        apiKey={apiKey}
      >
        <Image width={50} height={50} slot="logo" src="/next.svg" alt="logo" />
      </da-web-chat>

      <script type="module" crossOrigin="anonymous" src="https://cdn.jsdelivr.net/npm/da-web-chat@2.1.5/dist/assets/index.js" defer></script>
    </div>
  );
};

export default WebChatComponent;
```

> Replace apiKey, primaryColor, textColor, and logo with your actual values. The greetings and message can be configured on BongaCX dashboard.
