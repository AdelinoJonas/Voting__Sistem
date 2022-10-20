import React, { useState } from "react";
import "./style.css";
import FullPollCard from "../FullPollCard";

function Card({ dataPoll }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      {dataPoll.map((poll, index) => {
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