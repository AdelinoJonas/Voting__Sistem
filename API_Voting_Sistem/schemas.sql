create database dbApiPolls;
use dbApiPolls;

DROP database dbApiPolls;

CREATE TABLE poll_questions (
  id int PRIMARY KEY AUTO_INCREMENT,
  registerDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  startDate date NOT NULL,
  endDate date NOT NULL,
  title varchar(150) NOT NULL,
  questionDescription varchar(300) NOT NULL
);

INSERT INTO poll_questions (startDate, endDate, title, questionDescription) VALUES
('2017-8-16', '2021-07-16', 'Good Vibe', 'O Jonas Vai ser contratado?');

INSERT INTO poll_questions (startDate, endDate, title, questionDescription) VALUES
('2017-8-16', '2021-07-16', 'Acertividade', 'O projeto está ficando bom?');

select * from poll_questions;
delete from poll_questions where id=1;
DROP database poll_questions;


CREATE TABLE IF NOT EXISTS poll_options (
  idOption int PRIMARY KEY AUTO_INCREMENT,
  optionDescription varchar(150) NOT NULL,
  totalVotes integer NOT NULL DEFAULT 0
);

INSERT INTO poll_options (optionDescription, totalVotes) VALUES
('SIM', '12');

INSERT INTO poll_options (optionDescription, totalVotes) VALUES
('NÃO', '3');

INSERT INTO poll_options (optionDescription, totalVotes) VALUES
('TALVEZ', '5');

select * from poll_options;
DROP table poll_options;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '40196020';

flush privileges;