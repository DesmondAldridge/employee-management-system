INSERT INTO department (name)
VALUES 
("Monarch"), 
("Small Council"), 
("Kingsguard"), 
("City Watch"),
("The Faith")
("Wardens"),
("Night's Watch");

INSERT INTO role (title, salary, department_id)
VALUES 
("King", 0.00, 1), 
("Queen", 0.00, 1),
("Hand of the King", 100000.00, 2),  
("Master of Coin", 50000.00, 2),
("Master of Ships", 25000.00, 2),
("Master of Whispers", 30000.00, 2),
("Grand Maester", 25000.00, 2),
("Lord Commander of the Kingsguard", 25000.00, 3),
("Kingsguard", 10000.00, 3),
("Lord Commander of the City Watch", 15000.00, 4),
("High Septon", 0.00, 5)
("Warden of the East", 0.00, 6),
("Warden of the North", 0.00, 6),
("Warden of the South", 0.00, 6),
("Warden of the West", 0.00, 6),
("Lord Commander of the Night's Watch", 1000.00, 7),
("First Ranger", 500.00, 7)
("First Builder", 500.00, 7),
("Lord Steward", 500.00, 7),
("Maester of Castle Black", 500.00, 7),
("Commander of Shadow Tower", 700.00, 7), 
("Commander of Eastwatch-by-the-Sea", 800.00, 7),

INSERT INTO employee (first_name, last_name, role_id, manager_id, current_position)
VALUES

("Robert", "Baratheon", 1, NULL, FALSE),
("Brandon", "Stark", 1, NULL, TRUE),
("Cersei", "Lannister", 2, NULL, FALSE),
("Jon", "Arryn", 3, NULL, FALSE),
("Eddard", "Stark", 3, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
("", "", 0, NULL, FALSE),
