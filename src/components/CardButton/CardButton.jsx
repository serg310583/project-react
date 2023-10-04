import styles from './CardButton.module.css';


function CardButton({children}) {
	
	return ( 
		
		<button className={`${styles['card-button']} `} >

			{children}
		</button>
	);
}
  
export default CardButton;