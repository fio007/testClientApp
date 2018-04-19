import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import Slider from "react-slick";

import {whyUs} from "./src/whyUs.js"
import {news} from "./src/news.js"

import './Preveiw.css';
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css";
import logo from "./src/logo.png";

class Preveiw  extends React.Component {
	render() {
		const settingsWhyUs = {
			accessibility: false,
			autoplay: true,
			dots: true,
			infinite: true,
			speed: 2000,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1
	    };

	    const settingsNews = {
			accessibility: false,
			dots: true,
			infinite: true,
			speed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1
	    };

		return (
			<div id="preveiw" className="row">
				<div className="col-sm-5">
					<img className="logo2" src={logo} />
				</div>
				<div className="col-sm-7" style={{heigth: "100%"}}>
					<h2 className="preveiw">Почему Free Quiz?</h2>
					<Slider {...settingsWhyUs}>
						{
							whyUs.map((elem)=>{
								return(
									<div>
										<h3 className="titleSlick">{elem.title}</h3>
										<p>{elem.description}</p>
									</div>
								)
							})
						}
					</Slider>
					<div className="row buttonGroups">
						<div className="col-sm-6">
							<div style={{width: "200px", margin: "0 auto"}}>
								<Button className="buttonPreveiw" bsStyle="success">Приступить к созданию тестов</Button>
							</div>
						</div>
						<div className="col-sm-6">
							<div style={{width: "200px", margin: "0 auto"}}>
								<Button className="buttonPreveiw" bsStyle="success">Приступить к созданию вопросов</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-12" style={{heigth: "400px;"}}>
					<h2 className="preveiw">Последние обновления:</h2>
					<Slider {...settingsNews}>
						{
							news.map((elem)=>{
								return(
									<div>
										<h3>{elem.title}</h3>
										<p>{elem.text}</p>
									</div>
								)
							})
						}
					</Slider>
				</div>
			</div>
		);
	}
}

export default Preveiw;