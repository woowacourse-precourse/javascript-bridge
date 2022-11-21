const BridgeGame = require('../src/model/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test('retry 메서드 기능 테스트 : ', () => {
    // const bridgeGame = new BridgeGame();
    // bridgeGame.retry();
  });

  test('예외 테스트 : 입력값이 빈칸인 경우 예외 처리한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => bridgeGame.validateCommand('')).toThrow(
      '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'
    );
  });

  test('예외 테스트 :  입력값이 문자가 아닌 경우 예외 처리한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => bridgeGame.validateCommand('2')).toThrow(
      '[ERROR] 숫자를 제외한 문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 입력값이 대문자가 아닌 소문자(r 또는 q)인 경우 예외 처리한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => bridgeGame.validateCommand('q')).toThrow(
      '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 입력값이 R 또는 Q가 아닌 경우 예외 처리한다', () => {
    const bridgeGame = new BridgeGame();
    expect(() => bridgeGame.validateCommand('RETRY')).toThrow(
      '[ERROR] R (재시도) 와 Q (종료) 중에서만 입력해주세요.'
    );
  });
});
