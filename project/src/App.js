import React from 'react'
//import Board from './components/Board'
//import Todo from './components/todo'
import List from './components/list'
import './App.css';

class App extends React.Component {
	render() {
	 return (
		// <div className="game">
		//  <div className="game-board">
		// 	<Board />
		//  </div>
		//  <div className="game-info">
		// 	<div>{/* status */}</div>
		// 	<ol>{/* TODO */}</ol>
		//  </div>
		// </div>
		// <div className="todoContainer">
		// 		<Todo>this is first</Todo>
		// 		<Todo>this is second</Todo>
		// 		<Todo>this is third</Todo>
		// 	</div>
		<List/>
	 );
	}
}


export default App;
