const validation = require('../src/Validations')
const ERROR = require('../src/Error')
describe("예외처리 테스트", () => {
    test("입력 범위 예외처리 테스트", () => {
        const range = [3,20]
        expect(validation.validateRange(range, 2)).toThrow(ERROR.numberNotInRange)
        expect(validation.validateRange(range, 3)).toBe(undefined)
        expect(validation.validateRange(range, 20)).toBe(undefined)
        expect(validation.validateRange(range, 21)).toThrow(ERROR.numberNotInRange)
    });
    test("문자 예외처리 테스트", () => {
        expect(validation.validateNumber('a')).toThrow(ERROR.notNumber)
        expect(validation.validateNumber('3')).toBe(undefined)
    });
    test("게임 플레이 커맨드 예외처리 테스트", () => {
        const commands = ['U','D'];
        const error =  ERROR.notPlayCommand;
        expect(validation.validateCommand(commands, error, 'U')).toBe(undefined)
        expect(validation.validateCommand(commands, error, 'D')).toBe(undefined)
        expect(validation.validateCommand(commands, error, 'A')).toThrow(ERROR.notPlayCommand)
    });
  });
  