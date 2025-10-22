import { MAX_LENGTH_CAR_NAME } from '../constants';
import { Car } from '../src/domain/Car';

describe('Car Class 단위 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi');
  });

  test('자동차 이름은 5자 이하여야 한다.', () => {
    const nameLength = car.name.length;
    expect(nameLength).toBeLessThanOrEqual(MAX_LENGTH_CAR_NAME + 1);
  });

  test('자동차 이름이 5자를 초과할 경우 에러를 발생시킨다.', () => {
    const longName = 'pobipobi';
    expect(() => new Car(longName)).toThrow();
  });

  test('무작위 수가 4 이상일 경우 전진한다.', () => {
    const greaterThanFour = 5;
  });

  test('무작위 수가 4 미만일 경우 정지한다.', () => {});
});
