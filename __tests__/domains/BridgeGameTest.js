/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const BridgeGame = require('../../src/BridgeGame');
const Bridge = require('../../src/Model/Bridge');
const Selected = require('../../src/Model/Selected');
const TryCnt = require('../../src/Model/TryCnt');

describe('Game 도메인 로직 테스트', () => {
  test('이동 input 입력시 game의 level값에 반영', () => {
    const game = new BridgeGame(new Selected(), new TryCnt());
    const inputArray = ['U', 'U', 'D'];

    inputArray.forEach((input) => game.move(input));

    expect(game.levelCnt).toBe(3);
  });

  test('재시작 시 이전보다 tryCnt 값 증가', () => {
    const game = new BridgeGame(new Selected(), new TryCnt());

    const tryCnt = game.tryNumber;
    game.retry();

    expect(game.tryNumber).toBe(tryCnt + 1);
  });

  test('게임 실패 및 성공여부 출력', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const game = new BridgeGame(new Selected(), new TryCnt());
    const inputArray = ['U', 'D', 'U'];

    game.createBridge(new Bridge(3, mockGenerator));
    inputArray.forEach((input) => game.move(input));

    expect(game.isWin()).toBe(false);
  });

  test('게임의 resultMap 출력 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const game = new BridgeGame(new Selected(), new TryCnt());

    const inputArray = ['U', 'D', 'D'];
    const resultArray = [
      [true, undefined, undefined],
      [undefined, true, true],
    ];
    game.createBridge(new Bridge(3, mockGenerator));
    inputArray.forEach((input) => game.move(input));

    expect(game.result).toStrictEqual(resultArray);
  });
});
