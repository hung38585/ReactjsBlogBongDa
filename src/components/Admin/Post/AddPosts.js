import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header.js';
import {Redirect} from 'react-router-dom';
//import CKEditor from 'ckeditor4-react';

class AddPost extends Component {
	constructor(props){
    super(props);
    this.state = {
      category: [],
      id: '',
      category_id:'',
      name : '',
      image : '',
      summary : '',
      content : ''
    }
  }
  componentDidMount(){
      //Get category lấy name category
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

      //Get post id ti Edit
      var {match} = this.props;
        if (match) {
          var id = match.params.id;
          axios({
          method: 'GET',
          url :`http://localhost:3000/post/${id}`,
          data : null
        }).then(res =>{
          var data = res.data
          this.setState({
            id : data.id,
            category_id : data.category_id,
            name : data.name,
            image : data.image,
            summary : data.summary,
            content : data.content
          });
        });
        }
    }

    

  onChange = (event) =>{
    var target =event.target;
    var name =target.name;
    var type =target.type;
    var value = target.value;
    if (type === 'file') {
      value = this.image.value.replace( /C:\\fakepath\\/i, "/images/" );
    }
    this.setState({
      [name] : value,
    });
  }

  onSave =(e) =>{
    e.preventDefault();
    var { id ,name, category_id, image , summary, content} = this.state;
      var {history} = this.props;
      if (id) {
        axios({
        method: 'PUT',
        url :`http://localhost:3000/post/${id}`,
        data : {
          category_id : category_id,
          name : name,
          image : image,
          summary : summary,
          content : content
        }
      }).then(res =>{
        history.push("/postlist");
      });
      }else{
        axios({
        method: 'POST',
        url :'http://localhost:3000/post',
        data : {
          category_id : category_id,
          name : name,
          image : image,
          summary : summary,
          content : content
        }
      }).then(res =>{
        history.push("/postlist");
      });
      }
      
    } 
    render() {
      if (!localStorage.username) {
        return <Redirect to="/login"/>;
      }
    	var { name, category_id, image , summary, content} = this.state;
        return (
          <div className="panel">
            <Header></Header>
          <div className="panel-heading">
          <h3 className="panel-title mt-3 text-center">Nhập Thông Tin Bài Viết
          </h3>
          </div>
          <div className="container col-md-8">
          <form onSubmit = {this.onSave}>
          <div className="row">
            <div className="col">
              <div className="form-group">
              <label>Tiêu Đề :</label>
              <input type="text" name="name" value ={name} onChange ={this.onChange} className="form-control" />
              </div>

              <div className="form-group">
                    <label>Thể Loại Bài Viết </label>
                    <select className="form-control" name="category_id" value ={this.state.category_name} onChange ={this.onChange} required="required">
                    <option value="">Chọn Thể Loại</option>
                    
                    {this.state.category.map(function(cate, i){
                      return(
                          <option key={i} value={cate.id}>{cate.category_name}</option>
                        )
                    })}
                    </select>
              </div>
              <div className="form-group">
              <label>Tóm Tắt :</label>
              <textarea rows="2" type="text" name="summary" value ={summary} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
              <label>Nội Dung :</label>
              <textarea  rows="5" type="text" name="content" value ={content} onChange ={this.onChange} className="form-control" />
              </div>
              <div className="form-group">
              <label>Chọn Ảnh :</label>
              <input type="file" name="image" ref ={ (input) => { this.image = input} } onChange ={this.onChange} className="form-control" />
              </div>
              <br />
              <div className="text-center">
              <button type="submit"  className="btn btn-success">Save</button>&nbsp;
              <Link to="/postlist" className="btn btn-warning ml-1">Back </Link>
              </div>
            </div>
          </div>
          
          </form>
          </div>
          </div>
          );
      }
    }

    export default AddPost;
