import React from "react";

export class TextInput extends React.Component {
	render() {
		return (
			<div>
				<label>Put in the tag: </label>
				<input
					type="text"
					value={this.props.value}
					onChange={this.props.onChange}
				/>
			</div>
		);
	}
}
