import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password : '',
      loggedIn : false,
    };

  }
  SubmitForm = (e) =>{
    e.preventDefault()
    var {username,password} = this.state
    if (username === "admin" && password ==="123") {
      this.setState({loggedIn : true})
      localStorage.setItem('username', username);
      
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


  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    if (this.state.loggedIn) {
      return <Redirect to="/postlist"/>;
    }
    return (
      <div className=" col-md-4 m-auto">
        <h3 className="text-center mt-5">Login</h3>
        <form onSubmit={this.SubmitForm}>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange} className="form-control" placeholder="password"/>
          <br></br>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" placeholder="password"/>
          <br></br>
          <input type="submit" value="Login" className="btn btn-info  col-md-12"/>
        </form>
      </div>
    );
  }
}

export default Login;