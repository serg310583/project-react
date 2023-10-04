import CardButton from '../CardButton/CardButton';
import styles from './JornalAddButton.module.css';


function JornalAddButton() {
	return ( 
		<CardButton className={styles['jornal-add']}>+ Новое воспоминание</CardButton>
	);
}
  
export default JornalAddButton;