const { mockQuestions, getLogSpy } = require('../../test/utils');
const { ERROR_MESSAGES } = require('../../src/constants/Error');

const BridgeGame = require('../../src/BridgeGame');

const game = new BridgeGame();

describe('다리 게임 클래스 테스트', () => {
  test('setSize()', () => {
    const inputs = ['1d3', 'dㅐ', 'ㅇㅇ', '1/', '&%^'];
    const log = ERROR_MESSAGES.onlyNumber;

    inputs.forEach((input) => {
      mockQuestions([input]);
      expect(BridgeGameValidation.validate(input)).toHaveBeenCalledWith(log);
    });
  });
});
