import React from 'react';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import {FaCircleO, FaChevronCircleDown, FaClose} from 'react-icons/lib/fa';

import './create.css';

class SingleChoice extends React.Component{
	render() {
		return (
			<div>
				<div className="inline-block" >
					<FaCircleO size="20px" color="#cccccc"/> 
				</div>
				<div className="inline-block variable" >
					<input 
						className="variable"
						placeholder={`Вариант ${this.props.id + 1}`}
						value={this.props.text}
						onChange={(e) => this.props.onChangeVariable(e.target.value, this.props.id)}
					/>
				</div>
				<div 
					className="inline-block close" 
					onClick={() => this.props.deletVariable(this.props.id)}
				>
					<FaClose size="20px" color="#cccccc"/> 
				</div>
			</div>
		);
	}
}

class CreateSingleChoice extends React.Component{
	changeQuestion = (e) => {
		this.props.onChangeQuestion(e.target.value);
	};

	addVariable = () => {
		let answers = this.props.answers;
		answers.push({temp: ""});
		this.props.onChangeAnswers(answers);
	};

	deletVariable = (position) => {
		let answers = this.props.answers;
		answers.splice(position, 1);
		this.props.onChangeAnswers(answers);
	};

	onChangeVariable = (value, position) => {
		let answers = this.props.answers;
		answers.splice(position, 1, {text: value});
		this.props.onChangeAnswers(answers);
	};

	render() {
		const {
			answers,
			onChangeAnswers,
  			onChangeResponses,
  			onChangeQuestion 
		} = this.props;

		return (
			<div id="singleChoice">
				<div>
					<p className="inline-block">Вопрос: </p>
					<textarea 
						className="Select-control inline-block" 
						onChange={this.changeQuestion} 
						placeholder="Введите ваш вопрос..."
					/>
				</div>
				{	
					answers.map((elem, index) => {
						console.log(answers)
						return(
							<div className="answers">
								<SingleChoice 
									text={elem.text} 
									id={index} 
									deletVariable={this.deletVariable}
								/>
							</div>
						)
					})
				}
				<div className="addVariable">
					<Button 
						bsStyle="primary" 
						onClick={this.addVariable}
					>
						Добавить вариант
					</Button>
				</div>
			</div>
		);
	}
}

export default CreateSingleChoice;