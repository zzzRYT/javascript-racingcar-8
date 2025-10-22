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
    for (let i = 0; i < this.getRound(); i++) {
      this.getCars().forEach((car) => {
        this.playRound(car);
      });
    }
  }

  playRound(car) {
    car.setMove();
    this.callView(car.getName(), car.getMove());
  }

  callView(name, move) {
    this.getView().displayRound(name, move);
  }
}
