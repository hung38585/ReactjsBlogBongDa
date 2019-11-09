import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class AllCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
      category : []
    }
  }    
  componentDidMount(){
    axios({
      method: 'GET',
      url :'http://localhost:3000/category',
      data : null
    }).then(res =>{
      this.setState({
        category :res.data
      });
    }).catch( err =>{
    });
  }

  render() {
    var { category,keyword } = this.state;
    return (
      <React.Fragment>       
      <br/>
      <h4 className=" badge-light" style={{borderRadius: '8px'}}>DANH MỤC TIN TỨC</h4 > 
      {category.map((category,index) => {
        return < Categorylist key={index} cate = {category} />
      })}
      </React.Fragment>
      );
    }  
  }
  class Categorylist extends Component {

    render() {
      var {cate} = this.props;
      return (
      <div className="" >
      <a className="nav-link text-dark font-weight-bold" href={`/postcategory/${cate.id}`} >{cate.category_name}</a>
      <hr/>
      </div>  

      );
    }
  }
  export default AllCategory;