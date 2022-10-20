import React, { useState } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";
import InputMask from "react-input-mask";

function CardRegisterPoll({ setOpenModal, setCurrentPoll, currentPoll }) {
  const defaltValuesForm = {
    registerDate: "",
    startDate: "",
    endDate: "",
    questionDescription: "",
    title: "",
    options: [
      {
        optionDescription: "",
        totalVotes: 0,
      },
      {
        optionDescription: "",
        totalVotes: 0,
      },
      {
        optionDescription: "",
        totalVotes: 0,
      },
    ],
  };

  const [formData, setFormData] = useState(defaltValuesForm);

  async function registerPoll(body) {
    return await fetch("http://localhost:80/api/poll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  const data = formData;

  async function handleSubmit(e) {
    if (
      !data.startDate &&
      !data.endDate &&
      !data.questionDescription &&
      !data.title &&
      !data.options.optionDescription &&
      !data.options.totalVotes &&
      !data.options.totalVotes
    ) {
      alert("Totos os campos são obrigatórios!");
    } else {
      alert("Enquete cadastrada com Sucesso!");
    }

    const body = {
      registerDate: e.target.value,
      startDate: e.target.value,
      endDate: e.target.value,
      questionDescription: e.target.value,
      title: e.target.value,
      options: [
        {
          optionDescription: e.target.value,
          totalVotes: e.target.value,
        },
        {
          optionDescription: e.target.value,
          totalVotes: e.target.value,
        },
        {
          optionDescription: e.target.value,
          totalVotes: e.target.value,
        },
      ],
    };

    e.preventDefault();

    await registerPoll(body);
    setOpenModal(false);
  }

  const handleDataChange = (e) => {
    setFormData(e.target.value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
                    onChange={(e) => handleDataChange(e)}
                  />
                </section>
                <section>
                  <label>Data de Término: </label>
                  <input
                    id="endDate"
                    className="spanDateRegister"
                    type="text"
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
                  id="title"
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
                value={data.options[0]}
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
                value={data.options[1]}
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
                value={data.options[2]}
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
