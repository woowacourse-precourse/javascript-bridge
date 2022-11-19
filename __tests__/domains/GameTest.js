/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const BridgeGame = require('../../src/BridgeGame');
const Bridge = require('../../src/Model/Bridge');
const { ERROR_MESSAGE } = require('../../src/utils/Constant');

describe('Game 진행 테스트', () => {
  test('이동 input 입력시, this.selected에 반영', () => {
    const game = new BridgeGame();
    const inputArray = ['U', 'U', 'D'];

    inputArray.forEach((input) => game.move(input));

    expect(game.getLength()).toBe(3);
    expect(game.getSelected(1)).toBe('U');
  });

  test('재시작 시 이전보다 tryCnt 값 증가', () => {
    const game = new BridgeGame();
    const bridge = new Bridge();

    const tryCnt = game.getTryCnt();
    game.retry('R', bridge, game);

    expect(game.getTryCnt()).toBe(tryCnt + 1);
  });

  test('게임 성공에 따른 result 값 출력', () => {
    const game = new BridgeGame();
    const bridge = new Bridge();
    const inputArray = ['U', 'D'];

    bridge.setBridge(3);
    inputArray.forEach((input) => game.move(input));

    expect(game.getResult(bridge)).toBe(false);
  });
  test('이동시 입력 값이 U또는 D가 아닐 시 예외 출력', () => {
    const game = new BridgeGame();

    const numberInput = 3;
    const exceptString = 'R';

    expect(() => {
      game.move(numberInput);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);

    expect(() => {
      game.move(exceptString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
  });

  test('재시작 시 입력 값이 Q또는 R이 아닐 시 예외 출력', () => {
    const game = new BridgeGame();
    const bridge = new Bridge();

    const numberInput = 3;
    const exceptString = 'U';

    expect(() => {
      game.retry(numberInput, bridge, game);
    }).toThrow(ERROR_MESSAGE.RETRY_INPUT);

    expect(() => {
      game.retry(exceptString, bridge, game);
    }).toThrow(ERROR_MESSAGE.RETRY_INPUT);
  });
});
