import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
	FaUser, 
	FaStickyNoteO, 
	FaQuestionCircleO,
	FaFileTextO,
	FaPlusSquareO,
	FaCheckSquareO,
	FaAreaChart	
} from 'react-icons/lib/fa';
import { IoAndroidExit } from 'react-icons/lib/io';

class Menu  extends React.Component{
	render() {
		return (
			<div id="menu">
				<Link className="menuItem" onClick={this.props.onClick} to="/myquestion">
					<FaUser size="22"/><div className="item inline-block">Мой профиль</div>
				</Link>
				<Link className="menuItem" onClick={this.props.onClick} to="/mytests">
					<FaStickyNoteO size="22"/><div className="item inline-block">Мои тесты и опросы</div>
				</Link>
				<Link className="menuItem" onClick={this.props.onClick} to="/myquestion">
					<FaQuestionCircleO size="22"/><div className="item inline-block">Мои вопросы</div>
				</Link>
				<Link className="menuItem" onClick={this.props.onClick} to="/newtest">
					<FaFileTextO size="22"/><div className="item inline-block">Создать тест</div>
				</Link>
				<Link className="menuItem" onClick={this.props.onClick} to="/newquestion">
					<FaPlusSquareO size="22"/><div className="item inline-block">Создать вопрос</div>
				</Link>
				<Link className="menuItem" onClick={this.props.onClick} to="/complitedtests">
					<FaCheckSquareO size="22"/><div className="item inline-block">Пройденные тесты</div>
				</Link>
				<Link className="menuItem" onClick={this.props.onClick} to="/statistic">
					<FaAreaChart size="22"/><div className="item inline-block">Моя статистика</div>
				</Link>
				<div className="menuItem" onClick={this.props.onClick}>
					<IoAndroidExit size="22"/><div className="item inline-block">Выйти</div>
				</div>
			</div>
		);
	}
}

export default Menu;