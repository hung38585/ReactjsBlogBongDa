import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import routes from './routes.js';

// import AllProduct from './components/AllProduct.js';
class App extends Component {
  render(){
  return (
    <Router>
      <div className="col-md-12">
       <Switch>  
        {this.showContentMenu(routes)} 
       </Switch>
      </div>
    </Router>
    );
  }
  showContentMenu = (routes) =>{
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) =>{
        return (
            <Route key ={index} path = {route.path} exact = {route.exact} component={route.main} />
          );
      });
    }
    return result;
  }
}
export default App;