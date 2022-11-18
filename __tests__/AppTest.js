const { describe, expect, test, afterEach } = require('@jest/globals');
const { Console } = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');

describe('Console.print() 테스트', () => {
  const printFnSpy = jest.spyOn(Console, 'print');

  const app = new App();

  test('시작 메시지 출력 테스트', () => {
    app.play();

    expect(printFnSpy).toHaveBeenCalledWith('다리 건너기 게임을 시작합니다.\n');

    printFnSpy.mockClear();
  });

  test('bridgeSize 에러 메시지 출력 테스트 - 숫자가 아닐 경우', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callBack) => {
      callBack('a');
    });

    app.requestBridgeSize();

    expect(printFnSpy).toHaveBeenCalledWith(
      '\n[ERROR] 숫자만 입력할 수 있습니다.\n'
    );

    printFnSpy.mockClear();
  });

  test.each([[2], [30]])(
    'bridgeSize 에러 메시지 출력 테스트 - size가 %d인 경우',
    (size) => {
      Console.readLine = jest.fn();
      Console.readLine.mockImplementationOnce((_, callBack) => {
        callBack(size);
      });

      app.requestBridgeSize();

      expect(printFnSpy).toHaveBeenCalledWith(
        '\n[ERROR] 3 이상 20 이하의 숫자만 입력할 수 있습니다.\n'
      );

      printFnSpy.mockClear();
    }
  );

  test('direction 에러 메시지 출력 테스트 - U 또는 D가 아닐 경우', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('k');
    });

    app.requestDirection();

    expect(printFnSpy).toHaveBeenCalledWith(
      '\n[ERROR] U 또는 D만 입력할 수 있습니다.'
    );

    printFnSpy.mockClear();
  });

  test('commandOption 에러 메시지 출력 테스트 - Q 또는 R이 아닐 경우', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callBack) => {
      callBack('w');
    });

    app.requestRestartOrQuit();

    expect(printFnSpy).toHaveBeenCalledWith(
      '\n[ERROR] R 또는 Q만 입력할 수 있습니다.'
    );

    printFnSpy.mockClear();
  });

  test('최종 게임 결과 출력 테스트', () => {
    const app = new App();
    const bridgeGame = new BridgeGame('[U, D, D]');
    bridgeGame.move('U');

    app.bridgeGame = bridgeGame;

    app.quit();

    expect(printFnSpy).toHaveBeenNthCalledWith(1, '최종 게임 결과');
    expect(printFnSpy).toHaveBeenNthCalledWith(4, '\n게임 성공 여부: 실패');
    expect(printFnSpy).toHaveBeenNthCalledWith(5, '총 시도한 횟수: 1');
  });
});
