import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class Comments extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments : []
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
  }

  render() {
    var { comments ,id} = this.state;
    console.log(id);
    return (
      <div>
      <h4 className=" badge-light" style={{borderRadius: '8px'}}>Comments:</h4 > 
      {comments.map((comment,index) => {
        if (id ===comment.id) {
          return <p>{comment.user}: {comment.content}</p>
        }
        
      })}
      </div>
      );
    }  
  }

  export default Comments;