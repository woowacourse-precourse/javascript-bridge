const BridgeController = require('../src/BridgeController');
const InputView = require('../src/InputView');
const OutputView = require('../src/OutputView');
const Exception = require('../src/utils/Exceptions');

const views = {
    inputView: InputView,
    outputView: OutputView
}

describe('1. 다리 길이 입력에 대한 예외처리', () => {
    test.each([
        ',',
        '1ㄷ',
        '40',
        ' ',
        'abc'
    ])('다리 길이의 입력값 %s일 때 에러를 반환한다.', (input) => {
        expect(() => { 
            Exception.bridgeSizeException(input)
       } ).toThrow();
    })
})

describe('2. 사용자가 이동할 칸 입력에 대한 예외처리', () => {
    test.each([
        ',',
        '1ㄷ',
        '40',
        ' ',
        'abc'
    ])('사용자가 이동할 칸 입력값 %s일 때 에러를 반환한다.', (input) => {
        expect(() => { 
            Exception.movingException(input)
        } ).toThrow();
    })
})

describe('3. 사용자의 재시작 여부 입력에 대한 예외처리', () => {
    test.each([
        ',',
        '1ㄷ',
        '40',
        ' ',
        'abc'
    ])('사용자의 재시작 여부 입력이 %s일 때 에러를 반환한다.', (input) => {
        expect(() => { 
            Exception.commandException(input)
        } ).toThrow();
    })
})