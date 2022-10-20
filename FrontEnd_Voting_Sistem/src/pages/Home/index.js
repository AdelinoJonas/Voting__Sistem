import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import CardRegisterPoll from "../../components/CardRegisterPoll";
import "./style.css";

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
        idOption: 1,
        optionDescription: "Alternativa A",
        totalVotes: 0,
      },
      {
        idOption: 2,
        optionDescription: "Alternativa B",
        totalVotes: 0,
      },
      {
        idOption: 3,
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
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    options: [
      {
        idOption: 1,
        optionDescription: "Alternativa A",
        totalVotes: 0,
      },
      {
        idOption: 2,
        optionDescription: "Alternativa B",
        totalVotes: 0,
      },
      {
        idOption: 3,
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
    questionDescription: "O projeto está ficando bom?",
    title: "Acertividade",
    options: [
      {
        idOption: 1,
        optionDescription: "Alternativa A",
        totalVotes: 0,
      },
      {
        idOption: 2,
        optionDescription: "Alternativa B",
        totalVotes: 0,
      },
      {
        idOption: 3,
        optionDescription: "Alternativa C",
        totalVotes: 0,
      },
    ],
  },
];

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [dataPoll, setDataPoll] = useState(polls);
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
          currentPoll = {currentPoll}
          setCurrentPoll = {setCurrentPoll}
        />
      )}
      <section className="section-polls">
        <div className="cardPoll">
          <Card
            openModal={openModal}
            setOpenModal={setOpenModal}
            dataPoll = {dataPoll}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
