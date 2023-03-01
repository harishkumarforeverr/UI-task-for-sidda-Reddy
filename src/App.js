import logo from './logo.svg';
import './App.scss';
import Dashboard from "./components/Dashboard/Dashboard"
import Header from './components/Header/Header'; 

function App() {
  return (
    <div className="App">
      <div className='app_content'>
        
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
