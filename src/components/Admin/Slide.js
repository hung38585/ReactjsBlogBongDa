import React, { Component } from 'react';

export class Silde extends Component {
	render() {
		return (
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
      <div className="carousel-item active">
      <img src="https://cdn2.img.vn.sputniknews.com/images/575/16/5751635.jpg" className="d-block w-100" alt=".1.." height = "500" />
      </div>
      <div className="carousel-item">
      <img src="https://www.realmadrid.com/img/horizontal_940px/h_he23421.jpg" className="d-block w-100" alt="..." height = "500"/>
      </div>
      <div className="carousel-item">
      <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/09/06/premier-league-chuyen-nhuong.jpg" className="d-block w-100" alt="..." height = "500" />
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
      </a>
      </div>
		)
	}
}
export default Silde