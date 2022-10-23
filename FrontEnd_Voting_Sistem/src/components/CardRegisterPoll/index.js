import React, { useState, useEffect } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";

function CardRegisterPoll({ setOpenModal }) {
  const defaultValuesQuestion = {
    registerDate: "",
    startDate: "",
    endDate: "",
    questionDescription: "",
    title: "",
    options: [
      {
        optionDescription: "",
      },
      {
        optionDescription: "",
      },
      {
        optionDescription: "",
      },
    ],
  };

  const [formQuestion, setFormQuestion] = useState(defaultValuesQuestion);

  console.log(formQuestion);

  const handleDataChange = (e) => {
    setFormQuestion(formQuestion);
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

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      startDate: formQuestion.startDate,
      endDate: formQuestion.startDate,
      questionDescription: formQuestion.startDate,
      title: formQuestion.startDate
    }
      // options: [
      //   {
      //     optionDescription: newDataOptions.startDate,
      //   },
      //   {
      //     optionDescription: newDataOptions.startDate,
      //   },
      //   {
      //     optionDescription: newDataOptions.startDate,
      //   },
      // ],      
      
      //A PARTE DE BAIXO FAZ PARTE DO IF DO OPTIONS
      // !newData.options.optionDescription &&
      // newData.options < 3
  //   };

  if (!formQuestion.startDate &&
    !formQuestion.endDate &&
    !formQuestion.questionDescription &&
    !formQuestion.title
  ) {
    alert("Deve ter no minimo 3 opções!");
    alert("Totos os campos são obrigatórios!");
  } else {
    alert("Enquete cadastrada com Sucesso!");
  }
   
    await registerPoll(body);
    setOpenModal(false);
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
                    value={formQuestion.startDate}
                    required
                    placeholder="DD/MM/AAAA"
                    // onChange={(e) => handleDataChange(e.target)}
                  />
                </section>
                <section>
                  <label>Data de Término: </label>
                  <input
                    className="spanDateRegister"
                    type="date"
                    value={formQuestion.endDate}
                    required
                    placeholder="DD/MM/AAAA"
                    // onChange={(e) => handleDataChange(e.target)}
                  />
                </section>
              </div>
              <div className="centerTitle">
                <label>Título da enquete: </label>
                <input
                  type="text"
                  value={formQuestion.title}
                  required
                  placeholder="TÍTULO"
                  // onChange={(e) => handleDataChange(e.target)}
                />
              </div>
            </div>
          </div>
          <div className="showDescriptionRegister">
            <label>Descreva a enquete:</label>
            <textarea
              type="text"
              value={formQuestion.questionDescription}
              required
              placeholder="Descrição da Enquete."
              // onChange={(e) => handleDataChange(e.target)}
            />
          </div>
          <div className="optionsContainerRegister">
            <section>
              <label>Opção 1:</label>
              <br />
              <input
                type="text"
                // value={form.options[0]}
                required
                placeholder="Descrição opção 1"
                // onChange={(e) => handleDataChange(e.target)}
              />
            </section>
            <section>
              <label>Opção 2:</label>
              <br />
              <input
                type="text"
                // value={form.options[1]}
                required
                placeholder="Descrição opção 2"
                // onChange={(e) => handleDataChange(e.target)}
              />
            </section>
            <section>
              <label>Opção 3:</label>
              <br />
              <input
                type="text"
                // value={form.options[3]}
                required
                placeholder="Descrição opção 3"
                // onChange={(e) => handleDataChange(e.target)}
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
