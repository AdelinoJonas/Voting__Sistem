import { useEffect, useState } from "react";
import Card from "../../components/Card";
import "./style.css";

function Home() {
  const [polls, setPolls] = useState([]);
  console.log(polls);
  useEffect(() => {
    async function loadPollData() {
      const response = await fetch("http://localhost:3000/api/polls", {
        method: "GET",
      });
      const { results } = await response.json();
      setPolls(results);
      console.log(response);
    }
    loadPollData();
  }, []);

  return (
    <div className="container-home">
      <section className="section-polls">
        <div className="cardpoll">
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
