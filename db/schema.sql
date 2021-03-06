/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database movie_planner_db and specified it for use.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int AUTO_INCREMENT NOT NULL ,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT false,
PRIMARY KEY (id)
);

