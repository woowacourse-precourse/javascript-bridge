const BridgeGame = require('../src/BridgeGame');
const { GAME_STRING, SHORT_CUT, GAME_RESULT } = require('../src/constants');

describe('다리 건너기 클래스 테스트', () => {
  test('다리 건너기 이동 결과값 성공 테스트', () => {
    const bridge = new BridgeGame();
    bridge.setBridge(3);
    const answer = bridge.getBridge();
    expect(bridge.getSteps()).toEqual(0);
    bridge.move(answer[0]);
    const upMoveResult = { upBridgeResult: '[ O ]', downBridgeResult: '[   ]' };
    const downMoveResult = {
      upBridgeResult: '[   ]',
      downBridgeResult: '[ O ]',
    };
    expect(bridge.getMoveResult()).toEqual(
      answer[0] === SHORT_CUT.up ? upMoveResult : downMoveResult
    );
  });

  test('다리 건너기 이동 결과 값 실패 테스트', () => {
    const bridge = new BridgeGame();
    bridge.setBridge(3);
    const answer = bridge.getBridge();
    expect(bridge.getSteps()).toEqual(0);
    const inputShortCut =
      answer[0] === SHORT_CUT.up ? SHORT_CUT.down : SHORT_CUT.up;
    bridge.move(inputShortCut);
    const upMoveResult = { upBridgeResult: '[ X ]', downBridgeResult: '[   ]' };
    const downMoveResult = {
      upBridgeResult: '[   ]',
      downBridgeResult: '[ X ]',
    };
    expect(bridge.getMoveResult()).toEqual(
      answer[0] === SHORT_CUT.up ? downMoveResult : upMoveResult
    );
  });

  test('다리 건너기 이동 테스트', () => {
    const bridge = new BridgeGame();
    bridge.setBridge(3);
    const answer = bridge.getBridge();
    answer.forEach((shortCut, index) => {
      expect(bridge.getSteps()).toEqual(index);
      bridge.move(shortCut);
    });
    expect(bridge.getSteps()).toEqual(3);
  });

  test('다리 건너기 끝났는 지 테스트', () => {
    const bridge = new BridgeGame();
    bridge.setBridge(3);
    const answer = bridge.getBridge();
    answer.forEach((shortCut) => {
      bridge.move(shortCut);
    });
    expect(bridge.isFinish()).toBe(true);
  });

  test('다리 건너기 재시작 테스트', () => {
    const bridge = new BridgeGame();
    expect(bridge.getAttempts()).toEqual(1);
    bridge.retry();
    expect(bridge.getAttempts()).toEqual(2);
    bridge.retry();
    expect(bridge.getAttempts()).toEqual(3);
  });

  test('다리 건너기 성공했을 경우 배열 생성 테스트', () => {
    const bridge = new BridgeGame();
    bridge.setBridge(3);
    const answer = bridge.getBridge();
    bridge.move(answer[0]);
    const succeseResult = [GAME_STRING.success];
    const normalResult = [GAME_STRING.normal];
    if (answer[0] === SHORT_CUT.up) {
      expect(bridge.createSucceseArray(SHORT_CUT.up)).toEqual(succeseResult);
      expect(bridge.createSucceseArray(SHORT_CUT.down)).toEqual(normalResult);
    }
    if (answer[0] === SHORT_CUT.down) {
      expect(bridge.createSucceseArray(SHORT_CUT.up)).toEqual(normalResult);
      expect(bridge.createSucceseArray(SHORT_CUT.down)).toEqual(succeseResult);
    }
  });
});

describe('다리 건너기 유틸 함수 테스트', () => {
  test('다리 이동에 실패했을 경우 실패한 결과 위 다리의 배열 반환하는 함수 테스트', () => {
    const upBridge = [GAME_STRING.success, GAME_STRING.success];
    const downBridge = [GAME_STRING.normal, GAME_STRING.normal];
    const result = {
      upBridge: [GAME_STRING.success, GAME_STRING.success, GAME_STRING.fail],
      downBridge: [GAME_STRING.normal, GAME_STRING.normal, GAME_STRING.normal],
    };
    expect(BridgeGame.createUpBridgeFailArray(upBridge, downBridge)).toEqual(
      result
    );
  });

  test('다리 이동에 실패했을 경우 실패한 결과 아래 다리의 배열 반환하는 함수 테스트', () => {
    const upBridge = [GAME_STRING.success, GAME_STRING.success];
    const downBridge = [GAME_STRING.normal, GAME_STRING.normal];
    const result = {
      upBridge: [GAME_STRING.success, GAME_STRING.success, GAME_STRING.normal],
      downBridge: [GAME_STRING.normal, GAME_STRING.normal, GAME_STRING.fail],
    };
    expect(BridgeGame.createDownBridgeFailArray(upBridge, downBridge)).toEqual(
      result
    );
  });

  test('다리 이동 결과 배열이 주어졌을 때 결과를 올바른 문자열로 반환하는 함수 테스트', () => {
    const input = [GAME_STRING.success, GAME_STRING.success, GAME_STRING.fail];
    const result = `[ ${GAME_STRING.success} | ${GAME_STRING.success} | ${GAME_STRING.fail} ]`;
    expect(BridgeGame.getBridgeString(input)).toEqual(result);
  });

  test.each([
    [true, 0],
    [false, 1],
  ])(
    '다리 건너기 게임의 결과가 %s 일 때 문자열 반환하는 함수 테스트',
    (input, index) => {
      const results = [
        `${GAME_RESULT.result} ${GAME_RESULT.success}`,
        `${GAME_RESULT.result} ${GAME_RESULT.fail}`,
      ];
      expect(BridgeGame.getResultString(input)).toEqual(results[index]);
    }
  );
});
