import { Car } from './Car.js';

import { SEPARATOR } from '../../constants.js';

export class Game {
  constructor() {
    this.cars = [];
    this.round = 0;
    this.validation = validationGame();
  }

  getCars() {
    return this.cars;
  }

  getRound() {
    return this.round;
  }

  setting(carNames, round) {
    this.cars = carNames.split(SEPARATOR).map((name) => new Car(name.trim()));
    this.round = Number(round);
    this.validation.duplicatedCar(this.cars);
    this.validation.roundSetting(this.round);
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
    const eachCarMove = this.cars.map((car) => car.move);
    return Math.max(...eachCarMove);
  }
}

export function validationGame() {
  const duplicatedCar = (cars) => {
    const names = cars.map((car) => car.name);
    const nameSet = new Set(names);

    if (names.length !== nameSet.size) {
      throw new Error('[ERROR] : 자동차 이름이 중복되었습니다.');
    }
  };

  const roundSetting = (round) => {
    if (round <= 0) {
      throw new Error('[ERROR] : 라운드 설정이 필요합니다.');
    }
  };
  return { duplicatedCar, roundSetting };
}
