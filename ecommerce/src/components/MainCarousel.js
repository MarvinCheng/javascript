import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class MainCarousel extends React.Component {
	constructor(props){
		super(props);
		this.renderCarousel = this.renderCarousel.bind(this);
	}

	renderCarousel(carousel, idx ){
		return (
			<div key={idx}>
				<img src={carousel.img}/>
				{carousel.title && <p className="carouselTitle">{carousel.title}</p>}
			</div>
		)
	}

	render(){
		const {carousels} = this.props;
		return (
			<Carousel
				autoPlay={true}
				interval={2000}
				infiniteLoop={true}
				showStatus={false}
				showIndicators={false}
				dynamicHeight={false}
			>
				{carousels.map((carousel, idx) => this.renderCarousel(carousel, idx))}
			</Carousel>
		);
	}

}
