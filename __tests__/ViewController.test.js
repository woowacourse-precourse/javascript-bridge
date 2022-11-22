const ViewController = require("../src/controller/ViewController");

describe('결과 출력 시 로직 테스트', () => {
    test.each([[['O', ' ', 'O', 'O'], '[ O |   | O | O ]'], [['O', 'O', ' ', 'X'], '[ O | O |   | X ]']])("리스트가 주어졌을 때 형식에 맞게 변환하는지 확인하는 테스트", (input, result) => {
        expect(ViewController.stringConversion(input)).toBe(result);
    });
});
