import axios, { AxiosResponse } from "axios";

const id = 30120;


axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
	.then((response) => {
		//console.log(response.data);
		parseResponse(response);
	})
	.catch((error) => {
		console.log(error);
	})


function parseResponse(response: AxiosResponse<any, any>): void {
	let data = response.data.data;
	console.log(data);

	let anime = new FullAnime();

	anime.mal_id = data.mal_id;

}

class FullAnime {
	mal_id!: number;


}
