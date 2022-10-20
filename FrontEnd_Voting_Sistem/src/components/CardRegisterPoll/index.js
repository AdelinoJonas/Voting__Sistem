import React, { useState } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";
import InputMask from "react-input-mask";

function CardRegisterPoll({ openModal, setOpenModal }) {
  const [formRegisterPoll, setFormRegisterPoll] = useState({
    startDate: "",
    endDate: "",
    questionDescription: "",
    title: "",
    options: [
      {
        optionDescription1: "",
      },
      {
        optionDescription2: "",
      },
      {
        optionDescription3: "",
      },
    ],
  });

  const dataPoll = formRegisterPoll;

  const handleDataChange = (e, target) => {
    setFormRegisterPoll({ ...formRegisterPoll });
    console.log(formRegisterPoll.startDate);
  };

  async function registerTransaction(body) {
    return await fetch("http://localhost:80/api/poll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async function handleSubmit(e) {
    const [day, month, year] = formRegisterPoll.date.split("/");

    const selectedDate = new Date(`${month}/${day}/${year}`);
    const body = {
      // startDate: dataPoll.startDate,
      startDate: selectedDate,
      endDate: selectedDate,
      questionDescription: dataPoll.value,
      title: dataPoll.value,
      options: [
        {
          optionDescription1: dataPoll.value,
        },
        {
          optionDescription2: dataPoll.value,
        },
        {
          optionDescription3: dataPoll.value,
        },
      ],
    };

    // if(currentPoll){
    //     await updateCard(body);
    //     setOpenModal(false);

    //     return;
    // }

    await registerTransaction(body);
    if (
      !dataPoll.startDate &&
      !dataPoll.endDate &&
      !dataPoll.questionDescription &&
      !dataPoll.title &&
      !dataPoll.option1 &&
      !dataPoll.option2 &&
      !dataPoll.option3
    ) {
      alert("Totos os campos são obrigatórios!");
    } else {
      alert("Enquete cadastrada com Sucesso!");
    }
    e.preventDefault();
  }

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
                    value={dataPoll.startDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => {
                      handleDataChange((e) => handleDataChange(e.target.value));
                    }}
                  />
                  {/* <InputMask
                    mask="99/99/9999"
                    className="spanDateRegister"
                    name="date"
                    type="text"
                    value={dataPoll.startDate}
                    onChange={(e) => handleDataChange(e.target.value)}
                  /> */}
                </section>
                <section>
                  <label>Data de Término: </label>
                  <input
                    id="endDate"
                    className="spanDateRegister"
                    type="text"
                    value={dataPoll.endDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => {
                      handleDataChange(e.target);
                    }}
                  />
                </section>
              </div>
              <div className="centerTitle">
                <label>Título da enquete: </label>
                <input
                  id="title"
                  type="text"
                  value={dataPoll.title}
                  required
                  placeholder="TÍTULO"
                  onChange={(e) => {
                    handleDataChange(e.target);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="showDescriptionRegister">
            <label>Descreva a enquete:</label>
            <textarea
              type="text"
              value={dataPoll.questionDescription}
              required
              placeholder="Descrição da Enquete."
              onChange={(e) => {
                handleDataChange(e.target);
              }}
            />
          </div>
          <div className="optionsContainerRegister">
            <section>
              <label>Opção 1:</label>
              <br />
              <input
                type="text"
                value={dataPoll.options[0]}
                required
                placeholder="Descrição opção 1"
                onChange={(e) => {
                  handleDataChange(e.target);
                }}
              />
            </section>
            <section>
              <label>Opção 2:</label>
              <br />
              <input
                type="text"
                value={dataPoll.options[1]}
                required
                placeholder="Descrição opção 2"
                onChange={(e) => {
                  handleDataChange(e.target);
                }}
              />
            </section>
            <section>
              <label>Opção 3:</label>
              <br />
              <input
                type="text"
                value={dataPoll.options[2]}
                required
                placeholder="Descrição opção 3"
                onChange={(e) => {
                  handleDataChange(e.target);
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
