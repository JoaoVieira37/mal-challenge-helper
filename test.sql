DROP TABLE IF EXISTS anime;

CREATE TABLE IF NOT EXISTS anime (
    id                  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    mal_id              TEXT    NOT NULL,
    default_title       TEXT,
    japanese_title      TEXT,
    english_title       TEXT,
    aired_from_year     INTEGER,
    aired_from_month    INTEGER,
    aired_from_day      INTEGER,
    aired_to_year       INTEGER,
    aired_to_month      INTEGER,
    aired_to_day        INTEGER
);

-- INSERT INTO anime 
--     (mal_id, japanese_title, english_title, aired_from_year, aired_from_month, aired_from_day, aired_to_year, aired_to_month, aired_to_day)
-- VALUES
--     ("1", "aaa", "bbb", 1998, 2, 10, 2002, 5, 27);
