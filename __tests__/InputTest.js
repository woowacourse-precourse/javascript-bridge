const InputError = require('../src/InputErrorView');
const BridgeInputError = require('../src/MESSAGES/InputMessage');

const bridgeerr = new Error(BridgeInputError.BRIDGE_INPUT_ERROR);
test('다리 입력 오류 테스트', () => {
  inputlog = [
    '1000',
    '3',
    '15',
    '20',
    '2',
    '21',
    '',
    '우아한 테크 코스',
    '-1',
    '+++++3333',
  ];
  inputexpected = [
    bridgeerr,
    true,
    true,
    true,
    true,
    bridgeerr,
    bridgeerr,
    bridgeerr,
    bridgeerr,
    bridgeerr,
  ];

  inputlog.forEach((eachinput, index) => {
    expect(() => {
      InputError.bridgeSizeError(eachinput).toBe(inputexpected[index]);
    });
  });
});
