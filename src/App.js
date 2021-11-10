import './App.css';
import { BrowserRouter as Router,Switch,  Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import None from './Pages/None/None';
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Pages/Hooks/Auth/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App" style={{overflow:'hidden'}}>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>

          <Route exact path="/home">
           <Home></Home>
          </Route>

          
          <Route exact path="/explore">
         <Explore></Explore>
          </Route>
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/register">
          <Register></Register>
          </Route>
          <PrivateRoute exact path="/purchase/:id">
          <Purchase></Purchase>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard">
         <Dashboard></Dashboard>
          </PrivateRoute>

          <Route exact path="*">
         <None></None>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
