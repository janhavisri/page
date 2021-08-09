import Login from "./login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header";
import Product from "./components/product";
import Signup from "./components/signup";
import Contact from "./components/contact";
import Home from "./home";
import Page from "./page";
function App() {
    return (
      <div>
  
        <Router>
          <Header></Header>
          <Route component={Login} path={'/login'} ></Route>
          <Route component={Product} path={'/product'} ></Route>
          <Route component={Signup} path={'/signup'} ></Route>
          <Route component = {Contact} path={'/contact'}></Route>
          <Route component ={Home} path={'/home'}></Route>
          <Route component ={Page} path={'/page'}></Route>
        </Router>
  
      </div>
    );
  }
  
  export default App;