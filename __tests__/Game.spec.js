import { Console } from '@woowacourse/mission-utils';
import { Game } from '../src/domain/Game';

describe('Game Class 단위 테스트', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('게임 세팅을 통해서 전달받은 자동차와, 차수를 저장한다.', () => {
    const cars = 'pobi,woni';
    const round = '5';

    game.setting(cars, round);
    const carsNames = game.getCars().map((car) => car.name);

    expect(carsNames).toEqual(['pobi', 'woni']);
    expect(game.getRound()).toBe(5);
  });

  test('게임 시작 후 횟수를 기록한다.', () => {});

  test('게임 횟수가 처음 입력을 넘어가면 게임이 종료된다.', () => {});

  test('우승자가 한 명 일 수 있다.', () => {});

  test('우승자가 한 명 이상일 수 있다.', () => {});
});
