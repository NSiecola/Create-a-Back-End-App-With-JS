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
  return value !== undefined && value >= 1 && value <= 99 ? true : false;
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

const rules = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "paper", losesTo: "rock" },
};

function validNum(numero) {
  return numero >= 1 && numero <= 3 ? true : false;
}

function getRoundWinner(num) {
  if (validNum(num)) {
    if (
      num === 1 &&
      validMoves(playerOneMoveOneType) &&
      validMoves(playerTwoMoveOneType) &&
      validValues(playerOneMoveOneValue) &&
      validValues(playerTwoMoveOneValue)
    ) {
      if (playerOneMoveOneType === playerTwoMoveOneType) {
        if (playerOneMoveOneValue === playerTwoMoveOneValue) {
          return "Tie";
        }
        return playerOneMoveOneValue > playerTwoMoveOneValue
          ? "Player One"
          : "Player Two";
      }

      if (rules[playerOneMoveOneType].beats === playerTwoMoveOneType) {
        return "Player One";
      }

      return "Player Two";
    }

    if (
      num === 2 &&
      validMoves(playerOneMoveTwoType) &&
      validMoves(playerTwoMoveTwoType) &&
      validValues(playerOneMoveTwoValue) &&
      validValues(playerTwoMoveTwoValue)
    ) {
      if (playerOneMoveTwoType === playerTwoMoveTwoType) {
        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return "Tie";
        }
        return playerOneMoveTwoValue > playerTwoMoveTwoValue
          ? "Player One"
          : "Player Two";
      }

      if (rules[playerOneMoveTwoType].beats === playerTwoMoveTwoType) {
        return "Player One";
      }

      return "Player Two";
    }

    if (
      num === 3 &&
      validMoves(playerOneMoveThreeType) &&
      validMoves(playerTwoMoveThreeType) &&
      validValues(playerOneMoveThreeValue) &&
      validValues(playerTwoMoveThreeValue)
    ) {
      if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          return "Tie";
        }
        return playerOneMoveThreeValue > playerTwoMoveThreeValue
          ? "Player One"
          : "Player Two";
      }

      if (rules[playerOneMoveThreeType].beats === playerTwoMoveThreeType) {
        return "Player One";
      }

      return "Player Two";
    }
  }

  return null;
}

function getGameWinner() {
  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null;
  }

  let playerOneWins = 0;
  let playerTwoWins = 0;

  for (let round = 1; round <= 3; round++) {
    const roundWinner = getRoundWinner(round);

    if (roundWinner === "Player One") {
      playerOneWins++;
    } else if (roundWinner === "Player Two") {
      playerTwoWins++;
    }
  }

  if (playerOneWins > playerTwoWins) {
    return "Player One";
  } else if (playerTwoWins > playerOneWins) {
    return "Player Two";
  } else {
    return "Tie";
  }
}
