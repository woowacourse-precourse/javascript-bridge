const validation = require('../src/Validations')
const ERROR = require('../src/Error')
describe("예외처리 테스트", () => {
    test("입력 범위 예외처리 테스트", () => {
        const range = [3,20]
        expect(()=>{validation.validateRange(range, 2)}).toThrow(ERROR.numberNotInRange)
        expect(()=>{validation.validateRange(range, 3)})
        expect(()=>{validation.validateRange(range, 20)})
        expect(()=>{validation.validateRange(range, 21)}).toThrow(ERROR.numberNotInRange)
    });
    test("문자 예외처리 테스트", () => {
        expect(()=>{validation.validateNumber('a')}).toThrow(ERROR.notNumber)
        expect(()=>{validation.validateNumber('3')})
    });
    test("게임 플레이 커맨드 예외처리 테스트", () => {
        const commands = ['U','D'];
        const error =  ERROR.notPlayCommand;
        expect(()=>{validation.validateCommand(commands, error, 'U')})
        expect(()=>{validation.validateCommand(commands, error, 'D')})
        expect(()=>{validation.validateCommand(commands, error, 'A')}).toThrow(ERROR.notPlayCommand)
    });
  });
  