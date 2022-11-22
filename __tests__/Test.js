const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("추가 도메인 테스트", () => {
    test("다리 길이 입력 테스트: 다리 길이는 undefined으로 입력될 수 없다.", () => {
        const result = InputView.bridgeSizeException();
        expect(result).toEqual(false);
    });

    // test("다리 길이 입력 테스트: 다리 길이는 3 이상 20 이하의 정수만 입력될 수 있다.", () => {
    //     const result = InputView.bridgeSizeException(1);
    //     expect(InputView.bridgeSizeException(1)).toThrow("[ERROR]");
    // });

    test("이동할 칸 입력 테스트: 이동할 칸은 U와 D만 입력 가능하다.", () => {
        const result = InputView.movingException('V');
        expect(result).toEqual(false);
    });

    test("게임 오버 입력 테스트: 해당 메소드에서는 R과 Q만 입력 가능하다.", () => {
        const result = InputView.movingException('V');
        expect(result).toEqual(false);
    });

    test("다리 생성 테스트: 사이즈를 넘기면 그에 맞는 랜덤 숫자를 생성한다.", () => {
        const size = 5;
        const result = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
        expect(result.length).toEqual(size);
    });

    test("칸 이동 테스트: 사용자가 입력한 곳으로 이동시킨다.", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'D'], 3);
        const result = bridgeGame.move('U');
        expect(result.progressStatus).toEqual('correct');
    });

    test("칸 이동 테스트: 사용자가 입력한 곳으로 이동시킨다.", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'D'], 3);
        const result = bridgeGame.move('D');
        expect(result.progressStatus).toEqual('not correct');
    });

    test("진행상황 테스트: 게임을 종료할지 계속할지 결정한다.", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'D'], 3);
        const result = bridgeGame.progressTest([false]);
        expect(result).toEqual('not correct');
    });

    test("진행상황 테스트: 게임을 종료할지 계속할지 결정한다.", () => {
        const bridgeGame = new BridgeGame(['U', 'D', 'D'], 3);
        const result = bridgeGame.progressTest([true, true, true]);
        expect(result).toEqual('end');
    });
  });