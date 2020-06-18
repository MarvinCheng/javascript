import React from "react";

export class Grid extends React.Component {
	constructor(props){
		super(props);
		this.renderGrid = this.renderGrid.bind(this);
	}

	renderGrid(grid, idx){
		return (
			<div key={idx} className="flex margin-lr-40">
				<div className="frame">
					<img src={grid.img} className={grid.imgClass}/>
					<div>
						<label className="title">{grid.title}</label> <br/>
						{grid.text && <label className="text">{grid.text}</label>}
					</div>
				</div>
			</div>
		)
	}

	render(){
		const {grids} = this.props;
		return (
			<section className="grid">
				{grids.map((grid, idx)=> this.renderGrid(grid, idx))}
			</section>
		)
	}
}
