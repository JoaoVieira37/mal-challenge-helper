import { Insertable, Selectable, Updateable } from "kysely"
import { Anime } from "kysely-codegen"
import { db } from "./database.js"

type SelectAnime = Selectable<Anime>
type NewAnime = Insertable<Anime>
type UpdateAnime = Updateable<Anime>

export async function findAnimeById(id: number) {
    return await db.selectFrom('anime')
        .where('id', '=', id)
        .selectAll()
        .executeTakeFirst()
}

export async function findAnimeByMalId(mal_id: string) {
    return await db.selectFrom('anime')
        .where('mal_id', '=', mal_id)
        .selectAll()
        .executeTakeFirst()
}

export async function insertAnime(anime: NewAnime) {
    return await db.insertInto('anime')
        .values(anime)
        .returningAll()
        .executeTakeFirstOrThrow()
}