import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './Dashboard/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './Display/ErrorScreen';
import ProductsDetails from './Display/ProductsDetails';
import HomeScreen from './Display/HomeScreen';
import SignIn from './Display/SignIn';
import Register from './Display/Register';



const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
            <Navbar />
            <Switch>
              <Route exact path="/"><HomeScreen /></Route>
              <PublicRoute exact path="/signin"><SignIn /></PublicRoute>
              <PublicRoute exact path="/signup"><Register /></PublicRoute>
              <PrivateRoute exact path="/products/:name"><ProductsDetails /></PrivateRoute>
              <PrivateRoute exact path="/dashboard">
                <Admin />
              </PrivateRoute>
              <Route exact path="*"><ErrorScreen /></Route>
            </Switch>
          </DeliveryProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App
