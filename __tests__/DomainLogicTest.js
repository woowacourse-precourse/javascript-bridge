const MissionUtils = require("@woowacourse/mission-utils");

const ValidCheck = require("../src/ValidCheck");
const {
  VALID_CHECK_ERROR,
  VALID_CHECK_PASS,
  VALID_CHECK_DO,
} = require("../src/Constant");
const BridgeMaker = require("../src/BridgeMaker");

describe("도메인 로직 단위 테스트", () => {
  test("사용자가 입력한 다리 길이가 올바른 값인지 검사한다.", () => {
    const bridgeSizes = [10, 1000, undefined];
    const answerFlags = [VALID_CHECK_PASS, VALID_CHECK_DO, VALID_CHECK_ERROR];

    answerFlags.forEach((flag, index) => {
      expect(ValidCheck.validBridgeSize(bridgeSizes[index])).toEqual(flag);
    });
  });

  test("사용자가 입력한 길이만큼 다리를 생성한다.", () => {
    const randomNumbers = ["1", "0", "1", "1", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(5, mockGenerator);

    expect(bridge).toEqual(["U", "D", "U", "U", "D"]);
  });

  test("사용자가 입력한 이동 커맨드가 올바른 값인지 검사한다.", () => {
    const commands = ["U", "a", undefined];
    const answerFlags = [VALID_CHECK_PASS, VALID_CHECK_DO, VALID_CHECK_ERROR];

    answerFlags.forEach((flag, index) => {
      expect(ValidCheck.validMoving(commands[index])).toEqual(flag);
    });
  });

  test("사용자가 입력한 값으로 다리를 건널 수 있는지 검사한다.", () => {});

  test("오답을 선택하여 재시작 시, 사용자의 재시작 커맨드가 올바른 값인지 검사한다.", () => {});

  test("라운드가 모두 종료되면, 성공 여부를 판별한다.", () => {});
});
