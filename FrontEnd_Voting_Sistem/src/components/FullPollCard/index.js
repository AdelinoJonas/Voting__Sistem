import "./style.css";
import closeIcon from "../../assets/close.svg";

function FullPollCard({setOpenModal}) {

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
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
            <div className="createdRegisterModal">
              <h3> Criado em: </h3> <h2> 17 / 10 / 2022 </h2>
            </div>
            <h1> Positividade </h1>
          </div>
          <div className="sheduleModal">
            <section>
              <h3> Data de início: </h3>
              <h2 className="spanDateModal"> 17 / 10 / 2022 </h2>
            </section>
            <section>
              <h3> Data de Término: </h3>
              <h2 className="spanDateModal"> 17 / 10 / 2022 </h2>
            </section>
          </div>
        </div>
        <div className="showdescriptionModal">
          <h2 className="textDescriptionModal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cum vitae
            magni omnis placeat vero aut quas quibusdam officiis cupiditate ut,
            itaque odio enim temporibus eos ? Cumque earum inventore nobis
            aliquid.
          </h2>
        </div>
        <div className="optionsContainerModal">
          <section>
            <h1>
              itaque odio enim temporibus eos ? Cumque earum inventore nobis
              aliquid.
            </h1>
            <h2> (12 votos) </h2>
          </section>
          <section>
            <h1>
              itaque odio enim temporibus eos ? Cumque earum inventore nobis
              aliquid.
            </h1>
            <h2> (3 votos) </h2>
          </section>
          <section>
            <h1>
              itaque odio enim temporibus eos ? Cumque earum inventore nobis
              aliquid.
            </h1>
            <h2> (4 votos) </h2>
          </section>
        </div>
        <button className="buttonVote"> VOTAR </button>
      </div>
    </div>
  );
}

export default FullPollCard;
