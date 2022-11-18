const BridgeService = require('../src/service/BridgeService');

describe('랜덤 브릿지와 유저 브릿지 비교 테스트', () => {
  test('(결과:실패 - 유저브릿지["U","D"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const bridgeCheck = new BridgeCheck();
    const moveResult = bridgeCheck.getMoveResult();
    const gameResult = bridgeCheck.getGameResult();

    expect(moveResult).toEqaul(['O', 'X'], ['', '']);
    expect(gameResult).toEqaul('fail');
  });

  test('(결과:실패 - 유저브릿지["U","U","D"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const bridgeCheck = new BridgeCheck();
    const moveResult = bridgeCheck.getMoveResult();
    const gameResult = bridgeCheck.getGameResult();

    expect(moveResult).toEqaul(['O', 'O', 'X'], ['', '']);
    expect(gameResult).toEqaul('fail');
  });

  test('(결과:계속 시도 - 유저브릿지["U","U"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const bridgeCheck = new BridgeCheck();
    const moveResult = bridgeCheck.getMoveResult();
    const gameResult = bridgeCheck.getGameResult();

    expect(moveResult).toEqaul(['O', 'O'], ['', '']);
    expect(gameResult).toEqaul('try');
  });

  test('(결과:성공 - 유저브릿지["U","U","U"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const bridgeCheck = new BridgeCheck();
    const moveResult = bridgeCheck.getMoveResult();
    const gameResult = bridgeCheck.getGameResult();

    expect(moveResult).toEqaul(['O', 'O', 'O'], ['', '']);
    expect(gameResult).toEqaul('successs');
  });
});
