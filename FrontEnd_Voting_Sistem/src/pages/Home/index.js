import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import CardRegisterPoll from "../../components/CardRegisterPoll";
import "./style.css";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [dataPoll, setDataPoll] = useState([]);
  const [currentPoll, setCurrentPoll] = useState(false);
  const [reload, setReload] = useState(false);

  console.log(dataPoll);

  useEffect(() => {
    handleLoadPolls();
  }, [reload]);

  useEffect(() => {
    if (currentPoll) {
      return setOpenModal(true);
    }
  }, [currentPoll]);

  useEffect(() => {
    if (!openModal) {
      handleLoadPolls();
    }

    if (!openModal && currentPoll) {
      setCurrentPoll(false);
    }
  }, [openModal, currentPoll]);

  const handleOrderPoll = (newPoll) => {
    setDataPoll(newPoll);
  };

  async function handleLoadPolls() {
    const response = await fetch("http://localhost:80/api/polls", {
      method: "GET",
    });

    const dataApi = await response.json();
    setDataPoll(dataApi);
  }

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
      {openModal && (
        <CardRegisterPoll
          setOpenModal={setOpenModal}
          openModal={setOpenModal}
        />
      )}
      <section className="section-polls">
        <div className="cardPoll">
          <Card
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
