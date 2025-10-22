import { Car } from './Car.js';

import { SEPARATOR } from '../../constants.js';

export class Game {
  constructor() {
    this.cars = [];
    this.round = 0;
  }

  getCars() {
    return this.cars;
  }

  getRound() {
    return this.round;
  }

  setting(carNames, round) {
    this.cars = carNames.split(SEPARATOR).map((name) => new Car(name));
    this.round = Number(round);
  }

  playRound() {}
}
