const BridgeMaker = require("../src/BridgeMaker");
const MissionUtils = require("@woowacourse/mission-utils");

describe("다리를 만드는 메서드 테스트", () => {
  test("사용자가 입력한 다리의 길이만큼 다리를 생성한다.", () => {
    generate = () => {
      return MissionUtils.Random.pickNumberInRange(0, 1);
    }
    expect(
      BridgeMaker.makeBridge(3, generate())
    ).toHaveLength(3);
  });

  test("다리에 무작위 값이 잘 들어가는지 확인한다. case1", () => {
    generate = () => {
      return MissionUtils.Random.pickNumberInRange(1, 1);
    }
    expect(
      BridgeMaker.makeBridge(3, generate())
    ).toEqual(["U", "U", "U"]);
  });

  test("다리에 무작위 값이 잘 들어가는지 확인한다. case2", () => {
    generate = () => {
      return MissionUtils.Random.pickNumberInRange(0, 0);
    }
    expect(
      BridgeMaker.makeBridge(3, generate())
    ).toEqual(["D", "D", "D"]);
  });

  test("0과 1로 이루어진 다리를 0은 D로 1은 U로 바꾼다. case1", () => {
    expect(
      BridgeMaker.changeBridge([1, 0, 1])
    ).toEqual(["U", "D", "U"]);
  });

  test("0과 1로 이루어진 다리를 0은 D로 1은 U로 바꾼다. case2", () => {
    expect(
      BridgeMaker.changeBridge([0, 0, 0])
    ).toEqual(["D", "D", "D"]);
  });
})