const InputErrorCheck = require('../src/InputErrorCheck');

test('다리생성 예외 테스트', () => {
  const exceptionInputs = ['1', '2', '21', 's', 'ㅇ'];
  exceptionInputs.map((input) => {
    expect(() => {
      InputErrorCheck.bridgeSize(input);
    }).toThrow('[ERROR]');
  });
});

test('이동 예외 테스트', () => {
  const exceptionInputs = ['1', 'U ', 'u', 'd', 'ㅓ', 'D '];
  exceptionInputs.map((input) => {
    expect(() => {
      InputErrorCheck.way(input);
    }).toThrow('[ERROR]');
  });
});

test('재시도 예외 테스트', () => {
  const exceptionInputs = ['1', 'R ', 'Q ', 'u', 'd', 'ㅓ'];
  exceptionInputs.map((input) => {
    expect(() => {
      InputErrorCheck.gameCommand(input);
    }).toThrow('[ERROR]');
  });
});
