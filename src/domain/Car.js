import { MAX_LENGTH_CAR_NAME } from '../../constants';

export class Car {
  constructor(name) {
    if (name.length > MAX_LENGTH_CAR_NAME) {
      throw new Error('[ERROR] : 자동차 이름은 5자 이하여야 합니다.');
    }
    this.name = name;
  }
}
