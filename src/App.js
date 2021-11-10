import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AlertMessage from './context/AlertMessage';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AlertMessage>
          <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <Redirect to={{
                  pathname: '/home'
                }} />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </BrowserRouter>
        </AlertMessage>
      </AuthProvider>
    </div>
  );
}

export default App;
