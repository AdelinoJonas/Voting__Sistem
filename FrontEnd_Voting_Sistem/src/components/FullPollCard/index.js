import React from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";

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
  //   {
  //     id: 2,
  //     registerDate: "2017-8-16",
  //     startDate: "2017-8-16",
  //     endDate: "2017-8-16",
  //     questionDescription: "o Jonas vai ser contratado?",
  //     title: "Positividade",
  //     option1: "SIM",
  //     option2: "NÃO",
  //     option3: "TALVEZ",
  //     votesOption1: "12",
  //     votesOption2: "3",
  //     votesOption3: "4",
  //   },
  //   {
  //     id: 3,
  //     registerDate: "2017-8-16",
  //     startDate: "2017-8-16",
  //     endDate: "2017-8-16",
  //     questionDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.?",
  //     title: "Acertividade",
  //     option1:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
  //     option2:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
  //     option3:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
  //     votesOption1: "12",
  //     votesOption2: "3",
  //     votesOption3: "4",
  //   },
  //   {
  //     id: 4,
  //     registerDate: "2017-8-16",
  //     startDate: "2017-8-16",
  //     endDate: "2017-8-16",
  //     questionDescription:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.?",
  //     title: "Acertividade",
  //     option1:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium temporibus!",
  //     option2:
  //       "Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
  //     option3:
  //       "Harum, praesentium temporibus! Officia reiciendis non quisquam! Repudiandae animi nisi quo enim.",
  //     votesOption1: "12",
  //     votesOption2: "3",
  //     votesOption3: "4",
  //   },
  //   {
  //     id: 5,
  //     registerDate: "2017-8-16",
  //     startDate: "2017-8-16",
  //     endDate: "2017-8-16",
  //     questionDescription: "O projeto está ficando bom?",
  //     title: "Acertividade",
  //     option1: "SIM",
  //     option2: "NÃO",
  //     option3: "TALVEZ",
  //     votesOption1: "12",
  //     votesOption2: "3",
  //     votesOption3: "4",
  //   },
  //   {
  //     id: 6,
  //     registerDate: "2017-8-16",
  //     startDate: "2017-8-16",
  //     endDate: "2017-8-16",
  //     questionDescription: "O projeto está ficando bom?",
  //     title: "Acertividade",
  //     option1: "SIM",
  //     option2: "NÃO",
  //     option3: "TALVEZ",
  //     votesOption1: "12",
  //     votesOption2: "3",
  //     votesOption3: "4",
  //   },
  //   {
  //     id: 7,
  //     registerDate: "2017-8-16",
  //     startDate: "2017-8-16",
  //     endDate: "2017-8-16",
  //     questionDescription: "O projeto está ficando bom?",
  //     title: "Acertividade",
  //     option1: "SIM",
  //     option2: "NÃO",
  //     option3: "TALVEZ",
  //     votesOption1: "12",
  //     votesOption2: "3",
  //     votesOption3: "4",
  //   },
];

function FullPollCard({ openModal, setOpenModal }) {
  console.log(polls);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {polls.map((poll, index) => {
        return (
          <div className="backgroundModal" key={index}>
            <div className="modalContent">
              <div className="container-titleModal">
                <div className="titleRegisterModal">
                  <img
                    src={closeIcon}
                    className="closeButton"
                    alt="close modal"
                    onClick={handleCloseModal}
                  />
                  <div className="deleteBox">
                    <button className="delete">EXCLUIR</button>
                  </div>
                  <div className="createdRegisterModal">
                    <h3> Criado em: </h3> <h2>{poll.registerDate}</h2>
                  </div>
                </div>
                <div className="sheduleModal">
                  <section>
                    <h3> Data de início: </h3>
                    <h2 className="spanDateModal">{poll.startDate}</h2>
                  </section>
                  <section>
                    <h3> Data de Término: </h3>
                    <h2 className="spanDateModal">{poll.startDate}</h2>
                  </section>
                </div>
                <h1>{poll.title}</h1>
              </div>
              <div className="showdescriptionModal">
                <h2 className="textDescriptionModal">
                  {poll.questionDescription}
                </h2>
              </div>
              <div className="optionsContainerModal">
                <section>
                  <h1>{poll.option1}</h1>
                  <h2> ({poll.votesOption1}) </h2>
                </section>
                <section>
                  <h1>{poll.option2}</h1>
                  <h2> ({poll.votesOption1}) </h2>
                </section>
                <section>
                  <h1>{poll.option3}</h1>
                  <h2> ({poll.votesOption1}) </h2>
                </section>
              </div>
              <button className="buttonVote"> VOTAR </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FullPollCard;
