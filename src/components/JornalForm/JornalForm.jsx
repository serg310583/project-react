import styles from './JornalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JornalForm.state';

function JornalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	// очистка валидации формы через 2 сек.
	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title){
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
		}
	}, [isFormReadyToSubmit]);

	// получение данных из формы 	
	const addJornalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		dispatchForm({ type: 'SUBMIT', payload: formProps});
		
		
	};	

	return ( 
		
		<form className={styles['jornal-form']} onSubmit={addJornalItem}>
			<div>
				<input type="text" name='title'className={cn(styles['input-title'], {
					[styles['invalid']]:!isValid.title
				})}/>
			</div>
			<div className={styles['form-row']} >
				<label htmlFor="date" className={styles['form-lable']} >
					<img src="/calendar.svg" alt="Иконка календаря" />
					<span className={styles['legend-row']}>Дата</span>
				</label>
				<input type="date" name='date' id='date' className={cn(styles['input'], {
					[styles['invalid']]:!isValid.date})}/>
			</div>

			<div className={styles['form-row']} >
				<label htmlFor="tag" className={styles['form-lable']} >
					<img src="/folder.svg" alt="Иконка папки" />
					<span className={styles['legend-row']}>Метки</span>
				</label>
				<input type="text" name='tag' className={styles['input']} />
			</div>
			<textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]:!isValid.post
			})}></textarea>
			<Button text="Сохранить"/>
		</form>		
	);

}  
export default JornalForm;