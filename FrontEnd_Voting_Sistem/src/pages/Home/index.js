import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import CardRegisterPoll from "../../components/CardRegisterPoll";
import "./style.css";


function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState()

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
            data={data}
            setData={setData}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
