import React from "react";
import '../styles/images.scss';

export class Image extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			doneLoad: false,
		};
		this.changeLoad = this.changeLoad.bind(this);
	}

	changeLoad(){
		this.setState({doneLoad: true});
	}

	render() {
		const {doneLoad} = this.state;
		return(
			<>
				{!doneLoad &&
					<div className={"loader"}>
					</div>
				}
				<img
					className={"image"}
					alt={this.props.alt}
					src={this.props.url}
					onLoad={this.changeLoad}
				/>
			</>

		);
	}
}
