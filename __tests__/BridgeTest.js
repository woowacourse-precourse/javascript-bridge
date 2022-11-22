const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');
const OutputView = require('../src/OutputView');

describe('다리 길이 입력값 유효성 검사', () => {
  test('다리 길이는 3이상 20이하의 숫자이다.', () => {
    const app = new App();
    const testBridgeSize = ['', 2, 'ab', '100', 100, '03'];
    testBridgeSize.forEach((element) => {
      expect(() => app.isValidBridgeSize(element)).toThrow();
    });
  });
});

describe('move 유효성 검사', () => {
  test('입력이 U,D가 아닌 경우 throw error.', () => {
    const bridgeGame = new BridgeGame();
    const testInput = ['r', '100', 33, 'ㅎㅎ', ' '];
    testInput.forEach((element) => {
      expect(() => bridgeGame.move(element)).toThrow();
    });
  });
});

describe('checkValidCommand 테스트', () => {
  test('R,Q가 아닌 경우, error throw 후 다시 입력 받는 tryAgain 함수 실행', () => {
    const testInput = ['F', 'r', '123', '!', '입력'];
    testInput.forEach((element) => {
      const app = new App();
      const spyTryAgain = jest.spyOn(app, 'tryAgain');
      app.checkValidCommand(element);
      expect(spyTryAgain).toBeCalledTimes(1);
    });
  });
});

describe('buildBridge 테스트', () => {
  test('입력받은 길이만큼 bridge Array가 만들어지는지 확인', () => {
    const testInput = ['3', '4', '5', '6'];
    testInput.forEach((element) => {
      const bridgeGame = new BridgeGame();
      bridgeGame.buildBridge(element);
      expect(bridgeGame.getBridgeLength()).toEqual(parseInt(element, 10));
    });
  });
});

describe('makeResultMap 테스트', () => {
  test('mergeTwoBlock 함수 호출횟수 확인', () => {
    const spyMergeBlock = jest.spyOn(OutputView, 'mergeTwoBlock');
    OutputView.makeResultMap(['U', 'D', 'D']);
    expect(spyMergeBlock).toBeCalledTimes(2);
  });

  test('makeUpSideBlock, makeDownSideblock 함수 테스트', () => {
    const testMoveInput = [[{ isRightDirect: true, moveInput: 'U' }, { isRightDirect: true, moveInput: 'D' }, { isRightDirect: true, moveInput: 'D' }],
      [{ isRightDirect: true, moveInput: 'D' }, { isRightDirect: true, moveInput: 'D' }, { isRightDirect: false, moveInput: 'U' }],
    ];
    const upSideResult = ['O |   |  ', '  |   | X'];
    const downSideResult = ['  | O | O', 'O | O |  '];
    testMoveInput.forEach((element, idx) => {
      expect(OutputView.makeUpSideBlock(element)).toEqual(upSideResult[idx]);
      expect(OutputView.makeDownSideBlock(element)).toEqual(downSideResult[idx]);
    });
  });
});
