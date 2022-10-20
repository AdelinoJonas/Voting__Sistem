import "./style.css";
import React, { useState } from "react";
import FullPollCard from "../FullPollCard";
// dataPoll={setDataPoll}
//             setDataPoll={setDataPoll}
//             setCurrentPoll={setCurrentPoll}
//             currentPoll={currentPoll}
//             reload={reload}
//             setReload={setReload}
//             handleOrderPoll={handleOrderPoll}
//             handleLoadPolls={handleLoadPolls}
function Card({
  dataPoll,
  setDataPoll,
  currentPoll,
  setCurrentPoll,
  reload,
  setReload,
  handleOrderPoll,
  handleLoadPolls,
}) {
  const [opacity, setOpacity] = useState(false);
  const [openModalFull, setOpenModalFull] = useState(false);

  const handleOpenModalFull = () => {
    setOpenModalFull(true);
    console.log(openModalFull);
  };

  return (
    <>
      {dataPoll.map((poll, index) => {
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
            <button className="buttonOpen" onClick={handleOpenModalFull}>
              ABRIR
            </button>
          </div>
        );
      })}
      {openModalFull && (
        <FullPollCard
          setOpenModalFull={setOpenModalFull}
          dataPoll={setDataPoll}
          setDataPoll={setDataPoll}
          setCurrentPoll={setCurrentPoll}
          currentPoll={currentPoll}
          reload={reload}
          setReload={setReload}
          handleOrderPoll={handleOrderPoll}
          handleLoadPolls={handleLoadPolls}
        />
      )}
    </>
  );
}
export default Card;
