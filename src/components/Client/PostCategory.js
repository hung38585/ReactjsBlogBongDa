import React, {Component} from 'react';
import {  NavLink } from 'react-router-dom';
import Headerclient from '../Admin/Headerclient.js';
import Slide from '../Admin/Slide.js';
import AllCategory from './AllCategory.js';
import axios from 'axios';
class PostCategory extends Component {
   constructor(props){
        super(props)
        this.state = {
           posts : [],
           categories: [],
           namecate: '',
           keyword : ''
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/post',
        data : null
      }).then(res =>{
        this.setState({
          posts :res.data
        });
      }).catch( err =>{
      });
      var {match} = this.props;
        if (match) {
          var id = match.params.id;
          this.setState({
          idd :id
        });
        }

      axios({
        method: 'GET',
        url :'http://localhost:3000/category',
        data : null
      }).then(res =>{
        this.setState({
          categories :res.data
        });
      }).catch( err =>{
      });
      
    }
    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }


    render() {
    var { posts,keyword,idd,categories } = this.state;
    let search = this.state.posts.filter(
      (post) =>{
        return post.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );

    return (
      <div>
      <div className="col-md-12"><Headerclient/></div>
      <div className="col-md-12"><Slide/></div>
        <div className="container-fluid">
        <div className="row col-md-12">
         <div className="col-md-3">
            <AllCategory/>
         </div> 
         <div className="col-md-9 row">
           <div className="col-md-12 font-weight-bold mt-3" style = {{fontSize:'20px', color:'#444'}}>
           {categories.map((cate,index) => {
              if (idd === cate.id) {
                return cate.category_name
              }
           })}
           
           <div className="col-10">

               <input className="form-control search mt-3" name="keyword" value={keyword} onChange ={ this.onChange} type="search" placeholder="Search" aria-label="Search" />
           </div>
             
           </div>

         <React.Fragment>  

          <div className="container">
            
              {search.map((post,index) => {
                if ( idd === post.category_id) {
                  return < Postlist key={index} postlist={post} />         
                }    
                })}
         </div>
        </React.Fragment>
         </div>
        </div>    
       
      </div>
      
       
        </div>
       );
  }
}

class Postlist extends Component {
 
    render() {
      var {postlist} = this.props;
        return (
          <div className="card " style={{width: '17rem', height:'25rem'}}>
            <div height="200">
              <img src={postlist.image}  alt="..." width="270" height="200"/>
            </div>
            <div className="card-body" style={{}} >
                <h5 className="card-title">{postlist.name}</h5>
            </div>
            <div className="card-body">
            <a class="nav-link mr-3 text-dark font-weight-bold" href={`/post/${postlist.id}/postdetail`}><h4>Xem chi tiết</h4></a>
            </div>
          </div> 
        );
    }
}
export default PostCategory;