import React, { useState, useEffect } from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";

function CardRegisterPoll({ setOpenModal }) {
  const defaultQuestionValues = {
    startDate: "",
    endDate: "",
    title: "",
    questionDescription: ""
  };
  const defaultOptionValues = {
    options: [
      "",
      "",
      "",
    ],
  };

  const [form, setForm] = useState([defaultQuestionValues]);
  const [optionsArray, setOptionsArray] = useState(defaultOptionValues);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  
  const handleForm = () => {
    console.log(form.startDate);
    setForm(form);
  };
  const handleOption1 = (e) => {
    setOptionsArray(option1);
  };
  const handleOption2 = (e) => {
    setOption2({...option2});
  };
  const handleOption3 = (e) => {
    setOption3({...option3});
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !form.startDate &&
      !form.endDate &&
      !form.questionDescription &&
      !form.title &&
      !optionsArray.length < 3
    ) {
      alert("Deve ter no mínimo 3 opções!");
      alert("Totos os campos são obrigatórios!");
    } else {
      alert("Enquete cadastrada com Sucesso!");
    }

    const body = {
          startDate: form.startDate,
          endDate: form.endDate,
          title: form.title,
          questionDescription: form.questionDescription,
          options: optionsArray,
        };

    console.log(form.startDate);

    setOptionsArray({option1,option2, option3})
    
    await registerPoll(body);
    handleCloseModal();
  }

  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  // const [title, setTitle] = useState("");
  // const [questionDescription, setQuestionDescription] = useState("");
  // // const [optionsArray, setOptionsArray] = useState([]);
  // const [option1, setOption1] = useState("");


  // console.log(startDate, endDate, title, questionDescription, option1);

  // const handleStartDate = (e) => {
  //   setStartDate(e.target.value);
  // };

  // const handleEndDate = (e) => {
  //   setEndDate(e.target.value);
  // };

  // const handleTitle = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleQuestionDescription = (e) => {
  //   setQuestionDescription(e.target.value);
  // };

  // const handleOption1 = (e) => {
  //   // console.log();
  //   setOption1(e.target.value);
  // };

  // async function registerPoll(body) {
  //   return await fetch("http://localhost:80/api/poll", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
  // }

  // async function handleSubmit(e) {
  //   if (
  //     !startDate &&
  //     !endDate &&
  //     !questionDescription &&
  //     !title &&
  //     !option1 
  //     // !option2 &&
  //     // !option3
  //   ) {
  //     alert("Deve ter no mínimo 3 opções!");
  //     alert("Totos os campos são obrigatórios!");
  //   } else {
  //     alert("Enquete cadastrada com Sucesso!");
  //   }

  //   const body = {
  //     startDate: startDate,
  //     endDate: endDate,
  //     title: title,
  //     questionDescription: questionDescription,
  //     options: [
  //        option1,
  //     ],
  //   };
  //   await registerPoll(body);
  //   e.preventDefault();
  //   console.log(body);
  // };
  
  return (
    <div className="backgroundRegister">
      <div className="registerContent">
        <form
          onSubmit={(e)=>{handleSubmit(e)}}
        >
          <div className="container-titleRegister">
            <div className="titleRegisterRegister">
              <img
                src={closeIcon}
                className="closeButton"
                alt="close modal"
                onClick={() => setOpenModal(false)}
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
                    onChange={()=>handleForm()}
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
                    onChange={()=>handleForm()}
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
                  onChange={()=>handleForm()}
                />
              </div>
            </div>
          </div>
          <div className="showDescriptionRegister">
            <label>Descreva a enquete:</label>
            <textarea
              type="text"
              value={form.questionDescription}
              required
              placeholder="Descrição da Enquete."
              onChange={()=>handleForm()}
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
                onChange={()=>handleOption1()}
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
                onChange={()=>handleOption2()}
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
                onChange={()=>handleOption3()}
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
