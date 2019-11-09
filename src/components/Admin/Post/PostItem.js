import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import axios from 'axios';
class ListCategory extends Component {
	 constructor(props){
        super(props)
        this.state = {
           post : []
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/post',
        data : null
      }).then(res =>{
        this.setState({
          post :res.data
        });
      }).catch( err =>{
      });
    }

    findIndex = (post, id) =>{
      var result = -1;
      post.forEach((post, index) => {
        if (post.id === id) {
          result = index;
        }
      });
      return result;
    }
    onDelete = (id) =>{
      var {post} = this.state;
      if (confirm('Bạn có chắc muốn xóa?')) { //eslint-disable-line
        axios({
        method: 'DELETE',
        url :`http://localhost:3000/post/${id}`,
        data : null
      }).then(res =>{
        if (res.category_name === 200) {
          var index = this.findIndex(post, id);
          if (index !== -1) {
            post.splice(index, 1);
            this.setState({
              post : post
            });
          }
        }
        window.location.reload();
      });
      } 
    }
    
    render() {
    var {post , index} = this.props;
        return (
                
                <tr className="mb-1">
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{post.name}</td>
                  <td className="text-center">{post.category_id}</td>
                  <td className="text-center">{post.summary}</td>
                  <td className="text-center"><img className="img" src={post.image}  width="150px" height="150"/></td>
                  <td className="text-center">
                    <NavLink  
                      to={`/post/${post.id}/edit`} 
                      className="btn btn-success">
                      Sửa
                    </NavLink>
                    &nbsp;
                    <button onClick ={ () => this.onDelete(post.id)} type="button" className="btn btn-danger">
                      Xóa
                    </button>
                  </td>
                </tr>
                
        
   		);
	}
}




export default ListCategory;