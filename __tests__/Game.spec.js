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

  test.each([
    {
      description: '우승자에 대한 배열을 반환한다.',
      cars: [
        { name: 'pobi', move: 4 },
        { name: 'woni', move: 3 },
        { name: 'kate', move: 1 },
      ],
      expectedWinners: ['pobi'],
    },
    {
      description:
        '우승자가 한 명 이상일 경우, 여러명의 우승자를 배열에 추가해 반환한다..',
      cars: [
        { name: 'pobi', move: 4 },
        { name: 'woni', move: 4 },
        { name: 'kate', move: 1 },
      ],
      expectedWinners: ['pobi', 'woni'],
    },
  ])('$description', ({ cars, expectedWinners }) => {
    game.cars = cars;

    const winners = game.getWinners();

    expect(winners).toEqual(expectedWinners);
  });
});
