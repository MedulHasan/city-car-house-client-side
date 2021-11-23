import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AlertMessage from './context/AlertMessage';
import AuthProvider from './context/AuthProvider';
import CarDetails from './pages/CarDetails/CarDetails/CarDetails';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import ExploreCar from './pages/ExploreCar/ExploreCar';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import Navigation from './Shared/Navigation/Navigation';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <AlertMessage> */}
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route exact path='/'>
              {/* <Redirect to={{
                  pathname: '/home'
                }} /> */}
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/exploreCar">
              <Navigation />
              <ExploreCar />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/carDetails">
              <CarDetails />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
        {/* </AlertMessage> */}
      </AuthProvider>
    </div>
  );
}

export default App;
