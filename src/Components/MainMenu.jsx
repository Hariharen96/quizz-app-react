import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <button
        className="start"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
