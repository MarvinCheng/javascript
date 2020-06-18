import React from "react";

export class Footer extends React.Component {

	render(){
		return (
			<>
				<section className="footer">
					<div className="flex">
						<label>About Us</label>
					</div>
					<div className="flex">
						<label>FAQ</label>
					</div>
					<div className="flex">
						<label>Terms & Conditions</label>
					</div>
					<div className="flex">
						<label>Privacy Policy</label>
					</div>
				</section>
			</>
		)
	}
}
