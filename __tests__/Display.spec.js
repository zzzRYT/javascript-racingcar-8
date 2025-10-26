import { getLogSpy } from './ApplicationTest';

import { Display } from '../src/domain/Display';

describe('View Class 단위 테스트', () => {
  let display;

  beforeEach(() => {
    display = new Display();
  });

  test('각 자동차의 이름과 현재 전진 상태를 출력한다.', () => {
    const cars = [
      { name: 'pobi', move: 2 },
      { name: 'woni', move: 0 },
      { name: 'jun', move: 3 },
    ];
    const logSpy = getLogSpy();
    const expectedLogs = ['pobi : --', 'woni : ', 'jun : ---'];

    display.round(cars);

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    {
      description: '우승자가 한 명일 경우',
      winners: ['pobi'],
      result: '최종 우승자 : pobi',
    },
    {
      description: '우승자가 여러 명일 경우',
      winners: ['pobi', 'jun'],
      result: '최종 우승자 : pobi, jun',
    },
  ])('$description', ({ winners, result }) => {
    const logSpy = getLogSpy();

    display.winners(winners);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });
});
