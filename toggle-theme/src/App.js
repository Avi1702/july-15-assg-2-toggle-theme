// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { ContextProvider } from './components/ToggleContext';

function App() {
  return (
    <ContextProvider>
    <div className="App">
     <Navbar></Navbar>
    </div>
    </ContextProvider>
  );
}

export default App;
