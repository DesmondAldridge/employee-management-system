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
  current_position BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id),
  FOREIGN KEY(role_id) REFERENCES role(role_id),
);
