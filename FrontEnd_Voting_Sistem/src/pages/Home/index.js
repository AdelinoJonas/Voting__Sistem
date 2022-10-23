import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import CardRegisterPoll from "../../components/CardRegisterPoll";
import "./style.css";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [currentPoll, setCurrentPoll] = useState(false);
  const [pollsList, setPollsList] = useState([]);
  const [reload, setReload] = useState(false);

  console.log({ logState: pollsList });

  useEffect(() => {
    handleGetPolls();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  async function handleGetPolls() {
    const response = await fetch("http://localhost:80/api/polls", {
      method: "GET",
    });

    const data = await response.json();
    console.log({ patrivl: data });
    console.log("sdkdos");
    setPollsList(data.result);
  }
  return (
    <div className="container-home">
      <div className="headerHome">
        <button className="registerPoll" onClick={handleOpenModal}>
          CRIAR ENQUETE
        </button>
      </div>
      {openModal && (
        <CardRegisterPoll
          setOpenModal={setOpenModal}
          openModal={setOpenModal}
          currentPoll={currentPoll}
          setCurrentPoll={setCurrentPoll}
          pollsList={pollsList}
          setPollsList={setPollsList}
        />
      )}
      <section className="section-polls">
        <div className="cardPoll">
          <Card
            openModal={openModal}
            setOpenModal={setOpenModal}
            pollsList={pollsList}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
