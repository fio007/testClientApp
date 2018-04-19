import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Registrate  extends React.Component{
	render() {
		return (
			<div>
				<div>Регистрация на сайте</div>
				<div>
					<label>Имя</label>
					<input/>
				</div>
				<div>
					<label>Фамилия</label>
					<input type="password"/>
				</div>
				<div>
					<label>Пароль</label>
					<input type="password"/>
				</div>
				<div>
					<label>Подтверждение пароля</label>
					<input type="password"/>
				</div>
				<div>
					<Button>Зарегестрироваться</Button>
					<Link to="/">У меня уже есть аккаунт</Link>
				</div>
			</div>
		);
	}
}

export default Registrate;