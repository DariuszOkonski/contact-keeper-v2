// https://github.com/bradtraversy/contact-keeper
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='container'>My App</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
