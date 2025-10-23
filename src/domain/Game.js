import { Car } from './Car.js';
import { View } from './View.js';

import { SEPARATOR } from '../../constants.js';
import { Console } from '@woowacourse/mission-utils';

export class Game {
  constructor() {
    this.view = new View();
    this.cars = [];
    this.round = 0;
    this.winners = [];
  }

  setting(carNames, round) {
    this.cars = carNames.split(SEPARATOR).map((name) => new Car(name));
    this.round = Number(round);
  }

  start() {
    this.view.displayResult();
    for (let i = 0; i < this.round; i++) {
      this.#playRound(this.cars);
    }
    this.endGame();
  }

  endGame() {
    this.#winnerSelection();
    this.view.displayWinners(this.winners);
  }

  #playRound(cars) {
    cars.forEach((car) => {
      car.setMove();
    });
    this.view.displayRound(cars);
  }

  #winnerSelection() {
    const moveMax = this.#searchMax();
    this.cars.forEach((car) => {
      if (car.move === moveMax) {
        this.winners.push(car.name);
      }
    });
  }

  #searchMax() {
    const maxMoves = this.cars.map((car) => car.move);
    return Math.max(...maxMoves);
  }
}
