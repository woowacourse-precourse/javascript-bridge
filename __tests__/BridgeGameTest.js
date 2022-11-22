const Bridge = require('../src/Bridge');
const BridgeGame = require('../src/BridgeGame');
const { STATUS } = require('../src/utils/const');

describe('BridgeGame 클래스 단위 테스트', () => {
  test.each(['a', '2', '22'])(
    '다리 길이에 3이상 20이하의 숫자가 들어오지 않으면 예외를 발생한다.',
    (input) => {
      expect(() => {
        new BridgeGame(input);
      }).toThrow('[ERROR]');
    }
  );

  test('플레이어의 현재 Path와 bridge를 비교하여 status와 isCorrect를 반환한다.', () => {
    const bridgeGame = new BridgeGame('3');
    const bridge = new Bridge(['U', 'D', 'U']);
    const paths = [['U'], ['U', 'D'], ['D']];
    const answer = [
      { status: STATUS.CONTINUE, isCorrect: true },
      { status: STATUS.CONTINUE, isCorrect: true },
      { status: STATUS.FAILURE, isCorrect: false },
    ];

    paths.forEach((path, index) => {
      const { status, isCorrect } = bridgeGame.comparePath(path, bridge);
      expect(status).toEqual(answer[index].status);
      expect(isCorrect).toEqual(answer[index].isCorrect);
    });
  });

  test('플레이어가 R 혹은 Q를 입력하면 0 또는 1을 반환한다.', () => {
    const bridgeGame = new BridgeGame('3');
    const inputs = ['Q', 'R'];
    const answers = [1, 0];

    inputs.forEach((input, index) => {
      const result = bridgeGame.convertStringToCommand(input);
      expect(result).toEqual(answers[index]);
    });
  });

  test('플레이어가 게임을 재시작 한다면 시도 횟수를 올린다.', () => {
    const bridgeGame = new BridgeGame('3');

    bridgeGame.retry();
    bridgeGame.retry();
    bridgeGame.retry();

    const { count } = bridgeGame.getResultInfo();
    expect(count).toEqual(4);
  });
});
