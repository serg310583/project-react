import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalList from './components/JornalList/JornalList';
import JournalItem from './components/JournalItem/JournalItem';
import Body from './components/layouts/Body/Body';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import JornalForm from './components/JornalForm/JornalForm';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные ландшафты',
			date: new Date()
		},
		{
			title: 'Поход в годы',
			text: 'Думал, что очень много времени...',
			date: new Date()
		}
	
	];

	

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>

				<JornalAddButton/>

				<JornalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>

				</JornalList>
				
			</LeftPanel>
			<Body>
				<JornalForm/>
			</Body>
			
		</div>
	);
}

export default App;
