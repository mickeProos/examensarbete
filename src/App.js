import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TextBox from './components/TextBox';
import Info from './pages/Info'
import Props from './pages/Props'
import Hooks from './pages/Hooks'
import ConditionalRendering from './pages/ConditionalRendering'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
          <div className="layout">
            <Navbar/>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/info' element= {<Info/>} />
                <Route path='/props' element= {<Props/>} />
                <Route path='/hooks' element= {<Hooks/>} />
                <Route path='/ConditionalRendering' element= {<ConditionalRendering/>} />
            </Routes>
            <Sidebar/>
          </div>
    </div>
    
  );
}

export default App;
