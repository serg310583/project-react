import styles from './Header.module.css';


function Header() {
	return ( 
		<>
			<a className={styles['header-Link']} href="#">Personal Jornal</a>
		</>
	);
}
  
export default Header;