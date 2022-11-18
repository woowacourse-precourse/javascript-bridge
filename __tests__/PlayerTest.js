const { ERROR_MSG } = require('../src/constants/message.js');
const { UPSIDE_SYMBOL, DOWNSIDE_SYMBOL } = require('../src/constants/condition.js');
const Player = require('../src/Player.js');

describe('Player 클래스 테스트', () => {
  test('입력이 빈 값인 경우, 에러가 발생한다.', () => {
    const player = new Player();
    const input = '';

    expect(() => {
      player.addDirection(input);
    }).toThrow(ERROR_MSG.emptyInput);
  });

  test.each([['up'], ['donw'], ['u'], ['d'], ['위'], ['아래']])(
    `입력이 이동방향 심볼('${UPSIDE_SYMBOL}', '${DOWNSIDE_SYMBOL}')과 정확히 일치하지 않는 경우, 에러가 발생한다.`,
    (input) => {
      const player = new Player();

      expect(() => {
        player.addDirection(input);
      }).toThrow(ERROR_MSG.invalidDirection);
    }
  );

  test.each([['U'], ['D']])(
    `입력이 이동방향 심볼('${UPSIDE_SYMBOL}', '${DOWNSIDE_SYMBOL}')중 하나인 경우, 에러가 발생하지 않는다.`,
    (input) => {
      const player = new Player();

      expect(() => {
        player.addDirection(input);
      }).not.toThrow('[ERROR]');
    }
  );
});
