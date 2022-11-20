const InputView = require('../src/InputView');

describe('사용자 입력값 단위 테스트', () => {

});


describe('다리 길이 입력값 예외 처리 테스트', () => {
    it.each([2, 21, 1.1, -1])('다리길이 입력 범위 초과시 예외처리', () => {
        expect(()=>InputView.readBridgeSize()).toThrow('[ERROR]');
    });
    it('문자입력시 예외 처리', () => {
        expect(()=>InputView.readBridgeSize()).toThrow('[ERROR]');
    });
});

describe('이동할 칸 입력시 예외 처리 테스트', () => {
   it ('U,D 이외 문자입력시 예외 처리', () => {
    expect(()=>{InputView.readMoving()}).toThrow('[ERROR]');
   });
});

describe('재시작 여부 입력시 예외 처리 테스트', () => {
    it ('Q,R 이외 문자입력시 예외 처리', () => {
        expect(()=>{InputView.readGameCommand()}).toThrow('[ERROR]');
    });
 });