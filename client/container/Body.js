import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import Home from "../Authorization/Home.js";
import Preveiw from "./Preveiw.js";
import Registrate from "../Authorization/Registrate.js";
import CreateQuestion from "./CreateQuestions/CreateQuestion.js";

class Body  extends React.Component{

	render() {
		return (
			<div>
				<div style={{ backgroundColor: "rgb(255, 255, 255)", width: "100%", padding: "40px"}}>
					<Route exact path='/' component={Preveiw}/>
					<Route exact path='/registrate' component={Registrate}/>
					<Route exact path='/login' component={Home}/>
					<Route exact path='/newquestion' component={CreateQuestion}/>
				</div>
			</div>
		);
	}
}

export default Body;