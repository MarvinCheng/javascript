import React from "react";

import {Grid} from "./components/Grid.js";
import {MainCarousel} from "./components/MainCarousel.js";
import {Section} from "./components/Section.js";
import newyork from "./images/newyork.png";
import paris from "./images/paris.png";
import malaysia from "./images/malaysia.png";
import girls from "./images/girls.jpg";
import boys from "./images/boys.jpg";
import grid1 from "./images/grid1.jpg";
import grid2 from "./images/grid2.jpg";
import grid3 from "./images/grid3.jpg";
import grid4 from "./images/grid4.jpg";

export class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			components: [
				{
					type: 'text',
					className: 'section1',
					mainText: 'Get 3 months of Premium for free',
					secondaryText: 'Enjoy endless ad-free music - even offline',
					helpText: 'Monthly subscription fee applies after. Offer not available to users who already' +
						' tried Premium. Terms and conditions apply.',
					buttons: [
						{
							type: 'primary',
							classes: 'primary',
							text: 'get premium'.toUpperCase(),
							action: this.primaryButtonAction,
						},
						{
							type: 'secondary',
							classes: 'secondary',
							text: 'learn more'.toUpperCase(),
							action: this.secondaryButtonAction,
						},
					],
				},
				{
					type: 'text',
					className: 'section2',
					mainText: 'Spotify Free',
					secondaryText: 'Million of songs. No credit card needed.',
					buttons: [
						{
							type: 'primary',
							classes: 'primary only',
							text: 'get spotify free'.toUpperCase(),
							action: this.primaryButtonAction,
						},
					],
				},
				{
					type: 'carousel',
					components: [{img: newyork}, {img: paris}, {img: malaysia}],
				},
				{
					type: 'grid',
					components: [
						{
							img: girls,
							title: 'Floral Dresses',
							text: 'Summer looks for days in the sun',
						},
						{
							img: boys,
							title: 'Conscious Pieces for Girls',
							text: 'Sustainable staples from Mini Rodini, Burberry Kids and Bobo Choses',
						},
					],
				},
				{
					type: 'grid',
					components: [
						{
							img: grid1,
							imgClass: 'medium',
							title: 'Baby Girls',
						},
						{
							img: grid2,
							imgClass: 'medium',
							title: 'Baby Boys',
						},
						{
							img: grid3,
							imgClass: 'medium',
							title: 'Girls',
						},
						{
							img: grid4,
							imgClass: 'medium',
							title: 'Boys',
						},
					],
				},
			],
		};
		this.renderByType = this.renderByType.bind(this);
		this.primaryButtonAction = this.primaryButtonAction.bind(this);
		this.secondaryButtonAction = this.secondaryButtonAction.bind(this);
	}

	primaryButtonAction(){
		console.log("primary button clicked");
	}

	secondaryButtonAction(){
		console.log("secondary button clicked");
	}

	renderByType(section, idx){
		switch(section?.type){
			case 'text':
				return <Section key={idx} section={section} index={idx}/>;
				break;
			case 'carousel':
				return <MainCarousel key={idx} carousels={section.components} />;
				break;
			case 'grid':
				return <Grid key={idx} grids={section.components}/>;
				break;
		}
	}

	render(){
		return (
			<>
			{
				this.state.components.map((section, idx) => {
					return this.renderByType(section, idx);
				})
			}
			</>
	);
	}
}
