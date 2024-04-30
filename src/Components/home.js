import React from 'react';
import Navbar from './navbar'
import Categories from './categories'
import './home.css'
import FullDisplay from './fullDisplay'

import { gallery } from "../Data";


function search(item){
	let url=''
	for (let val of gallery[0].data){
		if (val.name===item){
			url=val.url
		}
	} 

	return url;
}


class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			display: 'hidden',
			element: ''

		}
		this.showDisplay=this.showDisplay.bind(this)
		this.closeDisplay=this.closeDisplay.bind(this)

	}
	
	showDisplay(event){
		const val=event.target.alt
		const url= search(val)
		const element_val=event.target.parentNode.parentNode.parentNode.id
		this.setState({element:url})
		this.setState({display:''})
	}
	closeDisplay(event){
		this.setState({element:''})
		this.setState({display:'hidden'})
	}
	render(){
	return(
		<div id='container' className="container-fluid">
			<Navbar />
			<FullDisplay show={this.state.display} element={this.state.element} closeDisplay={this.closeDisplay}/>
			<Categories showDisplay={this.showDisplay}/>
		</div>
		);
}
}

export default Home;