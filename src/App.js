import './App.css';
import Home from './components/home/home';
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Propos from './components/propos/propos';
import Collection from './components/collection/collection';
import Blog from './components/blog/blog';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/Dashboard/homeAdmin/dashboard';
import UsersAd from './components/Dashboard/usersAd/usersAd';
import ProductAd from "./components/Dashboard/prodcut/produitAd"
import MyPublication from './components/myPublication/myPublication';
import ProductUser from './components/collection/productUser';
import CardOrder from './components/card/card';
function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
         <Route path="/" exact> <Home/></Route>
         <Route path="/propos" exact> <Propos/> </Route>
         <Route path="/collection" exact><Collection/></Route>
         <Route path="/blog" exact><Blog/></Route>
         <Route path="/register" exact><Register/></Route>
         <Route path="/login" exact><Login/></Route>
         <Route path="/dashboard/home" exact><Dashboard/></Route>
         <Route path="/dashboard/users" exact> <UsersAd/></Route>
         <Route path="/dashboard/products" exact> <ProductAd/></Route>
        <Route path="/MyPublication" exact><MyPublication/></Route>
        <Route path="/produitId/:id"><ProductUser/></Route>
        {/* <Route><CardOrder exact path="/card/:id?:qty"/></Route> */}
        <Route exact path="/card/:id/:qty" render={(props) => <CardOrder {...props}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
