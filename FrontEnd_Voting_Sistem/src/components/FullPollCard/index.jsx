import React from "react";
import "./style.css";
import closeIcon from "../../assets/close.svg";
import { useState, useEffect} from "react";

function FullPollCard({ setOpenModal, setReload, pollById }) {

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [idItemDelete, setIdItemDelete] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [checked, setChecked] = useState(false);

  console.log('fullPollCard', checked, totalVotes);
  
  const handleChooseOption = () => {
    setChecked(true);
  };
    
  const handleVote = ()=>{
    let votes = checked ? totalVotes + 1 : totalVotes;
    setTotalVotes(votes);
    console.log('votes', votes);
  }

  async function handleDeleteItem() {
    await fetch(`http://localhost:80/api/poll/${idItemDelete}`, {
      method: "DELETE",
    });
    setIdItemDelete(null);
    setReload(true);
  }

  async function handlePostVote() {
    handleVote();
    await fetch(`http://localhost:80/api/option/2/vote`, {
      method: "PUT",
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await handlePostVote();

    // handleCloseModal();
  }

  return (
    <>
      {
        pollById && (
          <div className="backgroundModal">
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
                    <button className="put"> EDITAR </button>
                    <button
                      className="delete"
                      onClick={(e) =>
                        {handleDeleteItem(e)}
                      }
                    >
                      EXCLUIR
                    </button>
                  </div>
                  <div className="createdRegisterModal">
                    <h3> Criado em: </h3> <h2>{pollById.registerDate}</h2>
                  </div>
                </div>
                <div className="sheduleModal">
                  <section>
                    <h3> Data de início: </h3>
                    <h2 className="spanDateModal"> {pollById.startDate} </h2>
                  </section>
                  <section>
                    <h3> Data de Término: </h3>
                    <h2 className="spanDateModal"> {pollById.endDate} </h2>
                  </section>
                </div>
                <h1> {pollById.title} </h1>
              </div>
              <div className="showdescriptionModal">
                <h2 className="textDescriptionModal">
                  {pollById.questionDescription}
                </h2>
              </div>
              <div className="optionsContainerModal">
                {pollById.options.map( (e, id) => { return(
                  <section key={id}>
                    <input type="radio" id="vote" name="totalVotes" onChange={handleChooseOption}/>
                    <label htmlFor="vote"> {e.optionDescription} </label>
                    <h2> ({e.totalVotes}) </h2> 
                  </section>
                  )
                })}
              <button className="buttonVote" onClick={handleSubmit}> VOTAR </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default FullPollCard;
