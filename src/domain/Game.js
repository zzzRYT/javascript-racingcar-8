import { Car } from './Car.js';
import { View } from './View.js';

import { SEPARATOR } from '../../constants.js';

export class Game {
  constructor() {
    this.cars = [];
    this.round = 0;
    this.view = new View();
  }

  getCars() {
    return this.cars;
  }

  getRound() {
    return this.round;
  }

  getView() {
    return this.view;
  }

  setting(carNames, round) {
    this.cars = carNames.split(SEPARATOR).map((name) => new Car(name));
    this.round = Number(round);
  }

  start() {
    this.getView().displayResult();
    for (let i = 0; i < this.getRound(); i++) {
      this.playRound(this.getCars());
    }
    this.getView().displayWinners(['pobi']);
  }

  playRound(cars) {
    cars.forEach((car) => {
      car.setMove();
    });
    this.getView().displayRound(cars);
  }
}
