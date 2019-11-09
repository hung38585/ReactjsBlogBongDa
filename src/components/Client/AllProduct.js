import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class AllProduct extends Component {
   constructor(props){
        super(props)
        this.state = {
           posts : [],
           categories:[],
           namecate: '1',
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
      onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }

    render() {
    
    var {posts, keyword, categories, namecate } = this.state;

    let search = this.state.posts.filter(
      (post) =>{
        return post.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
    
    return (
       <React.Fragment>  

           <div className="label col-12" style={{marginLeft:'25px'}}>
           <br/>
             <h4 className=" badge-light  "  style={{borderRadius: '8px'}}>DANH SÁCH BÀI VIẾT</h4 >
            
              <input className="form-control col-10 search " name="keyword" value={keyword} onChange ={ this.onChange} type="search" placeholder="Search" aria-label="Search" />
            
          </div>   

          <div className="container">   
                
              {search.map((post,index) => {
                      return < Postlist key={index} postlist={post} dm={index}/>
                  })}
         </div>
        </React.Fragment>
       );
  }
}

class Postlist extends Component {
 
    render() {
      var {postlist} = this.props;
        return (

          <div className="card " style={{width: '17rem', height:'26rem'}}>
            <div height="200">
              <img src={postlist.image}  alt="..." width="270" height="200"/>
            </div>
            <div className="card-body" style={{}} >
               <h5 className="card-title">{postlist.name}</h5>
               <p className="card-title">{postlist.summary}</p>
               <a className="nav-link mr-3 text-dark font-weight-bold chitiet" href={`/post/${postlist.id}/postdetail`}><p>Xem chi tiết </p></a>
           </div>
          </div> 
        );
    }
}
export default AllProduct;