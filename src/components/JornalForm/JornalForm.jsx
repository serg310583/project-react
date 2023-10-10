import styles from './JornalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JornalForm.state';
import { useRef } from 'react';
import Input from '../Input/Input';

function JornalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	
	const focusError = (isValid) => {
		switch(true){
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title){
			focusError(isValid);
			timerId = setTimeout(() => {			
				dispatchForm( { type: 'RESET_VALIDITY'});				
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if(isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });			
		}		
	}, [isFormReadyToSubmit, values, onSubmit]);

	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value}});
	};
	// получение данных из формы 	
	const addJornalItem = (e) => {	
		e.preventDefault();	
		dispatchForm({ type: 'SUBMIT' });		
	};	

	return ( 
		
		<form className={styles['jornal-form']} onSubmit={addJornalItem}>
			<div>
				<Input type="text" ref={ titleRef } isValid={isValid.title} onChange={onChange} value={values.title} name='title' appearence='title'/>
			</div>

			<div className={styles['form-row']} >
				<label htmlFor="date" className={styles['form-lable']} >
					<img src="/calendar.svg" alt="Иконка календаря" />
					<span className={styles['legend-row']}>Дата</span>
				</label>
				<Input type="date" isValid={isValid.date} ref={ dateRef } onChange={onChange} value={values.date} name='date' id='date' />
			</div>

			<div className={styles['form-row']} >
				<label htmlFor="tag" className={styles['form-lable']} >
					<img src="/folder.svg" alt="Иконка папки" />
					<span className={styles['legend-row']}>Метки</span>
				</label>
				<Input type="text" onChange={onChange} value={values.tag} name='tag'/>
			</div>
			
			<textarea name="post" ref={ postRef } onChange={onChange} value={values.post} id="" cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]:!isValid.post
			})}></textarea>
			<Button text="Сохранить"/>
		</form>		
	);

}  
export default JornalForm;