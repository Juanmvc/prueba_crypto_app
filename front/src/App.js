import logo from './logo.svg';
import './App.css';
import { ButtonSolid } from 'design-system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonSolid
        height="50px"
        width="80px"
        onClick={() => console.log("Pulsado")}      
        >Pulsa aquí
        </ButtonSolid>
      
      </header>
    </div>
  );
}

export default App;
