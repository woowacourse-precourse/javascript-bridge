/* eslint-disable max-lines-per-function */
const UserInteractor = require('../../src/domain/usecases/UserInteractor');
const User = require('../../src/domain/entities/User');

beforeEach(() => {
  ;
});

const mockMove = (instance, moves) => {
  moves.forEach((move) => {
    instance.move(move);
  });
};

describe('유저 인터렉터', () => {
  test('유저를 움직인다', () => {
    const userInteractor = new UserInteractor();
    userInteractor.move = jest.spyOn(userInteractor, 'move');
    mockMove(userInteractor, ['U', 'D', 'D']);
    expect(userInteractor.move).toHaveBeenCalledTimes(3);
  });

  test('유저의 위치를 가져온다', () => {
    const userInteractor = new UserInteractor();
    mockMove(userInteractor, ['U', 'D', 'D']);
    expect(userInteractor.getLocation()).toBe(2);
    mockMove(userInteractor, ['U', 'U', 'U']);
    expect(userInteractor.getLocation()).toBe(5)
    ;
  });

  test('유저의 현재 방향을 가져온다', () => {
    const userInteractor = new UserInteractor();
    userInteractor.move('U');
    expect(userInteractor.getCurrentDirection()).toBe('U');

    userInteractor.move('D');
    expect(userInteractor.getCurrentDirection()).toBe('D');
  });

  test('유저의 로그를 가져온다', () => {
    const userInteractor = new UserInteractor();
    const moves = ['U', 'D', 'D', 'U', 'U', 'U'];
    mockMove(userInteractor, moves);
    expect(userInteractor.getLog()).toStrictEqual(moves);
  });
});
