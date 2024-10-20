import './App.css'
import AdminLayout from './components/admin-view/layout';
import AuthLayout from './components/auth/layout'
import AdminDashboard from './pages/admin-view/dashboard';
import AdminFeatures from './pages/admin-view/features';
import AdminOrders from './pages/admin-view/orders';
import AdminProducts from './pages/admin-view/products';
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register';
import { Routes, Route } from 'react-router-dom';
import ShoppingLayout from './components/shopping-view/layout';
import NotFound from './pages/not-found';
import ShoppingAccount from './pages/shopping-view/account';
import ShoppingCheckout from './pages/shopping-view/checkout';
import ShoppingHome from './pages/shopping-view/home';
import ShoppingList from './pages/shopping-view/listing';
import CheckAuth from './components/common/check-auth';
import UnauthPage from './pages/unauth-page';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkAuth } from "@/store/auth-slice";
import { useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"



function App() {


  const {isAuthenticated, user, isLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkAuth())
  }, [dispatch]
  );

  if(isLoading){
    return <Skeleton className="w-[800] bg-black h-[600px]" />

  }

  return (
    <div className=' bg-white m-0'>
      

      <Routes>
        <Route path = "/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout/></CheckAuth>}>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path='/admin' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout/></CheckAuth>}>
            <Route path='dashboard' element={<AdminDashboard/>}/>
            <Route path='products' element={<AdminProducts/>}/>
            <Route path='orders' element={<AdminOrders/>}/>
            <Route path='features' element={<AdminFeatures/>}/>
        </Route>
        <Route path='/shop' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout/></CheckAuth>}>
            <Route path='account' element={<ShoppingAccount/>}/>
            <Route path='checkout' element={<ShoppingCheckout/>}/>
            <Route path='home' element={<ShoppingHome/>}/>
            <Route path='listing' element={<ShoppingList/>}/>
        </Route>
        <Route path='/unauth-page' element={<UnauthPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
