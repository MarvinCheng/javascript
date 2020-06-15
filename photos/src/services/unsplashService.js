const ACCESS_KEY = "yOrbQsqu6zgx9W27VRVZ7qiT3Rk6yWRjOZeBmVcz7yo";
const URL = "https://api.unsplash.com/";

async function http(url, method){
	let response = await fetch(url, {
		method: method,
		headers: {
			Authorization: `Client-ID ${ACCESS_KEY}`,
		}
	});
	if(response.ok){
		return response.json();
	} else {
		let err = await response.json();
		const errors = err.errors || [];
		throw new Error(`Error: ${response.status}, error: ${errors.join(",")}`);
	}

}

export async function searchPhotos(value, page=1){
	let response = await http(`${URL}search/photos?page=${page}&query=${value}`, "GET");
	const images = [];
	if(response.results.length){
		const {results} = response;
		for(let result of results){
			// get small image from urls
			const {urls, alt_description} = result;
			const {small} = urls;
			images.push({alt: alt_description, url: small});
		}
	}
	return {
		images,
		totalPages: response['total_pages'],
	};
}
