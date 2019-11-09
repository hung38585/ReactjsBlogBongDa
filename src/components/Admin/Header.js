import React, { Component } from 'react';
import Logout from './Logout/Logout.js';
class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Trang chủ</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <a className="navbar-brand" href="/postlist">Bài viết </a>
              </li>
              <li className="nav-item">
              <a className="navbar-brand" href="/categorylist">Danh mục </a>
              </li>
              
            </ul>
            <Logout></Logout>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;