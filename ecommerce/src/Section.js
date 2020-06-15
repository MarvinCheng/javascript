import React from "react";


export class Section extends React.Component {
	render(){
		return (
			<>
				<section className={this.props.className}>
					<p className="mainText">Get 3 months of Premium for free</p>
					<h2>Enjoy endless ad-free music - even offline</h2>
					<br/><br/>
					<button className="primary">GET PREMIUM</button>
					<button className="secondary">LEARN MORE</button>
				</section>
			</>
			);
	}

}
