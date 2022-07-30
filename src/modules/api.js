/* eslint-disable linebreak-style */
import showTopPlayers from './showTopPlayers.js';

export const displayData = (players, playerDiv) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267ade3/scores')
    .then((response) => response.json())
    .then((json) => {
      players = json.result;
      showTopPlayers(players, playerDiv);
    });
};

export const newGame = () => {
  const obj = {
    name: 'Kashmir Champion League',
  };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267ade3/scores', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

export const addPlayerScore = async (name, score) => {
  const obj = {
    user: name.value,
    score: score.value,
  };
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267ade3/scores', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.result;
};