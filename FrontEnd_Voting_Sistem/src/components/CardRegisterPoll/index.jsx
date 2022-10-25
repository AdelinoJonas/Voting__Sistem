import React, { useState, useEffect } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";

function CardRegisterPoll({ setOpenModal, setReload }) {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    form[e.target.id] = e.target.value;
    setForm(form);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  async function registerPoll(body) {
    return await fetch("http://localhost:80/api/poll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.startDate &&
      !form.endDate &&
      !form.questionDescription &&
      !form.title &&
      !form.option1 &&
      !form.option2 &&
      !form.option3
    ) {
      alert("Deve ter no mínimo 3 opções!");
      alert("Totos os campos são obrigatórios!");
    }

    const body = {
      startDate: form.startDate,
      endDate: form.endDate,
      title: form.title,
      questionDescription: form.questionDescription,
      options: [form.option1, form.option2, form.option3],
    }

    await registerPoll(body);
    console.log(body);
    alert("Enquete cadastrada com sucesso!");
    handleCloseModal()
    setReload(true);
  }

  return (
    <div className="backgroundRegister">
      <div className="registerContent">
        <form onSubmit={handleSubmit}>
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
                    value={form.startDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => handleForm(e)}
                  />
                </section>
                <section>
                  <label>Data de Término: </label>
                  <input
                    id="endDate"
                    className="spanDateRegister"
                    type="date"
                    value={form.endDate}
                    required
                    placeholder="DD/MM/AAAA"
                    onChange={(e) => handleForm(e)}
                  />
                </section>
              </div>
              <div className="centerTitle">
                <label>Título da enquete: </label>
                <input
                  id="title"
                  type="text"
                  value={form.title}
                  required
                  placeholder="TÍTULO"
                  onChange={(e) => handleForm(e)}
                />
              </div>
            </div>
          </div>
          <div className="showDescriptionRegister">
            <label>Descreva a enquete:</label>
            <textarea
              id="questionDescription"
              type="text"
              value={form.questionDescription}
              required
              placeholder="Descrição da Enquete."
              onChange={(e) => handleForm(e)}
            />
          </div>
          <div className="optionsContainerRegister">
            <section>
              <label>Opção 1:</label>
              <br />
              <input
                id="option1"
                type="text"
                value={form.option1}
                required
                placeholder="Descrição opção 1"
                onChange={(e) => handleForm(e)}
              />
            </section>
            <section>
              <label>Opção 2:</label>
              <br />
              <input
                id="option2"
                type="text"
                value={form.option2}
                required
                placeholder="Descrição opção 2"
                onChange={(e) => handleForm(e)}
              />
            </section>
            <section>
              <label>Opção 3:</label>
              <br />
              <input
                id="option3"
                type="text"
                value={form.option3}
                required
                placeholder="Descrição opção 3"
                onChange={(e) => handleForm(e)}
              />
            </section>
          </div>
          <button type="submit" className="buttonRegister">
            POSTAR ENQUETE
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardRegisterPoll;