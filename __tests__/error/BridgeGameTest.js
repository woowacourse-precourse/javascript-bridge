/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const BridgeGame = require('../../src/BridgeGame');
const Selected = require('../../src/Model/Selected');
const TryCnt = require('../../src/Model/TryCnt');
const { ERROR_MESSAGE } = require('../../src/Utils/Constant');

describe('Game 예외 테스트', () => {
  test('이동시 입력 값이 U또는 D가 아닐 시 예외 출력', () => {
    const game = new BridgeGame(new Selected(), new TryCnt());

    const numberInput = 3;
    const exceptString = 'R';
    const lowerCaseString = 'u';

    expect(() => {
      game.move(numberInput);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);

    expect(() => {
      game.move(exceptString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);

    expect(() => {
      game.move(lowerCaseString);
    }).toThrow(ERROR_MESSAGE.LEVEL_INPUT);
  });
});
