CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount numeric(6,2) NOT NULL,
  memo text NOT NULL,
  created_on date DEFAULT NOW()
);

INSERT INTO expenses (amount, memo) VALUES (5.23, 'hamburger and drink');
INSERT INTO expenses (amount, memo) VALUES (3.50, 'tolls');
