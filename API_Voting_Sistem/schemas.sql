create database dbApiPolls;
use dbApiPolls;

CREATE TABLE IF NOT EXISTS poll_questions (
  ID int PRIMARY KEY AUTO_INCREMENT,
  DT_REGISTER timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  DT_START date NOT NULL,
  DT_END date NOT NULL,
  NM_POLL varchar(150) NOT NULL,
  DS_QUESTION varchar(300) NOT NULL
);

INSERT INTO poll_questions (DT_START, DT_END, NM_POLL, DS_QUESTION) VALUES
('2017-8-16', '2021-07-16', 'Good Vibe', 'O Jonas Vai ser contratado?');

INSERT INTO poll_questions (DT_START, DT_END, NM_POLL, DS_QUESTION) VALUES
('2017-8-16', '2021-07-16', 'Acertividade', 'O projeto está ficando bom?');

select * from poll_questions;
delete from poll_questions where id=1;
DROP table poll_questions;


CREATE TABLE IF NOT EXISTS poll_options (
  NR_OPTION int PRIMARY KEY AUTO_INCREMENT,
  DS_OPTION varchar(150) NOT NULL,
  QT_VOTE integer NOT NULL DEFAULT 0
);

INSERT INTO poll_options (DS_OPTION, QT_VOTE) VALUES
('SIM', '8');

INSERT INTO poll_options (DS_OPTION, QT_VOTE) VALUES
('NÃO', '2');

INSERT INTO poll_options (DS_OPTION, QT_VOTE) VALUES
('TALVEZ', '3');

select * from poll_options;
DROP table poll_options;