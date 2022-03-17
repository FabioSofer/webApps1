'use strict';

const dayjs = require('dayjs');
const sqlite = require('sqlite3');

function film(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = dayjs(date);
  this.score = score;
  this.laude = laude;

  this.toString = () => `${this.code} - ${this.name}: ${laude ? this.score + 'L' : this.score}`;
}