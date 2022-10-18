import React, { useState } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";
import deletePoll from "../../assets/delete.svg";

const defaultValuesForm = {
  startDate: "",
  endDate: "",
  questionDescription: "",
  title: "",
  option1: "",
  option2: "",
  option3: "",
};

function CardRegisterPoll({ openModal, setOpenModal }) {
  const handleCloseModal = () => {
    setOpenModal(false);
    console.log(openModal);
  };
  const [activeButton, setActiveButton] = useState("register");
  const [data, setData] = useState(defaultValuesForm);
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
                <button className="put">EDITAR</button>
                <button className="delete">EXCLUIR</button>
              </div>
              <div className="sheduleRegister">
                <section>
                  <label>Data de início:</label>
                  <input
                    className="spanDateRegister"
                    type="text"
                    value={startDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => {
                      handleStartChange(e);
                    }}
                  />
                </section>
                <section>
                  <label>Data de Término: </label>
                  <input
                    className="spanDateRegister"
                    type="text"
                    value={endDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => {
                      handleEndChange(e);
                    }}
                  />
                </section>
              </div>
              <div className="centerTitle">
                <label>Título da enquete: </label>
                <input
                  type="text"
                  value={title}
                  required
                  placeholder="TÍTULO"
                  onChange={(e) => {
                    handleTitleChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="showDescriptionRegister">
            <label>Descreva a enquete:</label>
            <textarea
              type="text"
              value={questionDescription}
              required
              placeholder="Descrição da Enquete."
              onChange={(e) => {
                handleDescriptionChange(e);
              }}
            />
          </div>
          <div className="optionsContainerRegister">
            <section>
              <label>Opção 1:</label>
              <br />
              <input
                type="text"
                value={option1}
                required
                placeholder="Descrição opção 1"
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
                placeholder="Descrição opção 2"
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
                placeholder="Descrição opção 3"
                onChange={(e) => {
                  handleOption3Change(e);
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
