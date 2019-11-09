import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link ,Redirect} from 'react-router-dom';
import Header from '../Header.js';
class Add extends Component {
	constructor(props){
    super(props);
    this.state = {
      id: '',
      category_name : ''
    };
  }
  componentDidMount(){
      var {match} = this.props;
      if (match) {
        var id = match.params.id;
        axios({
        method: 'GET',
        url :`http://localhost:3000/category/${id}`,
        data : null
      }).then(res =>{
        var data = res.data
        this.setState({
          id : data.id,
          category_name : data.category_name
        });
      });
      }
    }

  onChange = (event) =>{
    var target =event.target;
    var name =target.name;
    var value =target.value;
    this.setState({
      [name] : value,
    });
  }

  onSave =(e) =>{
    var{id, category_name} = this.state
    e.preventDefault();
      var {history} = this.props;
      if (id) { //update
        axios({
        method: 'PUT',
        url :`http://localhost:3000/category/${id}`,
        data : {
          category_name : category_name,
        }
      }).then(res =>{
        history.push("/categorylist");
      });
      }else{
        axios({
        method: 'POST',
        url :'http://localhost:3000/category',
        data : {
          category_name : category_name,
        }
      }).then(res =>{
        history.push("/categorylist");
      });
      }
  } 

    
  render() {
    if (!localStorage.username) {
      return <Redirect to="/login"/>;
    }
    return (
      <div className="panel">
        
      <Header></Header>
      <div className="panel-heading">
      <h3 className="panel-title mt-3 text-center">Nhập Danh Mục Bài viết</h3>
      </div>
      <div className="panel-body">
      <form onSubmit = {this.onSave}>
      <div className="container col-md-6">
        <div className="form-group">
          <label>Tên Danh Mục :</label>
          <input type="text" name="category_name" value ={this.state.category_name} onChange ={this.onChange} className="form-control" />
          </div>
          <div className="text-center">
          <button type="submit"  className="btn btn-success">Save</button>&nbsp;
          <Link to="/categorylist" className="btn btn-warning ml-1">Back </Link>
        </div>
      </div>
      </form>
      </div>
      </div>
      );
    }
  }

export default Add;