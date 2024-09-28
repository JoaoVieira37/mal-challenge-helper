import * as AnimeRepository from "./db/AnimeRepository.js"
import { getAnime } from "./http.js"
import { range, sleep } from "./utils.js"

// AnimeRepository.findAnimeById(1).then(
//     (anime) => {
//         console.log(anime)
//     }
// ).catch(
//     (err) => {
//         console.error("Error finding anime ", err)
//     }
// )

// let rangeArray: Array<number> = range(1, 101, 1)

// for (let value of rangeArray) {
//     if (value % 5 == 0) {
//         console.log("Progress:", `${value}/100`)
//     }

//     try {
//         let anime = await getAnime(value);

//         if (anime) {
//             AnimeRepository.insertAnime(anime);
//         }
//     } catch (err) {
//         console.error("Error finding anime", err);
//     }

//     await sleep(1100)
// }

// let anime = await getAnime(100);

// if (anime) {
//     AnimeRepository.insertAnime(anime);
// }