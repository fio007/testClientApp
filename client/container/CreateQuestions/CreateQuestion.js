import React from 'react';
import 'react-hot-loader/patch';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select';

import CreateSingleChoice from './CreateSingleChoice.js';
import CreateYesOrNoChoice from './CreateYesOrNoChoice.js';


import 'react-select/dist/react-select.css';
import './create.css';

class CreateQuestion extends React.Component{
	state = {
		question: "",
		typeQuestion: "",
		responses: "",
		answers: [{text:""}, {text:""}]
	}

	setTypeQuestion = (value) => {
		this.setState({typeQuestion: value});
	};

	setAnswers = (value) => {
		console.log("va;ue",value)
		this.setState({answers: value});
	};

	setResponses = (value) => {
		this.setState({responses: value});
	};

	setQuestion = (value) => {
		this.setState({question: value});
	};

	editQuestion = (typeQuestions) => {
		switch(this.state.typeQuestion.value) {
		  	case typeQuestions[0].value:
		  		return <CreateSingleChoice 
			  		answers={this.state.answers}
		  			onChangeAnswers={this.setAnswers}
		  			onChangeResponses={this.setResponses}
		  			onChangeQuestion={this.setQuestion}
		  		/>;
		  	case typeQuestions[2].value:
		  		return <CreateYesOrNoChoice 
			  		answers={this.state.answers}
		  			onChangeAnswers={this.setAnswers}
		  			onChangeResponses={this.setResponses}
		  			onChangeQuestion={this.setQuestion}
		  		/>;

		  	default:
		    	return null;
		}
	};

	createQuestion = () => {
		const serializedState = JSON.stringify(this.state);
		localStorage.setItem('question', serializedState);
	};

	render() {
		const option = {
			typeQuestions: [
				{value: "Одиночный выбор", label: "Одиночный выбор"},
				{value: "Множественный выбор", label: "Множественный выбор"},
				{value: "Да - Нет", label: "Да - Нет"},
				{value: "Открытый текст", label: "Открытый текст"}
			]
		};

		const {
			question,
			typeQuestion,
			responses,
			answers
		} = this.state;

		return (
			<div id="createQuestion" className="col-sm-6">
				<h3>Создание вопроса</h3>
				<div>
					<p className="inline-block">Тип вопроса:</p>
					<Select 
						options={option.typeQuestions}
						value={this.state.typeQuestion}
						onChange={this.setTypeQuestion}
						placeholder="Выберите тип вопроса"
						clearable={false}
					/>
					{this.editQuestion(option.typeQuestions)}
				</div>
				<hr/>
				<div className="row">
					{ 
						question && typeQuestion && answers 
							? 	<div className="col-sm-9">
									<div style={{width: "142px", margin: "0 0 0 auto"}}>
										<Link to="/">
											<Button 
												className="" 
												bsStyle="success" 
												onClick={this.createQuestion}
											>
												Создать вопрос
											</Button>
										</Link>
									</div>
								</div>
							: null
					}
					{ 
						question && typeQuestion && answers 
							? 	<div className="col-sm-3">
									<div style={{width: "82px", margin: "0 auto"}}>
										<Link to="/">
											<Button >Отмена</Button>
										</Link>
									</div>
								</div>
							: 	<div className="col-sm-12">
									<div style={{width: "82px", margin: "0 0 0 auto"}}>
										<Link to="/">
											<Button >Отмена</Button>
										</Link>
									</div>
								</div>
					}
				</div>
			</div>
		);
	}
}

export default CreateQuestion;