import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import CardRegisterPoll from "../../components/CardRegisterPoll";
// import { UserContext } from "../../contexts/userContext";
import "./style.css";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  const [polls, setPolls] = useState([]);
  console.log(polls);
  // useEffect(() => {
  //   async function loadPollData() {
  //     const response = await fetch("http://localhost:3000/api/polls", {
  //       method: "GET",
  //     });
  //     const { results } = await response.json();
  //     setPolls(results);
  //     console.log(response);
  //   }
  //   loadPollData();
  // }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="container-home">
      <div className="headerHome">
        <button className="registerPoll" onClick={handleOpenModal}>
          CRIAR ENQUETE
        </button>
      </div>
      {openModal && <CardRegisterPoll setOpenModal={setOpenModal} openModal = {setOpenModal}/>}
      <section className="section-polls">
        <div className="cardPoll">
          {/*{polls.map((poll) => (
          <Card 
            key={poll.id}
            registerDate={poll.registerDate} 
            startDate={poll.startDate} 
            endDate={poll.endDate} 
            questionDescription={poll.questionDescription} 
            title={poll.title}
          />
        ))} */}
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Home;
