create database db_api_polls;
use db_api_polls;

CREATE TABLE IF NOT EXISTS poll_questions (
  id int PRIMARY KEY AUTO_INCREMENT,
  registerDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  startDate date NOT NULL,
  endDate date NOT NULL,
  title varchar(100) NOT NULL,
  questionDescription varchar(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS poll_options(
  id int PRIMARY KEY AUTO_INCREMENT,
  optionDescription varchar(150) NOT NULL,
  totalVotes integer NOT NULL DEFAULT 0,
  question_id INT NOT NULL,
  foreign key (question_id) references poll_questions(id)
);

DROP database db_api_polls;