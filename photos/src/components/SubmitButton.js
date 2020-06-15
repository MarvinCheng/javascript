import React from "react";
import '../styles/submitButton.scss';

export class SubmitButton extends React.Component {
	render() {
		return (
			<button className={"submit"}
				onClick={this.props.submit}
				type="submit"
			>
			<span>
				Submit
			</span>
			</button>
		);
	}
}
