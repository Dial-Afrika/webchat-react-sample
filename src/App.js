import DaWebChat from './DaWebChat';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The main application component.
 */
function App() {
  return (
    <div className="App">
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
``