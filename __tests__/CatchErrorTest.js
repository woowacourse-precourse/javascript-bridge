const { BRIDGESIZE_KEY, MOVEMENT_KEY, COMMAND_KEY } = require('../src/constant/Key');
const BridgeProcess = require('../src/controller/BridgeProcess');

describe('에러 잡아주는지 확인', () => {
  const bridgeProcess = new BridgeProcess();
  test('브릿지 사이즈', () => {
    const questions = [3, '삼', 15, 56, '3.0'];
    const answers = [3, false, 15, false, false];
    questions.forEach((input, index) => {
      const result = bridgeProcess.checkValidation(BRIDGESIZE_KEY, input);
      expect(result).toEqual(answers[index]);
    });
  });

  test('브릿지 이동', () => {
    const questions = ['u', '34', '위', 'D', 'T', 'U'];
    const answers = [false, false, false, 'D', false, 'U'];
    questions.forEach((input, index) => {
      const result = bridgeProcess.checkValidation(MOVEMENT_KEY, input);
      expect(result).toEqual(answers[index]);
    });
  });

  test('게임 명령어', () => {
    const questions = ['D', 'q', 'Q', 'end', '45', 'R'];
    const answers = [false, false, 'Q', false, false, 'R'];
    questions.forEach((input, index) => {
      const result = bridgeProcess.checkValidation(COMMAND_KEY, input);
      expect(result).toEqual(answers[index]);
    });
  });
});
