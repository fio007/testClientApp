import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import Header from "./Header.js";
import Body from "./Body.js";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App  extends React.Component{
	state={};

	render() {
		return (
			<div className="mainStyle">
				<div id="header">
					<Header />
				</div>
			    <div id="content">
					<Body />
				</div>
			</div>
		);
	}
}

export default App;