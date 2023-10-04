import styles from './JornalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';


function JornalForm({ onSubmit }) {
	//стейт валидации формы
	const [formValidState, setFormValidState]= useState({
		title: true,
		post: true,
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
		if (!formProps.post?.trim().length){
			setFormValidState(state => ({...state, post: false}));
			isFormValid = false;
		} else {setFormValidState(state => ({...state, post: true}));}
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
		
		<form className={styles['jornal-form']} onSubmit={addJornalItem}>
			<input type="text" name='title'className={cn(styles['input'], {
				[styles['invalid']]:!formValidState.title
			})}/>
			<input type="date" name='date' className={cn(styles['input'], {
				[styles['invalid']]:!formValidState.date
			})}/>
			<input type="text" name='tag' />
			<textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]:!formValidState.post
			})}></textarea>
			<Button text="Сохранить"/>
		</form>		
	);

}  
export default JornalForm;