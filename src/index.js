/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { refreshApiData, addEntry } from './modules/api.js';

const playerBox = document.querySelector('.list');
const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('score-form');
const name = document.getElementById('name');
const score = document.getElementById('score');
let players;

window.addEventListener('load', () => {
  refreshApiData(players, playerBox);
});

refreshBtn.addEventListener('click', () => {
  refreshApiData(players, playerBox);
});