CREATE TABLE lists (
  id serial PRIMARY KEY,
  name text NOT NULL UNIQUE
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  list_id integer NOT NULL REFERENCES lists (id)
);
