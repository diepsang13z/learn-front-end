export default function GameBroad({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, iRow) => (
        <li key={iRow}>
          <ol>
            {row.map((playerSymbol, iCol) => (
              <li key={iCol}>
                <button
                  onClick={() => onSelectSquare(iRow, iCol)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
