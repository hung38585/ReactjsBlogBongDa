import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

export class Headerclient extends Component {
	render() {
		return (
			<div className="container-fluid">
			<br></br>
			<div className="col-md-2 m-auto">
			<img src="https://vectorlogoseek.com/wp-content/uploads/2018/07/uefa-champions-league-vector-logo.png" width="200" height="100"></img>
			</div>
			<ul className="nav justify-content-center">
      <li className="nav-item">
      <a className="nav-link mr-3 text-dark font-weight-bold" href="/"><h4>Trang chủ</h4></a>
      </li>
      <li className="nav-item">
      <a className="nav-link mr-3 text-dark font-weight-bold" href="/postcategory"><h4>Tin tức mới</h4></a>
      </li>
      <li className="nav-item">
      <a className="nav-link mr-3 text-dark font-weight-bold" href="#"><h4>Liên hệ</h4></a>
      </li>
      <li className="nav-item">
      <a className="nav-link text-dark font-weight-bold" href="#"><h4>Tin tức</h4></a>
      </li>
      </ul>
      

      </div>
      );
	}
}
export default Headerclient
