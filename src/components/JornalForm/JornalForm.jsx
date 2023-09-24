import './JornalForm.css';

import Button from '../Button/Button';


function JornalForm({onSubmit}) {
	

	const addJornalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};	

	return ( 
		
		<form className='jornal-form' onSubmit={addJornalItem}>
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag'/>
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить"/>
		</form>		
	);

}  
export default JornalForm;