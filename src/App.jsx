import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalList from './components/JornalList/JornalList';
import Body from './components/layouts/Body/Body';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import JornalForm from './components/JornalForm/JornalForm';

const INITIAL_DATA = [
	{
		id: 1,
		title: 'Подготовка к обновлению курсов',
		text: 'Горные походы открывают удивительные ландшафты',
		date: new Date()
	},
	{
		id: 2,
		title: 'Поход в годы',
		text: 'Думал, что очень много времени...',
		date: new Date()
	}
];
function App() {
	const [items, setItems] = useState(INITIAL_DATA);
	
	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
		}]);
	};
	
	

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>

				<JornalAddButton/>

				<JornalList items = {items}/>
					
				
			</LeftPanel>
			<Body>
				<JornalForm onSubmit={addItem}></JornalForm>
			</Body>
			
		</div>
	);
}

export default App;
