import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Info from './pages/Info'
import Home from './pages/Home';
import { Auth } from './pages/Auth';
import { Route, Routes } from 'react-router-dom';
import CreateCard from './pages/Create-card';
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword';
import SavedCards from './pages/SavedCards'


function App() {
  

  return (
    <div className="App">
    <div className="layout">
      <Navbar/>
      <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/info' element= {<Info/>} />
          <Route path='/forgot-password' element= {<ForgotPassword/>} />
          <Route path='/reset-password' element= {<ResetPassword/>} />
          <Route path='/saved-cards' element= {<SavedCards/>} />
          <Route path='/auth' element= {<Auth/>} />
          <Route path='/create-card' element= {<CreateCard/>} />
      </Routes>
      <Sidebar/>
    </div>
</div>
    
  );
}

export default App;
