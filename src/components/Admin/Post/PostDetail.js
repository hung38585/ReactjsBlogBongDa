import React, {Component} from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import Headerclient from '../Headerclient.js';
class PostDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
           post : [],
           comments : [],
           id :'',
           user: '',
           content:'',
           id_post:''
        }
    }  
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/comment',
        data : null
      }).then(res =>{
        this.setState({
          comments :res.data
        });
      }).catch( err =>{
      });
      var {match} = this.props;
      if (match) {
      	var id = match.params.id;
      	axios({
        method: 'GET',
        url :`http://localhost:3000/post/${id}`,
        data : null
     	 }).then(res =>{
     	 	var data =res.data;
        	this.setState({
         	 post :res.data
        	});
      		}).catch( err =>{
        	console.log(err);
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
      var{id, user,content,id_post,post} = this.state
      e.preventDefault();
        var {history} = this.props;
          axios({
          method: 'POST',
          url :'http://localhost:3000/comment',
          data : {
            user : user,
            content : content,
            id_post : post.id
          }
        }).then(res =>{
          window.location.reload();
        });

        

    } 
    
 render() {

 	var {post,comments} = this.state;
  	return (
      <div>
        <Headerclient/>
        
        <div className="container col-8">
            <div className=" mb-3 detail">
                <h3 className="card-title text-center">{post.name}</h3>
            <div className="col-md-8 m-auto">
            <img src={post.image} className="card-img" alt="..."/>
            </div>
        <div className="card-body">
          <div className="col-md-12" >
            <div className="row">
             <b> <p className="col-md-12" >{post.summary}</p></b>
                   </div>
          </div>
          <p className="card-text price">{post.content}</p>
         
        </div>
      	</div>
        <hr></hr>

        <h5>Comments:</h5>
        {comments.map((comment) => {
           if (post.id === comment.id_post) {
            return <p style={{color:'#444', margin:0}} className="ml-3"><span className="font-weight-bold">{comment.user} </span>: {comment.content} </p>
          }  
        })} 

        <form onSubmit = {this.onSave}>
        <div className="form-group col-md-4 mt-2">
          <input type="text" name="user" value ={this.state.user} onChange ={this.onChange} className="form-control mb-1" placeholder="Enter user" />
          <textarea type="text" name="content" value ={this.state.content} onChange ={this.onChange} className="form-control" placeholder="Enter comment" />          
          </div>
          <button type="submit"  className="btn btn-success ml-3">Comment</button>&nbsp;
        </form>
   		 </div>
        
       </div>
   		);
	}
}

export default PostDetail;