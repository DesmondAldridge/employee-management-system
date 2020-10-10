DROP DATABASE IF EXISTS ems_DB;
CREATE DATABASE ems_DB;
USE ems_DB;


CREATE TABLE department (
  id int AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(department_id) REFERENCES department(department_id)
  
);
CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30)NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(role_id) REFERENCES role(role_id),
  FOREIGN KEY(manager_id) REFERENCES 
);

INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 80, "righteous");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 20, "doofus");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 70, "selfish");