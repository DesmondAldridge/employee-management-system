CREATE DATABASE ems_DB;
USE ems_DB;


CREATE TABLE department (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE role (
  id int AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal,
  department_id int,
  PRIMARY KEY(id),
  FOREIGN KEY(department_id) REFERENCES department(department_id)
  
);
CREATE TABLE employee (
  id int AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name DECIMAL,
  role_id int,
  manager_id int,
  PRIMARY KEY(id),
  FOREIGN KEY(role_id) REFERENCES role(role_id),
  FOREIGN KEY(manager_id) REFERENCES 
);

INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 80, "righteous");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 20, "doofus");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 70, "selfish");