import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Spotify from "../images/Spotify.png";
import "../styles/main.less";


export class MenuBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			type: 'preLogin',
			preLogin: [{component: 'Premium'}, {component: 'Help'}],
		};
	}

	renderTab(){
		const {type} = this.state;
		const components = this.state[type];
		return components.map((component, idx)=> {
			return (
				<span className="tab" key={idx}>
					<Link to={`/${component.component}`}>{component.component}</Link>
				</span>
					)
		});

	}
	render(){
		return (
			<header>
				<div className="menubar">
					<img src={Spotify} className="logo"/>
					<nav className="nav">
						<Router>
							{this.renderTab()}
						</Router>
					</nav>
				</div>
			</header>
		)
	}
}
