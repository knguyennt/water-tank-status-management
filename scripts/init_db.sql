-- createdb.sql

-- Create a new database
CREATE DATABASE brokenpipemanagement;

-- Connect to the newly created database
\c brokenpipemanagement

-- Create a table named 'users'
CREATE TABLE BrokenPipe (
    id SERIAL PRIMARY KEY,
    date DATE,
    type VARCHAR(100),
    district VARCHAR(100),
    size INTEGER,
    ammount INTEGER,
    reason VARCHAR(500),
    material VARCHAR(100),
    manufactor VARCHAR(100),
    thickness INTEGER,
    installed_date DATE,
    pipe_type VARCHAR(100)
);