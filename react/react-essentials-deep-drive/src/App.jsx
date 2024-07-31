import { useState } from 'react';

import {
  INIT_GAME_BOARD,
  INIT_PLAYERS,
  WINNING_COMBINATIONS,
} from './constants';

import Player from './components/Player';
import GameBroad from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbols =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbols =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbols =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbols &&
      firstSquareSymbols === secondSquareSymbols &&
      firstSquareSymbols === thirdSquareSymbols
    ) {
      winner = players[firstSquareSymbols];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INIT_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(INIT_PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function selectSquareHandler(iRow, iCol) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: iRow, col: iCol }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function onRestartHandler() {
    setGameTurns([]);
  }

  function renamePlayerHandler(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={INIT_PLAYERS.X}
            symbol={'X'}
            isActive={activePlayer === 'X'}
            onChangeName={renamePlayerHandler}
          />
          <Player
            initialName={INIT_PLAYERS.O}
            symbol={'O'}
            isActive={activePlayer === 'O'}
            onChangeName={renamePlayerHandler}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={onRestartHandler} />
        )}
        <GameBroad onSelectSquare={selectSquareHandler} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
