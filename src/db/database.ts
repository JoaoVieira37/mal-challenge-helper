import { DB } from "kysely-codegen"
import SQLite from "better-sqlite3"
import { Kysely, SqliteDialect } from "kysely"

const dialect = new SqliteDialect(
    { database: new SQLite("test.db") }
)

export const db = new Kysely<DB>({ dialect, })