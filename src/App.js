import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Blog from './component/Blog';
import Details from './component/Details';

 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        {/* this is used to open path of significant nav options like home shop etc; */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/details/:cropname' element={<Details/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
