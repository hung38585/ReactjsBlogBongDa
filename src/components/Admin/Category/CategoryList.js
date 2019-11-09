import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink ,Redirect} from 'react-router-dom';
import axios from 'axios';
import CategoryItem from './CategoryItem.js';
import Header from '../Header.js';
class CategoryList extends Component {
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
          category : res.data
        });
      }).catch( err =>{
      });
    }

    render() {
      if (!localStorage.username) {
        return <Redirect to="/login"/>;
      }
    var { category } = this.state;
    var elmCategory = category.map((category, index)=> {
      return < CategoryItem key = {category.id} index ={index} category ={category}/>
    });
    
    return (
      <React.Fragment>
          <Header></Header>
          <div className="btn-group Add">
        <NavLink className="navbar-brand" to="/category/add"><button type="button" className="btn btn-success btn-menu">Thêm Danh Mục</button></NavLink>
        </div>
        <div className="container">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên Danh Mục</th>
              <th className="text-center">Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            { elmCategory }
          </tbody>
        </table>
        </div>        
        </React.Fragment>
       
       );
  }
}

export default CategoryList;