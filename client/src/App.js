import './App.css';
import { Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      My App
    </div>
  );
};

export default App;
