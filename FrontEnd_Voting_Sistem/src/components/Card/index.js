import "./style.css";
import {useState} from 'react';
import FullPollCard from "../FullPollCard";

function Card({
  registerDate,
  startDate,
  endDate,
  questionDescription,
  title,
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    // <div className="cardContent">
    //   <div className="container-title">
    //     <div className="titleRegister">
    //       <h1>{title}</h1>
    //       <span className="spanDate">{registerDate}</span>
    //     </div>
    //     <div className="shedule">
    //       <span className="spanDate">{startDate}</span>
    //       <span className="spanDate">{endDate}</span>
    //     </div>
    //   </div>
    //   <div className="description">
    //     <h2 className="textDescription">{questionDescription}</h2>
    //   </div>
    // </div>
    <>
      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonOpen" onClick={handleOpenModal}>ABRIR</button>
      </div>
      {openModal && <FullPollCard setOpenModal = {setOpenModal}/>}

      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonVote">ABRIR</button>
      </div>
      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonVote">ABRIR</button>
      </div>
      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonVote">ABRIR</button>
      </div>
      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonVote">ABRIR</button>
      </div>
      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonVote">ABRIR</button>
      </div>
      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonVote">ABRIR</button>
      </div>
      <div className="cardContent">
        <div className="container-title">
          <div className="titleRegister">
            <div className="createdRegister">
              <h3>Criado em:</h3>
              <h2>17/10/2022</h2>
            </div>
            <h1>Positividade</h1>
          </div>
          <div className="shedule">
            <section>
              <h3>Data de início:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
            <section>
              <h3>Data de Término:</h3>
              <h2 className="spanDate">17/10/2022</h2>
            </section>
          </div>
        </div>
        <div className="showdescription">
          <h2 className="textDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vitae magni omnis placeat vero aut quas quibusdam officiis cupiditate ut, itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h2>
        </div>
        <div className="optionsContainer">
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid.</h1>
            <h2> (12 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (3 votos)</h2>
          </section>
          <section>
            <h1>itaque odio enim temporibus eos? Cumque earum inventore nobis aliquid. </h1>
            <h2> (4 votos)</h2>
          </section>
        </div>
        <button className="buttonVote">ABRIR</button>
      </div>
    </>
  );
}
export default Card;
