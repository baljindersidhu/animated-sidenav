import React from 'react';
import * as eva from 'eva-icons';
import './App.css';
import Sidenav from './components/sidenav/Sidenav';

class App extends React.Component {

	componentDidMount(){
		eva.replace();
	}

	render(){
		return (
			<div className="App">
				<Sidenav />
			</div>
		);
	}
}

export default App;
