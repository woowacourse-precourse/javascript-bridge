const App = require('../src/App');
const Move = require('../src/Model/Move');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('이동 테스트', () => {
  test('이동 결과 계산', () => {
    const currentPositions = ['U', 'D'];
    const directions = ['U', 'U'];
    const results = ['O', 'X'];

    results.forEach((result, index) => {
      expect(
        Move.calculateMoveResult(currentPositions[index], directions[index])
      ).toEqual(result);
    });
  });

  test('추가 이동 가능 여부 확인', () => {
    const currentMoves = ['X', 'O'];
    const results = [false, true];

    currentMoves.forEach((move, index) => {
      Move.updateCurrentMoveResult(move);
      expect(Move.canMove()).toEqual(results[index]);
    });
  });

  test('이동 횟수 추가 테스트', () => {
    mockRandoms([1, 0, 1, 0]);
    mockQuestions(['4', 'U', 'D', 'U', 'U']);

    const app = new App();
    app.play();

    expect(Move.getCount()).toEqual(4);
  });

  test('방향 입력에 따른 결과 반환 테스트', () => {
    const correctDirections = ['U', 'D', 'U', 'D'];
    const results = ['O', 'X', 'O', 'X'];

    results.forEach((input, index) => {
      expect(Move.compareUp(correctDirections[index])).toEqual(input);
    });
  });
});
