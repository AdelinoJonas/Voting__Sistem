import "./style.css";
import React, { useState, useEffect } from "react";
import FullPollCard from "../FullPollCard";

function Card({pollsList, setPollsList, reload, setReload}) {
  const [openModal, setOpenModal] = useState(false);
  const [pollById, setPollById] = useState([]);

  console.log('pollById-card',pollById);
  
  useEffect((reload) => {
    handleGetPoll();
  }, [reload]);
  
  const handleOpenModal = () => {
    setOpenModal(true);
    // setReload(true);
  };
  
  async function handleGetPoll() {
    const response = await fetch("http://localhost:80/api/poll/2", {
      method: "GET",
    });
    
    const data = await response.json();
    setPollById(data.result);
  }
  
  return (
    <>
      {pollsList.map((poll, index) => {
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
            <button className="buttonOpen" onClick={handleOpenModal}>
              ABRIR
            </button>
          </div>
        );
      })}
      {openModal && (
        <FullPollCard setOpenModal={setOpenModal} openModal={openModal} pollById={pollById} setPollById={setPollById}/>
      )}
    </>
  );
}
export default Card;