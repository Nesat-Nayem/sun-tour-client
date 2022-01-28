import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { AuthProvider } from './AuthProvider/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AdAdmin from './Pages/Dashboard/AdAdmin/AdAdmin';
import AllProduct from './Pages/Dashboard/AllProduct/AllProduct';
import PrivateRoute from '../src/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import DefaultDashboard from './Pages/Dashboard/DefaultDashboard';
import AllOrders from './Pages/Dashboard/AllOrders/AllOrders';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import AdminRoute from './Pages/Dashboard/AdminRoute/AdminRoute';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>

          {/* <Route path='/dashboard' element={<Dashboard />}> */}

            <Route exact path='/dashboard' element={<DefaultDashboard />}></Route >

            <Route path='MyOrder' element={<MyOrder />} />

           
            <Route path='addreview' element={<AddReview />} />

            {/* <Route path='adAdmin' element={<AdAdmin />} /> */}

            <Route path='addservice' element={<AdminRoute><AddProduct /></AdminRoute>} />

            {/* <Route path='addservice' element={<AddProduct />} /> */}

            <Route path='AllOrder' element={<AdminRoute><AllOrders /></AdminRoute>} />

            <Route path='adAdmin' element={<AdminRoute><AdAdmin /></AdminRoute>} />

            


            <Route path='allservice' element={<AdminRoute><AllProduct /></AdminRoute>} />

          </Route>

          <Route path='services/:serviceId' element={<ServiceDetails />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
