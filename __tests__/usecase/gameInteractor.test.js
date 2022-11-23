/* eslint-disable max-lines-per-function */
const GameInteractor = require('../../src/domain/usecases/GameInteractor');

describe('게임 메타데이터의 유즈케이스', () => {
  test('시도횟수를 추가 / 시도횟수 구하기', () => {
    const gameInteractor = new GameInteractor();
    gameInteractor.addTrys();
    expect(gameInteractor.getTrys()).toBe(1);
    gameInteractor.addTrys();
    expect(gameInteractor.getTrys()).toBe(2);
    gameInteractor.addTrys();
    expect(gameInteractor.getTrys()).toBe(3);
  });

  test('게임 재시작/ 종료', () => {
    const gameInteractor = new GameInteractor();
    const restart = jest.fn();
    const exit = jest.fn();
    gameInteractor.retry('R', { restart, exit });
    expect(restart).toHaveBeenCalledTimes(1);
    gameInteractor.retry('Q', { restart, exit });
    expect(exit).toHaveBeenCalledTimes(1);
  });

  test('게임 재시작/ 종료 에러', () => {
    const gameInteractor = new GameInteractor();
    const restart = jest.fn();
    const exit = jest.fn();
    expect(() => gameInteractor.retry('A', { restart, exit })).toThrow();
  });
});
