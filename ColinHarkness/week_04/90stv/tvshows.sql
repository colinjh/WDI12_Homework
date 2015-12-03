CREATE TABLE tvshows (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  years TEXT,
  image TEXT
);

INSERT INTO tvshows (name, genre) VALUES ('Full House', 'Comedy');