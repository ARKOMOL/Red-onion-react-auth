import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Header/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
