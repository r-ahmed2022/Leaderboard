// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { displayData, addPlayerScore } from './modules/api.js';

const playerDiv = document.querySelector('.list');
const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('score-form');
const name = document.getElementById('name');
const score = document.getElementById('score');
let players;

window.addEventListener('load', () => {
  displayData(players, playerDiv);

  refreshBtn.addEventListener('click', () => {
    displayData(players, playerDiv);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await addPlayerScore(name, score);
    displayData(players, playerDiv);
    name.value = '';
    score.value = '';
  });
});