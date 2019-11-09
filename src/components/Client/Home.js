import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import routes from '../../routes.js';
import Headerclient from '../Admin/Headerclient.js';
import Slide from '../Admin/Slide.js';
import AllCategory from './AllCategory.js';
import AllProduct from './AllProduct.js';

// import AllProduct from './components/AllProduct.js';
class App extends Component {
  render(){
  return (
    <Router>
      <div className="col-md-12"><Headerclient/></div>
      <div className="col-md-12"><Slide/></div>
      <div className="container-fluid">
        <div className="row col-md-12">
         <div className="col-md-3">
            <AllCategory/>
         </div> 
         <div className="col-md-9 row">
            <AllProduct/>
         </div>
        </div>    
       
      </div>

    </Router>
    );

  }
}

export default App;