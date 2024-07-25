var playerOneMoveOneType;
var playerOneMoveTwoType;
var playerOneMoveThreeType;
var playerTwoMoveOneType;
var playerTwoMoveTwoType;
var playerTwoMoveThreeType;
var playerOneMoveOneValue;
var playerOneMoveTwoValue;
var playerOneMoveThreeValue;
var playerTwoMoveOneValue;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeValue;

function validMoves(move) {
  const moves = ["rock", "paper", "scissors"];

  if (moves.includes(move)) {
    return true;
  }

  return false;
}

function validValues(value) {
  return value !== undefined && value >= 1 && value <= 99;
}

function setPlayerMoves(name, move1, value1, move2, value2, move3, value3) {
  if (name === "Player One") {
    if (
      !validMoves(move1) ||
      !validValues(value1) ||
      !validMoves(move2) ||
      !validValues(value2) ||
      !validMoves(move3) ||
      !validValues(value3) ||
      value1 + value2 + value3 > 99
    ) {
      return (
        (playerOneMoveOneType = undefined),
        (playerOneMoveOneValue = undefined),
        (playerOneMoveTwoType = undefined),
        (playerOneMoveTwoValue = undefined),
        (playerOneMoveThreeType = undefined),
        (playerOneMoveThreeValue = undefined)
      );
    }

    playerOneMoveOneType = move1;
    playerOneMoveOneValue = value1;
    playerOneMoveTwoType = move2;
    playerOneMoveTwoValue = value2;
    playerOneMoveThreeType = move3;
    playerOneMoveThreeValue = value3;
  }

  if (name === "Player Two") {
    if (
      !validMoves(move1) ||
      !validValues(value1) ||
      !validMoves(move2) ||
      !validValues(value2) ||
      !validMoves(move3) ||
      !validValues(value3) ||
      value1 + value2 + value3 > 99
    ) {
      return (
        (playerTwoMoveOneType = undefined),
        (playerTwoMoveOneValue = undefined),
        (playerTwoMoveTwoType = undefined),
        (playerTwoMoveTwoValue = undefined),
        (playerTwoMoveThreeType = undefined),
        (playerTwoMoveThreeValue = undefined)
      );
    }

    playerTwoMoveOneType = move1;
    playerTwoMoveOneValue = value1;
    playerTwoMoveTwoType = move2;
    playerTwoMoveTwoValue = value2;
    playerTwoMoveThreeType = move3;
    playerTwoMoveThreeValue = value3;
  }
}
