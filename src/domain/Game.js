import { Car } from './Car.js';
import { View } from './View.js';

import { SEPARATOR } from '../../constants.js';

export class Game {
  constructor() {
    this.view = new View();
    this.cars = [];
    this.round = 0;
    this.winner = [];
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

  start() {
    this.view.displayResult();
    for (let i = 0; i < this.getRound(); i++) {
      this.playRound(this.getCars());
    }
    this.view.displayWinners(['pobi']);
  }

  playRound(cars) {
    cars.forEach((car) => {
      car.setMove();
    });
    this.view.displayRound(cars);
  }
}
