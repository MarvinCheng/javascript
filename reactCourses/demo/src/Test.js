import React from 'react';

class Test extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {name: ''};
	}

	handleClick(){
		this.setState({name: 'name'});
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Click me</button>
				<p> Hello, {this.state.name}</p>
				<p>{this.props.message}</p>
			</div>
		);
	}
}

export default Test;
