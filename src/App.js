import logo from './logo.svg';
import './App.css';
import Header from './Components/Pages/Shareable/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/Shareable/NotFound';
import Dashboard from './Components/Pages/Dashboard.js/Dashboard';
import Blog from './Components/Pages/Blog/Blog';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
