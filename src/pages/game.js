import React, { Component } from 'react';
import axios from 'axios';

class Game extends React.Component{
	// state = {
	// 	users: []
	// };
	constructor(props){
		super(props);
		this.state = {
			users : []
		}
	}

	componentDidMount(){
		// fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
		// .then(
		// 	res => {
		// 		this.setState({ users: res.json()});
		// 	}
		// 	)

		// const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
		// 
		// axios.get(url).
		// then( data => {
		// 	
		// 	this.setState({
		// 		users: data.data
		// 	})
		// })

		this._getData();
	}

	_getData(){
		const options = {
			headers: {'Content-Type': 'application/jsonp'},
			method: 'GET'
		};

		fetch("https://api.kawalcorona.com/indonesia", options)
		.then(data => data.json())
		.then(json => this.setState({items: json}))
		.catch(e => console.log(e));
	}

	render(){
		const {users} = this.state;
		return(
			<div>
			{ users.map( user => {
				return (
					<div>{ user.name}</div>
					)
				})}
		</div>
		)
		}
}



export default Game;