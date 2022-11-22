const BridgeSize = require('../src/Validate/BridgeSize.js');
const BridgeDirection = require('../src/Validate/BridgeDirection.js');

describe('다리길이 유효성 테스트', () => {
  let bridgeSizeList = [];
  const sizeTestLogic = () => {
    bridgeSizeList.forEach((size) => {
      expect(() => {
        const bridgeSize = new BridgeSize(size);
        bridgeSize.validate();
      }).toThrow('[ERROR]');
    });
  };

  test('3~20사이의 정수가 아니면 예외처리힌다.', () => {
    bridgeSizeList = ['-2', '-1', '0', '2', '21', '100'];
    sizeTestLogic();
  });

  test('소수가 입력되면 예외처리한다.', () => {
    bridgeSizeList = ['-1.5', '0.5', '2.9', '3.1', '5.5', '19.5', '20.1'];
    sizeTestLogic();
  });

  test('문자가 입력되면 예외처리한다.', () => {
    bridgeSizeList = ['a', '3a', 'a7', '3a'];
    sizeTestLogic();
  });
  test('공백이 포함되며 예외처리한다.', () => {
    bridgeSizeList = ['7 ', ' 3', '1 3', ' 17', ' '];
    sizeTestLogic();
  });
  test('값을 입력하지 않으면 예외처리한다.', () => {
    bridgeSizeList = [''];
    sizeTestLogic();
  });
});

describe('움직일 방향(U,D) 입력 테스트', () => {
  let movingDirectionList = [];
  const directionTestLogic = () => {
    movingDirectionList.forEach((direction) => {
      expect(() => {
        const bridgeDirection = new BridgeDirection(direction);
        bridgeDirection.validate();
      }).toThrow('[ERROR]');
    });
  };

  test('대문자 U,D 이외의 입력을 하면 예외처리한다.', () => {
    movingDirectionList = ['u', 'd', 'a', 'Y', '3', 'UD', 'UU'];
    directionTestLogic();
  });
  test('입력값에 공백이 포함되면 예외처리한다.', () => {
    movingDirectionList = [' ', 'U ', 'D ', ' U', 'u '];
    directionTestLogic();
  });
  test('값을 입력하지 않으면 예외처리한다.', () => {
    movingDirectionList = [''];
    directionTestLogic();
  });
});

describe('재시작/종료 여부 테스트', () => {
  let commandList = [];
  const commandTestLogic = () => {
    commandList.forEach((direction) => {
      expect(() => {
        const bridgeDirection = new BridgeDirection(direction);
        bridgeDirection.validate();
      }).toThrow('[ERROR]');
    });
  };

  test('대문자 R,Q 이외의 입력을 하면 예외처리한다.', () => {
    commandList = ['r', 'q', 'RR', 'QQ', 'Z', '3', 's'];
    commandTestLogic();
  });
  test('입력값에 공백이 포함되면 예외처리한다.', () => {
    commandList = [' ', 'R ', 'Q ', ' R', 'q '];
    commandTestLogic();
  });
  test('값을 입력하지 않으면 예외처리한다.', () => {
    commandList = [''];
    commandTestLogic();
  });
});
