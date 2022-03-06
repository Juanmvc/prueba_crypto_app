import logo from './logo.svg';
import './App.css';
import { Dashboard } from "./views/Dashboard/Dashboard" 
import { NavigationBar } from "./NavigationBar/NavigationBar"

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <NavigationBar/>
    </div>
  );
}

export default App;
