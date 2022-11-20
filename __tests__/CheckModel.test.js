const CheckModel = require("../src/Models/CheckModel");

const checkModel = new CheckModel();

describe("이동 정보 생성 모델 테스트", () => {
  const example = [
    [
      ["D", "U", "U", "U", "U", "U", "D"],
      ["D", "U", "U"],
    ],
    [
      ["D", "U", "U", "U", "D"],
      ["D", "U", "D"],
    ],
    [
      ["U", "D", "U", "D", "D"],
      ["U", "D", "U", "D", "U"],
    ],
    [
      ["U", "U", "D", "D", "D", "U", "D"],
      ["U", "U", "D", "D", "D", "U", "D"],
    ],
  ];
  const result = [
    [true, false],
    [false, false],
    [false, false],
    [true, true],
  ];
  let idx = 0;
  test.each(example)(
    "1.함정 밟지 않고 나아가는 경우 체크, 2.함정 밟은 경우 체크, 3.끝에서 함정을 밟은 경우 체크, 4.끝까지 함정을 밟지 않은 경우 체크",
    (bridge, movingProcess) => {
      const errorTest = () => checkModel.check(bridge, movingProcess);
      expect(errorTest()).toStrictEqual(result[idx]);
      idx += 1;
    }
  );
});
