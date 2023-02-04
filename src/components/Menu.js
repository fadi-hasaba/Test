import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
	const { gameState, setGameState, setUserName } =
		useContext(GameStateContext);
	return (
		<div className="Menu">
			<label>Enter Your Name:</label>
			<input
				type="text"
				placeholder="Ex. John Smith"
				onChange={(event) => {
					setUserName(event.target.value);
					console.log(gameState);
					console.log(setGameState);
				}}
			/>
			<button
				onClick={() => {
					setGameState("playing");
					console.log(setGameState);
				}}
			>
				Start Quiz
			</button>
		</div>
	);
}

export default Menu;
