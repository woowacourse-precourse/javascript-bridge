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

    });
    test("게임 플레이 커맨드 예외처리 테스트", () => {

    });
    test("게임 종료 / 재시작 커맨드 테스트", () => {

    });
  });
  