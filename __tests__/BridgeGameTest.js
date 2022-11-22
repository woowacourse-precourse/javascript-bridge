const Bridge = require('../src/Bridge');
const BridgeGame = require('../src/BridgeGame');
const { STATUS } = require('../src/utils/const');

describe('BridgeGame 클래스 단위 테스트', () => {
  test('다리 길이에 숫자가 아닌 값이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeGame('a');
    }).toThrow('[ERROR]');
  });

  test('다리 길이가 3보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeGame('2');
    }).toThrow('[ERROR]');
  });

  test('다리 길이가 20보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeGame('22');
    }).toThrow('[ERROR]');
  });

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

  // TODO: R에 대한 테스트 필요
  test('플레이어가 R 혹은 Q를 입력하면 0 또는 1을 반환한다.', () => {
    const bridgeGame = new BridgeGame('3');
    const result = bridgeGame.convertStringToCommand('Q');

    expect(result).toEqual(1);
  });

  test('플레이어가 게임을 재시작 한다면 게임 count를 올린다.', () => {
    const bridgeGame = new BridgeGame('3');
    bridgeGame.retry();

    const { count } = bridgeGame.getResultInfo();
    expect(count).toEqual(2);
  });
});
