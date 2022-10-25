import React from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";
import { useState, useEffect } from "react";

function FullPollCard({ setOpenModal, reload, setReload, pollsList}) {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [idItemDelete, setIdItemDelete] = useState(null);
  const [currentPoll, setCurrentPoll] = useState();
  const [pollId, setPollId] = useState();

  async function handleDeleteItem() {
    await fetch(`http://localhost:80/api/poll/${idItemDelete}`, {
      method: "DELETE",
    });
    setIdItemDelete(null);
    setReload(!reload);
  }

  useEffect(() => {
    handleGetPoll();
  }, []);

  async function handleGetPoll() {
    const response = await fetch("http://localhost:80/api/poll/1", {
      method: "GET",
    });
    
    const data = await response.json();
    setPollId(data.result);
    console.log(data);
  }

  return (
    <>
      {pollsList.map((poll, index) => {
        return (
          <div className="backgroundModal" key={index}>
            <div className="modalContent">
              <div className="container-titleModal">
                <div className="titleRegisterModal">
                  <img
                    src={closeIcon}
                    className="closeButton"
                    alt="close modal"
                    onClick={handleCloseModal}
                  />
                  <div className="deleteBox">
                    <button className="put"> EDITAR </button>
                    <button
                      className="delete"
                      onClick={(e) => {
                        handleDeleteItem(e);
                      }}
                    >
                      EXCLUIR
                    </button>
                  </div>
                  <div className="createdRegisterModal">
                    <h3> Criado em: </h3> <h2>{poll.registerDate}</h2>
                  </div>
                </div>
                <div className="sheduleModal">
                  <section>
                    <h3> Data de início: </h3>
                    <h2 className="spanDateModal"> {poll.startDate} </h2>
                  </section>
                  <section>
                    <h3> Data de Término: </h3>
                    <h2 className="spanDateModal"> {poll.Date} </h2>
                  </section>
                </div>
                <h1> {poll.title} </h1>
              </div>
              <div className="showdescriptionModal">
                <h2 className="textDescriptionModal">
                  {poll.questionDescription}
                </h2>
              </div>
              <div className="optionsContainerModal">
                <section>
                  <h1> {poll.option1} </h1> <h2> ({poll.votesOption1}) </h2>
                </section>
                <section>
                  <h1> {poll.option2} </h1> <h2> ({poll.votesOption1}) </h2>
                </section>
                <section>
                  <h1> {poll.option3} </h1> <h2> ({poll.votesOption1}) </h2>
                </section>
              </div>
              <button className="buttonVote"> VOTAR </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FullPollCard;
