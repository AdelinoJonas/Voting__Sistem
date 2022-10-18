import "./style.css";
import React, { useState } from "react";
import FullPollCard from "../FullPollCard";
// import { UserContext } from "../../contexts/userContext";
// import Home from "../../pages/Home";

const polls = [
  {
    id: 1,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    option1: "SIM",
    option2: "NÃO",
    option3: "TALVEZ",
    votesOption1: "12",
    votesOption2: "3",
    votesOption3: "4",
  },
  {
    id: 2,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "o Jonas vai ser contratado?",
    title: "Positividade",
    option1: "SIM",
    option2: "NÃO",
    option3: "TALVEZ",
    votesOption1: "12",
    votesOption2: "3",
    votesOption3: "4",
  },
  {
    id: 3,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.?",
    title: "Acertividade",
    option1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
    option2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
    option3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
    votesOption1: "12",
    votesOption2: "3",
    votesOption3: "4",
  },
  {
    id: 4,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.?",
    title: "Acertividade",
    option1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus!",
    option2:
      "Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
    option3:
      "Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
    votesOption1: "12",
    votesOption2: "3",
    votesOption3: "4",
  },
  {
    id: 5,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    option1: "SIM",
    option2: "NÃO",
    option3: "TALVEZ",
    votesOption1: "12",
    votesOption2: "3",
    votesOption3: "4",
  },
  {
    id: 6,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    option1: "SIM",
    option2: "NÃO",
    option3: "TALVEZ",
    votesOption1: "12",
    votesOption2: "3",
    votesOption3: "4",
  },
  {
    id: 7,
    registerDate: "2017-8-16",
    startDate: "2017-8-16",
    endDate: "2017-8-16",
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    option1: "SIM",
    option2: "NÃO",
    option3: "TALVEZ",
    votesOption1: "12",
    votesOption2: "3",
    votesOption3: "4",
  },
];

function Card() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log(openModal);
  };
  return (
    <>
      {polls.map((poll, index) => {
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
            <div className="optionsContainer">
              <section>
                <h1>{poll.option1}</h1>
                <h2> ({poll.votesOption1})</h2>
              </section>
              <section>
                <h1>{poll.option2}</h1>
                <h2> ({poll.votesOption1})</h2>
              </section>
              <section>
                <h1>{poll.option3}</h1>
                <h2> ({poll.votesOption1})</h2>
              </section>
            </div>
            <button className="buttonOpen" onClick={handleOpenModal}>
              ABRIR
            </button>
          </div>
        );
      })}
      {openModal && <FullPollCard setOpenModal={setOpenModal} openModal={openModal}/>}
    </>
  );
}
export default Card;
