import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        hiiiss hello {process.env.REACT_APP_NAME}
      </header>
    </div>
  );
}

export default App;
