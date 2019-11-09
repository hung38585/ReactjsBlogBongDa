import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Logout extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn : '',
      name : localStorage.getItem('username')
    };

  }
  SubmitForm = (e) =>{
    e.preventDefault()
      this.setState({loggedIn : false})
      localStorage.clear();
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
    if (this.state.loggedIn === false) {
      return <Redirect to="/login"/>;
    }
    return (
      <div className="form-inline my-2 my-lg-0">
        <form onSubmit={this.SubmitForm}>
          <input type="submit" value="Logout" className="btn btn-outline-dark"/>
        </form>
      </div>
    );
  }
}

export default Logout;