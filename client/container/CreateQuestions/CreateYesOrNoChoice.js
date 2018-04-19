import React from 'react';
import { Button } from 'react-bootstrap';
import {FaCircleO, FaChevronCircleDown} from 'react-icons/lib/fa';

class CreateYesOrNoChoice extends React.Component{
	changeQuestion = (e) => {
		this.props.onChangeQuestion(e.target.value);
	};

	render() {
		const {
			onChangeAnswers,
  			onChangeResponses,
  			onChangeQuestion,
  			answers
		} = this.props;

		return (
			<div id="singleChoice">
				<div>
					<p className="inline-block">Вопрос: </p>
					<input 
						className="Select-control inline-block" 
						onChange={this.changeQuestion} 
						placeholder="Введите ваш вопрос..."
					/>
				</div>
				<div className="answers">
					<p className="choice">Выберете верный ответ на вопрос:</p>
					<div className="choice" onClick={()=>onChangeAnswers("Yes")}>
						{answers === "Yes" ? <FaChevronCircleDown size="20px" color="green" /> : <FaCircleO size="20px" color="#cccccc"/>} Да
					</div>
					<div className="choice" onClick={()=>onChangeAnswers("No")}>
						{answers === "No" ? <FaChevronCircleDown size="20px" color="green"/> : <FaCircleO size="20px" color="#cccccc"/>} Нет
					</div>
				</div>
			</div>
		);
	}
}

export default CreateYesOrNoChoice;