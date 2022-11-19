const { describe, expect, test, afterEach } = require('@jest/globals');
const { Console } = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');
const OutputView = require('../src/OutputView');
const Validation = require('../src/Validation');

const app = new App();

afterEach(() => {
  Console.close();
});

describe('Console.print() 테스트', () => {
  const printFnSpy = jest.spyOn(Console, 'print');

  test('시작 메시지 출력 테스트', () => {
    app.play();

    expect(printFnSpy).toHaveBeenCalledWith('다리 건너기 게임을 시작합니다.\n');

    printFnSpy.mockClear();
  });

  test('bridgeSize 에러 메시지 출력 테스트 - 숫자가 아닐 경우', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('a');
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
      Console.readLine.mockImplementationOnce((_, callback) => {
        callback(size);
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
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('w');
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

describe('사용자 입력값에 대한 유효성 검사 함수 호출 테스트', () => {
  const checkBridgeSizeSpy = jest.spyOn(Validation, 'checkBridgeSize');
  const checkDirectionSpy = jest.spyOn(Validation, 'checkDirection');
  const checkCommandOptionSpy = jest.spyOn(Validation, 'checkCommandOption');

  test('사용자가 size를 입력하면 size에 대한 유효성 검사 함수가 호출된다.', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback(10);
    });

    checkBridgeSizeSpy.mockClear();

    app.requestBridgeSize();

    expect(checkBridgeSizeSpy).toHaveBeenCalled();
    expect(checkBridgeSizeSpy).toHaveBeenNthCalledWith(1, 10);

    checkBridgeSizeSpy.mockClear();
  });

  test('사용자가 이동할 방향을 입력하면 방향에 대한 유효성 검사 함수가 호출된다.', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('U');
    });

    checkDirectionSpy.mockClear();

    app.requestDirection();

    expect(checkDirectionSpy).toHaveBeenCalled();
    expect(checkDirectionSpy).toHaveBeenNthCalledWith(1, 'U');

    checkDirectionSpy.mockClear();
  });

  test('사용자가 옵션을 입력하면 옵션에 대한 유효성 검사 함수가 호출된다.', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('R');
    });

    checkCommandOptionSpy.mockClear();

    app.requestRestartOrQuit();

    expect(checkCommandOptionSpy).toHaveBeenCalled();
    expect(checkCommandOptionSpy).toHaveBeenNthCalledWith(1, 'R');

    checkCommandOptionSpy.mockClear();
  });
});

describe('다리 생성 함수 호출 테스트', () => {
  const makerSpy = jest.spyOn(BridgeMaker, 'makeBridge');

  test('BridgeMaker의 makeBridge 메서드가 호출되어 size에 맞는 다리가 생성된다.', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('3');
    });

    makerSpy.mockClear();

    app.requestBridgeSize();

    expect(makerSpy).toHaveBeenCalledTimes(1);

    makerSpy.mockClear();
  });

  test('BridgeMaker의 makeBrige 메서드는 다리의 size와 랜덤 숫자 생성 함수를 인자로 받는다.', () => {
    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('12');
    });

    app.requestBridgeSize();

    expect(makerSpy).toHaveBeenCalledWith(12, generate);

    makerSpy.mockClear();
  });
});

describe('다리 건너기 결과 맵을 출력하는 함수 호출 테스트', () => {
  const printMapSpy = jest.spyOn(OutputView, 'printMap');

  test.each([
    [['U'], 1],
    [['U', 'D', 'D'], 3],
    [['U', 'D', 'D', 'U', 'D', 'U'], 6],
  ])(
    '%p 순서대로 입력하면 %d만큼 다리 건너기 걸과 맵을 출력하는 함수가 호출된다.',
    (array, times) => {
      Console.readLine = jest.fn();

      array.reduce((acc, cur) => {
        return acc.mockImplementationOnce((_, callback) => {
          callback(cur);
        });
      }, Console.readLine);

      printMapSpy.mockClear();

      const app = new App();
      app.bridgeGame = new BridgeGame(['U', 'D', 'D', 'U', 'D', 'U', 'U']);

      app.requestDirection();

      expect(printMapSpy).toHaveBeenCalledTimes(times);
    }
  );
});

describe('bridgeGame 결과에 따른 함수 호출', () => {
  test.each([
    [['D'], 1, 0],
    [['U', 'D', 'D'], 1, 1],
    [['U'], 2, 2],
  ])('방향 입력에 따른 함수 호출 테스트', (array, times, idx) => {
    const app = new App();
    app.bridgeGame = new BridgeGame(['U', 'D', 'D']);

    const resetOrQuitSpy = jest.spyOn(app, 'requestRestartOrQuit');
    const quitSpy = jest.spyOn(app, 'quit');
    const directionSpy = jest.spyOn(app, 'requestDirection');

    const spyArr = [resetOrQuitSpy, quitSpy, directionSpy];

    Console.readLine = jest.fn();
    array.reduce((acc, cur) => {
      return acc.mockImplementationOnce((_, callback) => {
        callback(cur);
      });
    }, Console.readLine);

    app.requestDirection();

    expect(spyArr[idx]).toHaveBeenCalledTimes(times);
  });
});

describe('재시작 또는 종료 입력에 따른 함수 호출 테스트', () => {
  test('R를 입력하면 재시작 함수를 호출한다.', () => {
    const restartSpy = jest.spyOn(app, 'restart');

    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('R');
    });

    app.requestRestartOrQuit();

    expect(restartSpy).toHaveBeenCalledTimes(1);
  });

  test('Q를 입력하면 종료 함수를 호출한다.', () => {
    const quitSpy = jest.spyOn(app, 'quit');

    const bridgeGame = new BridgeGame(['U', 'D', 'D']);
    app.bridgeGame = bridgeGame;

    bridgeGame.move('D');

    Console.readLine = jest.fn();
    Console.readLine.mockImplementationOnce((_, callback) => {
      callback('Q');
    });

    app.requestRestartOrQuit();

    console.log(quitSpy.mock);
  });
});
