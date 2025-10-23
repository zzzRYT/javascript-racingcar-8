import { Car } from './Car.js';
import { View } from './View.js';

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

  playRound() {
    this.cars.forEach((car) => {
      car.setMove();
    });
    return this.cars;
  }

  getWinners() {
    const moveMax = this.#searchMax();
    const winners = [];
    this.cars.forEach((car) => {
      if (car.move === moveMax) {
        winners.push(car.name);
      }
    });
    return winners;
  }

  #searchMax() {
    const maxMoves = this.cars.map((car) => car.move);
    return Math.max(...maxMoves);
  }
}
