import React from "react";

import '../styles/form.scss';
import {Image} from "./Image.js";
import {SubmitButton} from "./SubmitButton.js";
import {TextInput} from "./TextInput.js";
import {searchPhotos} from "../services/unsplashService.js";

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			images: [],
			noImage: false,
			page: 1,
			totalPages: 1,
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.submitAnswer = this.submitAnswer.bind(this);
		this.renderImages = this.renderImages.bind(this);
		this.renderNextPage = this.renderNextPage.bind(this);
	}

	componentDidUpdate(prevProps, prevState){
		if(this.state.value !== prevState.value){
			this.setState({page:1, totalPages: 0});
		}
	}

	onSubmit(event) {
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	async submitAnswer() {
		let response = await searchPhotos(this.state.value, this.state.page);
		if(response.images.length){
			this.setState({
				images: response.images,
				noImage: false,
				totalPages: response.totalPages,
			});
		}else {
			this.setState({
				images: [],
				noImage: true,
				totalPages: response.totalPages,
			});
		}
	}

	renderImages(images){
		let imageRenderer = images.map((image, idx) => {
			return <Image key={idx} url={image.url} alt={image.alt}/>
		});
		return imageRenderer;
	}

	async renderNextPage(event){
		event.preventDefault();
		await this.setState({page: this.state.page + 1});
		await this.submitAnswer();
	}

	render() {
		const {images, noImage, totalPages} = this.state;
		return (
			<>
				<section>
					<form onSubmit={this.onSubmit}>
						<TextInput
							onChange={this.handleChange}
							value={this.state.value}
						/>
						<SubmitButton
							submit={this.submitAnswer}
						/>
						{totalPages > 1 &&
						<span className={"paddingLeft"}>
							<a href="" onClick={this.renderNextPage}>Next</a>
						</span>
						}
					</form>
				</section>
				<section className={"result"}>
					{images.length > 0 &&  this.renderImages(images)}
					{noImage && <span>No result found.</span>}
				</section>
			</>
		);
	}
}
