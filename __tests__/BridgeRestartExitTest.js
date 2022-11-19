const BridgeService = require('../src/service/BridgeService');

const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};
describe('브릿지 게임 재시작 테스트', () => {
  test('결과: 에러, 입력 - "a" 입력값 체크', () => {
    const input = 'a';
    const bridgeService = new BridgeService();
    expect(() => bridgeService.doRestartORExit(input).toThrow('[ERROR]'));
  });

  test('결과: 에러, 입력 - "1" 입력값 체크', () => {
    const input = '1';
    const bridgeService = new BridgeService();
    expect(() => bridgeService.doRestartORExit(input).toThrow('[ERROR]'));
  });

  test('결과: 에러, 입력 - "Q " 입력값 체크', () => {
    const input = 'Q ';
    const bridgeService = new BridgeService();
    expect(() => bridgeService.doRestartORExit(input).toThrow('[ERROR]'));
  });

  test('결과: 에러, 입력 - " R " 입력값 체크', () => {
    const input = ' R ';
    const bridgeService = new BridgeService();
    expect(() => bridgeService.doRestartORExit(input).toThrow('[ERROR]'));
  });

  test('시도 횟수 + 1, userBridge 리셋되어있는지 확인', () => {
    const randoms = ['1', '1', '1'];
    mockRandoms(randoms);

    const bridgeService = new BridgeService();

    bridgeService.start('3');
    bridgeService.recordMove('U');
    bridgeService.recordMove('D');

    const input = 'R';

    bridgeService.doRestartORExit(input);

    const moveResult = bridgeService.getMoveResult();

    expect(moveResult).toEqual([[], []]);
  });
});
