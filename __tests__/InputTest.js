const { BRIDGE_INPUT_ERROR } = require('../src/MESSAGES/InputMessage');
const InputError = require('../src/InputErrorView');

test('다리 입력 오류 테스트', () => {
  const inputlog = [
    '41123213123421',
    '123',
    '2',
    '21',
    '',
    '-2',
    '-5',
    '문자열',
  ];
  inputlog.forEach((eachlog) => {
    expect(() => {
      InputError.bridgeSizeError(eachlog);
    }).toThrow();
  });
});

test('게임 재시작,종료 입력 유효 테스트', () => {
  const regameinputlog = ['', 'RR', 'C', 'Z', '', 'WOWOWOWOW', 'CC', 'QQ'];
  regameinputlog.forEach((eachlog) => {
    expect(() => {
      InputError.reGameError(eachlog);
    }).toThrow();
  });
});
