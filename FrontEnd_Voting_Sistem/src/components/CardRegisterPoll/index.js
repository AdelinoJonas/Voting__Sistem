import React, { useState } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";

function CardRegisterPoll({ openModal, setOpenModal }) {
  const [startData, setStartData] = useState({
    startDate: "",
    endDate: "",
    questionDescription: "",
    title: "",
    option1: "",
    option2: "",
    option3: "",
  });

  const data = startData;

  const handleDataChange = (e) => {
    setStartData(e.target.data);
  };

  const handleSubmit = (e) => {
    if (
      !data.startDate &&
      !data.endDate &&
      !data.questionDescription &&
      !data.title &&
      !data.option1 &&
      !data.option2 &&
      !data.option3
    ) {
      alert("Totos os campos são obrigatórios!");
    } else {
      alert("Enquete cadastrada com Sucesso!");
    }
    e.preventDefault();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    console.log(openModal);
  };

  return (
    <div className="backgroundRegister">
      <div className="registerContent">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="container-titleRegister">
            <div className="titleRegisterRegister">
              <img
                src={closeIcon}
                className="closeButton"
                alt="close modal"
                onClick={handleCloseModal}
              />
              <div className="postPut">
                <button className="post">CADASTRAR</button>
              </div>
              <div className="sheduleRegister">
                <section>
                  <label>Data de início:</label>
                  <input
                    id="startDate"
                    className="spanDateRegister"
                    type="date"
                    value={data.startDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => {
                      handleDataChange(e);
                    }}
                  />
                </section>
                <section>
                  <label>Data de Término: </label>
                  <input
                    className="spanDateRegister"
                    type="date"
                    value={data.endDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => {
                      handleDataChange(e);
                    }}
                  />
                </section>
              </div>
              <div className="centerTitle">
                <label>Título da enquete: </label>
                <input
                  type="text"
                  value={data.title}
                  required
                  placeholder="TÍTULO"
                  onChange={(e) => {
                    handleDataChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="showDescriptionRegister">
            <label>Descreva a enquete:</label>
            <textarea
              type="text"
              value={data.questionDescription}
              required
              placeholder="Descrição da Enquete."
              onChange={(e) => {
                handleDataChange(e);
              }}
            />
          </div>
          <div className="optionsContainerRegister">
            <section>
              <label>Opção 1:</label>
              <br />
              <input
                type="text"
                value={data.option1}
                required
                placeholder="Descrição opção 1"
                onChange={(e) => {
                  handleDataChange(e);
                }}
              />
            </section>
            <section>
              <label>Opção 2:</label>
              <br />
              <input
                type="text"
                value={data.option2}
                required
                placeholder="Descrição opção 2"
                onChange={(e) => {
                  handleDataChange(e);
                }}
              />
            </section>
            <section>
              <label>Opção 3:</label>
              <br />
              <input
                type="text"
                value={data.option3}
                required
                placeholder="Descrição opção 3"
                onChange={(e) => {
                  handleDataChange(e);
                }}
              />
            </section>
          </div>
        </form>
        <button type="submit" className="buttonRegister">
          POSTAR ENQUETE
        </button>
      </div>
    </div>
  );
}

export default CardRegisterPoll;
