import "./style.css";
import React, { useState } from "react";
import FullPollCard from "../FullPollCard";

const polls = [
  {
    id: 1,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    options: [
      {
        idOption: 1,
        optionDescription: "Alternativa A",
        totalVotes: 0,
      },
      {
        idOption: 2,
        optionDescription: "Alternativa B",
        totalVotes: 0,
      },
      {
        idOption: 3,
        optionDescription: "Alternativa C",
        totalVotes: 0,
      },
    ],
  },
];

function Card() {
  const [openModal, setOpenModal] = useState(false);
  // const [opacity, setOpacity] = useState(false);
  // const [started, setStarted] = useState(true);
  // const [finished, setFinished] = useState(false);

  // const validation = () => {};

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log(openModal);
  };

  return (
    <>
      {polls.map((poll, index) => {
        return (
          <div className="cardContent" key={index}>
            <div className="container-title">
              <div className="titleRegister">
                <div className="createdRegister">
                  <h3>Criado em:</h3>
                  <h2>{poll.registerDate}</h2>
                </div>
                <div className="shedule">
                  <section>
                    <h3>Data de início:</h3>
                    <h2 className="spanDate">{poll.startDate}</h2>
                  </section>
                  <section>
                    <h3>Data de Término:</h3>
                    <h2 className="spanDate">{poll.endDate}</h2>
                  </section>
                </div>
              </div>
              <h1 className="titleCard">{poll.title}</h1>
            </div>
            <div className="showdescription">
              <h2 className="textDescription">{poll.questionDescription}</h2>
            </div>

            <div className="optionsContainer">
              <section>
                <h1>{poll.options[0].optionDescription}</h1>
                <h2> ({poll.options[0].totalVotes})</h2>
              </section>
              <section>
                <h1>{poll.options[1].optionDescription}</h1>
                <h2> ({poll.options[1].totalVotes})</h2>
              </section>
              <section>
                <h1>{poll.options[2].optionDescription}</h1>
                <h2> ({poll.options[2].totalVotes})</h2>
              </section>
            </div>
            <button className="buttonOpen" onClick={handleOpenModal}>
              ABRIR
            </button>
          </div>
        );
      })}
      {openModal && (
        <FullPollCard setOpenModal={setOpenModal} openModal={openModal} />
      )}
    </>
  );
}
export default Card;
