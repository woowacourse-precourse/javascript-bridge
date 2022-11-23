/* eslint-disable prettier/prettier */
const CheckBridgeSize = require('../src/Model/CheckBridgeSize');
const CheckInputUpDown = require('../src/Model/CheckInputUpDown');
const CheckInputReplayQuit = require('../src/Model/CheckInputReplayQuit');

describe('[ERROR TEST] `다리 길이` 입력받기  ', () => {
  test('[CASE1] `3 ~ 20` 이외의 숫자를 입력받은 경우', () => {
    const sizeArray = [-9, 1, 3, 20, 100];
    const inputReplayQuit = new CheckBridgeSize();

    sizeArray.forEach((value) => {
      expect(inputReplayQuit.validate(value)).toBeFalsy();
    });
  });

  test('[CASE2] 숫자가 아닌 다른 값을 입력받은 경우', () => {
    const sizeArray = ['wrong', '#$', ` `, 'U'];
    const inputReplayQuit = new CheckBridgeSize();

    sizeArray.forEach((value) => {
      expect(inputReplayQuit.validate(value)).toBeFalsy();
    });
  });
});

describe('[ERROR TEST] 라운드 마다 `위/아래 칸(U/D)` 선택하는 입력받기 ', () => {
    test('[CASE1] U/D을 두 문자 이상 입력받은 경우', () => {
        const upDownArray = ['DDD', 'UDUD', 'UU'];
        const inputUpDown = new CheckInputUpDown();
    
        upDownArray.forEach((value) => {
          expect(inputUpDown.validate(value)).toBeFalsy();
        });
      });

    test('[CASE2] U/D 제외한 다른 문자를 입력받은 경우 ', () => {
    const upDownArray = ['T', `$`, ' '];
    const inputUpDown = new CheckInputUpDown();

    upDownArray.forEach((value) => {
      expect(inputUpDown.validate(value)).toBeFalsy();
    });
  });
});

describe('[ERROR TEST] 게임 실패 시, `재시도(R/Q)` 여부 입력받기 ', () => {
    test('[CASE1] R/Q를 두 문자 이상 입력받은 경우', () => {
        const ReplayQuitArray = ['RRR', 'RQRQ', 'QQR'];
        const inputReplayQuit = new CheckInputReplayQuit();
    
        ReplayQuitArray.forEach((value) => {
          expect(inputReplayQuit.validate(value)).toBeFalsy();
        });
      });

    test('[CASE2] R/Q 제외한 다른 문자를 입력받은 경우', () => {
    const ReplayQuitArray = ['T', `$`, ' '];
    const inputReplayQuit = new CheckInputReplayQuit();

    ReplayQuitArray.forEach((value) => {
      expect(inputReplayQuit.validate(value)).toBeFalsy();
    });
  });
});