import './JornalForm.css';

import Button from '../Button/Button';
import { useState } from 'react';


function JornalForm({ onSubmit }) {
	//стейт валидации формы
	const [formValidState, setFormValidState]= useState({
		title: true,
		text: true,
		date: true
	});
	// получение данных из формы 	
	const addJornalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		//логика валидации формы		
		let isFormValid = true;
			
		if (!formProps.title?.trim().length){
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		} else {setFormValidState(state => ({...state, title: true}));}
		if (!formProps.text?.trim().length){
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		} else {setFormValidState(state => ({...state, text: true}));}
		if (!formProps.date){
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		} else {setFormValidState(state => ({...state, date: true}));}
		if (!isFormValid) {
			return;
		}
		
		onSubmit(formProps);
	};	

	return ( 
		
		<form className='jornal-form' onSubmit={addJornalItem}>
			<input type="text" name='title' style={ {border: formValidState.title ? undefined : '1px solid red'} }/>
			<input type="date" name='date' style={ {border: formValidState.date ? undefined : '1px solid red'} }/>
			<input type="text" name='text' style={ {border: formValidState.text ? undefined : '1px solid red'} }/>
			<textarea name="post" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить"/>
		</form>		
	);

}  
export default JornalForm;