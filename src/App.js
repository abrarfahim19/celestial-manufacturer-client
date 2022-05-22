import './App.css';
import Header from './Components/Pages/Shareable/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/Shareable/NotFound';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Blog from './Components/Pages/Blog/Blog';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';
import Purchase from './Components/Pages/Purchase/Purchase';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import AddReview from './Components/Pages/Dashboard/AddReview';
import ManageOrder from './Components/Pages/Dashboard/ManageOrder';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import ManageProduct from './Components/Pages/Dashboard/ManageProduct';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyProfile></MyProfile>}>My Profile</Route>
            <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}>My Orders</Route>
            <Route path='/dashboard/addreview' element={<AddReview></AddReview>}>Add A Review</Route>
            <Route path='/dashboard/manageorder' element={<ManageOrder></ManageOrder>}>Manage All Orders</Route>
            <Route path='/dashboard/addproduct' element={<AddProduct></AddProduct>}>Add A Product</Route>
            <Route path='/dashboard/manageproduct' element={<ManageProduct></ManageProduct>}>Manage Products</Route>
            <Route path='/dashboard/makeadmin' element={<MakeAdmin></MakeAdmin>}>Make Admin</Route>
        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
