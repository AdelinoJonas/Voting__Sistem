import "./style.css";
import React, { useState, useEffect } from "react";
import FullPollCard from "../FullPollCard";

const polls = [
  {
    id: 1,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    options: [
      {
        optionDescription: "Alternativa A",
        totalVotes: 0,
      },
      {
        optionDescription: "Alternativa B",
        totalVotes: 0,
      },
      {
        optionDescription: "Alternativa C",
        totalVotes: 0,
      },
    ],
  },
  {
    id: 2,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "jafijdfodjso?",
    title: "Acertividade",
    options: [
      {
        optionDescription: "Alternativa A",
        totalVotes: 0,
      },
      {
        optionDescription: "Alternativa B",
        totalVotes: 0,
      },
      {
        optionDescription: "Alternativa C",
        totalVotes: 0,
      },
    ],
  },
  {
    id: 3,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "lorem ipsum ?",
    title: "Acertividade",
    options: [
      {
        optionDescription: "Alternativa A",
        totalVotes: 0,
      },
      {
        optionDescription: "Alternativa B",
        totalVotes: 0,
      },
      {
        optionDescription: "Alternativa C",
        totalVotes: 0,
      },
    ],
  },
];

function Card({pollsList}) {
  const [openModal, setOpenModal] = useState(false);
  // const [dataGet, setDataGet] = useState();

  // console.log(pollsList);
  // console.log(pollsList);
  // useEffect(() => {
  //     handleGetPolls();
  // }, []);

  // async function handleGetPolls() {
  //   const response = await fetch("http://localhost:80/api/polls", {
  //     method: "GET",
  //   });

  //   const data = await response.json();
  //   console.log({dataGet:data});

  //   setDataGet({...data});
  // }

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log(openModal);
  };

  // async function handleGetPolls() {
  //   const response = await fetch("http://localhost:80/api/polls", {
  //     method: "GET",
  //   });

  //   const data = await response.json();
  //   setPollsList(data);
  // }

  console.log(pollsList);
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
        <FullPollCard setOpenModal={setOpenModal} openModal={openModal} />
      )}
    </>
  );
}
export default Card;
