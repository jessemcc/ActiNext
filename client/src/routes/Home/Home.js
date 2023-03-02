import "./Home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Home(props) {
  const [activities, setActivities] = useState(props.data);
  const [currentActivity, setCurrentActivity] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      const { data } = await axios.get("http://localhost:8080/activities");
      setActivities(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      console.log("random index is", randomIndex);
      const theActivity = data[randomIndex];
      setCurrentActivity(theActivity);
    };
    getActivities();
  }, []);

  function clickTest(e) {
    e.preventDefault();

    const randomIndex = Math.floor(Math.random() * activities.length);
    console.log("random index is", randomIndex);
    const theActivity = activities[randomIndex];
    setCurrentActivity(theActivity);
  }

  return (
    <section className="main">
      <section className="hero">
        <h1 className="hero__title">
          Welcome to <span className="actinext-title">ActiNext</span>
        </h1>
        <div className="hero__container">
        <img className="hero__image" src={currentActivity.image} alt="" />
        </div>
        <p className="hero__use">
          To use ActiNext, simply click on "Generate Activity" or select a type
          of activity you would like to engage in and then click "Generate
          Activity". All activities generated are free and fun.
        </p>
      </section>
      <section className="info">
        <button className="activity-button" onClick={clickTest}>
          Generate Activity
        </button>
        <p className="this-activity">
          Your random activity is:{" "}
          <span className="activity">{currentActivity.activity}</span>
        </p>
      </section>
    </section>
  );
}

export default Home;
