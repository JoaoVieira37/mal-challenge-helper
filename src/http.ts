import axios, { AxiosError, AxiosResponse } from "axios"
import { Anime } from "kysely-codegen"


export async function getAnime(mal_id: number) {
    try {

        const response: AxiosResponse<any, any> = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
        const data = response.data.data
        
        const titles = data.titles
        let default_title: string = ""
        let japanese_title: string = ""
        let english_title: string = ""
        for (let t of titles) {
            if (t.type === "Japanese") {
                japanese_title = t.title
            } else if (t.type === "English") {
                english_title = t.title
            } else if (t.type === "Default") {
                default_title = t.title
            }
        }

        const aired_from: Date = new Date(data.aired.from)
        // console.log(aired_from)
        const aired_to:   Date = new Date(data.aired.to)
        // console.log(aired_to)

        const anime_data = {
            mal_id: String(data.mal_id),
            default_title,
            japanese_title,
            english_title,
            aired_from_year  : aired_from.getFullYear(),
            aired_from_month : aired_from.getMonth() + 1, // Date.getMonth returns the month in the interval [0, 11]
            aired_from_day   : aired_from.getDate(),
            aired_to_year    : aired_to.getFullYear(),
            aired_to_month   : aired_to.getMonth() + 1,
            aired_to_day     : aired_to.getDate()
        }

        // console.log(anime_data)

        return anime_data

    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(`[${mal_id}]`,"Axios error:", err.response?.status, err.response?.statusText);
        } else {
            console.error("Unexpected error:", err);
        }
    } 
}

// TODO: Create separate functions to parse the received responses (Refactor)