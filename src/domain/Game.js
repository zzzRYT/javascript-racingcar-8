import { Car } from './Car.js';
import { View } from './View.js';

import { SEPARATOR } from '../../constants.js';

export class Game {
  #validation;
  constructor() {
    this.cars = [];
    this.round = 0;
    this.#validation = new ValidationGame();
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

    if (this.#validation.isDuplicated(this.cars)) {
      throw new Error('[ERROR] : 자동차 이름이 중복되었습니다.');
    }
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

export class ValidationGame {
  isDuplicated(cars) {
    const names = cars.map((car) => car.name);
    const nameSet = new Set(names);

    return names.length !== nameSet.size;
  }
}
