const BridgeGame = require('../src/BridgeGame');
const MissionUtils = require('@woowacourse/mission-utils');

describe('BridgeGame 클래스 테스트', () => {
  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
  };

  test('play 메소드 체크 intro가 똑바로 나오는지', () => {
    const logSpy = getLogSpy();
    const bridgeGame = new BridgeGame();
    bridgeGame.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('다리 건너기'));
  });

  test('make 메소드 체크 bridge가 제대로 만들어졌는지', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.make('3');
    bridgeGame.bridgeMap.convertObj(['U', 'D', 'U']);
    let answer = bridgeGame.bridgeMap.bridgeObject;
    expect(answer).toEqual({ U: ['O', ' ', 'O'], D: [' ', 'O', ' '] });
  });

  test('move 메소드 체크 input error체크', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.make('3');
    expect(() => {
      bridgeGame.move('A');
    }).toThrow('[ERROR]');
  });

  test('retry 메소드 체크 input error체크 ', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.make('3');
    expect(() => {
      bridgeGame.retry('A');
    }).toThrow('[ERROR]');
  });
});
