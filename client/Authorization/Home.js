import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Home  extends React.Component{
	render() {
		return (
			<div>
				<div>
					<div>Авторизация</div>
					<label>Логин</label>
					<input/>
				</div>
				<div>
					<label>Пароль</label>
					<input type="password"/>
				</div>
				<div>
					<Link to="/main"><Button>Войти</Button></Link>
					<Link to="/registrate">Регистрация</Link>
				</div>
			</div>
		);
	}
}

export default Home;