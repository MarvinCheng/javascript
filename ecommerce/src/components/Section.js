import React from "react";


export class Section extends React.Component {
	render(){
		const {section, index} = this.props;
		return (
			<section className={section.className} key={index}>
				<p className="mainText">{section.mainText}</p>
				{section.secondaryText && <h2>{section.secondaryText}</h2>}
				<br/><br/>
				{section.buttons.length &&
				<div className="button">
					{section.buttons.map((button, idx) =>
						<button key={idx} className={button.classes} onClick={button.action}>{button.text}</button>
					)}
				</div>
				}
				{section.helpText && <p className="helpText">{section.helpText}</p>}
			</section>
		);
	}

}
