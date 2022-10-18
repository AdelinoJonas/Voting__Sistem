import React, { useState } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";

function CardRegisterPoll({ setOpenModal }) {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  const handleStartChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndChange = (e) => {
    setEndDate(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setQuestionDescription(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleOption1Change = (e) => {
    setOption1(e.target.value);
  };
  const handleOption2Change = (e) => {
    setOption2(e.target.value);
  };
  const handleOption3Change = (e) => {
    setOption3(e.target.value);
  };
  const handleSubmit = (e) => {
    if (
      !startDate &&
      !endDate &&
      !questionDescription &&
      !title &&
      !option1 &&
      !option2 &&
      !option3
    ) {
      alert("Totos os campos são obrigatórios!");
    } else {
      alert("Enquete cadastrada com Sucesso!");
    }
    e.preventDefault();
  };

  return (
    <div className="backgroundModal">
      <div className="modalContent">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="container-titleModal">
            <div className="titleRegisterModal">
              <img
                src={closeIcon}
                className="closeButton"
                alt="close modal"
                onClick={handleCloseModal}
              />
              <div className="postPut">
                <button className="post">POSTAR</button>
                <button className="put">EDITAR</button>
              </div>
              <div className="sheduleModal">
                <section>
                  <label>Data de início:</label>
                  <input
                    className="spanDateModal"
                    type="text"
                    value={startDate}
                    required
                    onChange={(e) => {
                      handleStartChange(e);
                    }}
                  />
                </section>
                <section>
                  <label>Data de Término: </label>
                  <input
                    className="spanDateModal"
                    type="text"
                    value={endDate}
                    required
                    onChange={(e) => {
                      handleEndChange(e);
                    }}
                  />
                </section>
              </div>
              <div className="centerTitle">
                <label>Título da enquete:</label>
                <input
                  type="text"
                  value={title}
                  required
                  onChange={(e) => {
                    handleTitleChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="showdescriptionModal">
            <label>Descreva a enquete:</label>
            <textarea
              type="text"
              value={questionDescription}
              required
              onChange={(e) => {
                handleDescriptionChange(e);
              }}
            />
          </div>
          <div className="optionsContainerModal">
            <section>
              <label>Opção 1:</label>
              <br />
              <input
                type="text"
                value={option1}
                required
                onChange={(e) => {
                  handleOption1Change(e);
                }}
              />
            </section>
            <section>
              <label>Opção 2:</label>
              <br />
              <input
                type="text"
                value={option2}
                required
                onChange={(e) => {
                  handleOption2Change(e);
                }}
              />
            </section>
            <section>
              <label>Opção 3:</label>
              <br />
              <input
                type="text"
                value={option3}
                required
                onChange={(e) => {
                  handleOption3Change(e);
                }}
              />
            </section>
          </div>
          <button type="submit" className="buttonVote">
            POSTAR ENQUETE
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardRegisterPoll;
