import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="IMG_4996.jpeg" alt="muka profile" />;
}

function Intro() {
  return (
    <div className="intros">
      <h1>Mengke Liu</h1>
      <p>
        Proficient in HTML, CSS, and JavaScript, rejuvenates by practicing yoga
        and outdoor activities for a balanced lifestyle, indulges in culinary
        adventures, experimenting with diverse cuisines from around the world.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Python" emoji="👶" color="#F6EEC9" />
      <Skill skill="HTML+CSS" emoji="👍" color="#A1DD70" />
      <Skill skill="JavaScript" emoji="🦾" color="#FFB534" />
      <Skill skill="React" emoji="👌" color="#FF70AB" />
      <Skill skill="Node.js" emoji="🤚" color="#40A578" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span></span>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
