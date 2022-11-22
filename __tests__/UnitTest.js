
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/BridgeGame");
const InputView = require("../src/InputView");
const InputValidation = require("../src/InputValidation");

describe("다리 건너기 기능 단위별 테스트", () => {

    test("다리 생성하기", () => {
        expect(BridgeMaker.makeBridge(4, BridgeRandomNumberGenerator.generate)).toHaveLength(4);    
    });

    test("다리의 위아래 칸 선택한 후 정답인지 테스트", () => {
        const answerList = ['U', 'D', 'U', 'U', 'D', 'D', 'U']; 
        const bridgeGame = new BridgeGame(answerList, answerList.length);
        const isAnswer = bridgeGame.move('D'); //정답(answerList)의 첫번째 값(U)와 플레이어의 추측값(D)이 일치하지 않으므로 false 저장 

        expect(isAnswer).toEqual(false); 
    });

    test("게임 종료 조건 - 정답을 다 맞혔는지 여부 테스트", () => {
        const answerList = ['U']; 
        const bridgeGame = new BridgeGame(answerList, answerList.length);
        
        expect(InputView.guessAllAnswers(bridgeGame, answerList.length)).toEqual(false); 
    });

    test("예외 테스트 - 다리 길이 값이 숫자인지 테스트", () => {
        const isValidNumber = InputValidation.validateNumber('3k');
        expect(isValidNumber).toEqual(true); 
    });
    
    test("예외 테스트 - 다리 길이 값의 범위가 올바른지 테스트", () => {
        const isValidRange = InputValidation.validateRange(2);
        expect(isValidRange).toEqual(true); 
    });

    test("예외 테스트 - 플레이어가 선택한 칸이 올바른 값인지 테스트", () => {
        const isValidMove = InputValidation.validateMove('UD');
        expect(isValidMove).toEqual(true); 
    });

    test("예외 테스트 - 플레이어가 선택한 재시작/종료 여부가 올바른 값인지 테스트", () => {
        const isValidCommand = InputValidation.validateCommand('K');
        expect(isValidCommand).toEqual(true); 
    });    

});