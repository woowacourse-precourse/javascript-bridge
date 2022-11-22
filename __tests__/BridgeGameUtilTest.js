const {
  makeMapObj,
  makeMap,
  validationMakeMapObjProps,
} = require("../src/Util/BridgeGame.util");

describe("BridgeGame Util Func Test", () => {
  test("validationMakeMapObjProps execute false", () => {
    //given
    const answer = "U";
    const input = "D";
    //when
    const result =
      validationMakeMapObjProps(answer) || validationMakeMapObjProps(input);
    const expectResult = false;
    //then
    expect(result).toBe(expectResult);
  });
  test("validationMakeMapObjProps execute true", () => {
    //given
    const answer = "U";
    const input = "A";
    //when
    const result =
      validationMakeMapObjProps(answer) || validationMakeMapObjProps(input);
    const expectResult = true;
    //then
    expect(result).toBe(expectResult);
  });
  test("makeMapObj execute", () => {
    //given
    const answer = ["U", "D", "U", "D"];
    const input = ["U", "D"];
    //when
    const result = makeMapObj(answer, input);
    const expectResult = { 0: true, 1: true };
    //then
    expect(result).toEqual(expectResult);
  });
  test("makeMapObj는 최대 answer의 배열 크기만큼 진행합니다.", () => {
    //given
    const answer = ["U", "D", "U", "D"];
    const input = ["U", "D", "U", "D", "D"];
    //when
    const result = makeMapObj(answer, input);
    const expectResult = { 0: true, 1: true, 2: true, 3: true };
    //then
    expect(result).toEqual(expectResult);
  });
  test("makeMapObj의 인자는 0과 1로 이뤄진 배열이어야합니다.", () => {
    //given
    const answer = ["U", "D", "U", "D"];
    const input = ["U", "A"];
    //when
    //then
    expect(() => {
      makeMapObj(answer, input);
    }).toThrow("[ERROR]");
  });

  test("makeMap execute", () => {
    //given
    const input = ["U", "D"];
    const obj = { 0: true, 1: false };
    //when
    const result = makeMap(input, obj);
    const expectResult = `[ O |   ]
[   | X ]`;
    //then
    expect(result).toBe(expectResult);
  });
  test("makeMap의 input은 0과 1로 이뤄진 배열이어야합니다", () => {
    //given
    const input = [0, 2];
    const obj = { 0: true, 1: false };
    //when
    //then
    expect(() => {
      makeMap(input, obj);
    }).toThrow("[ERROR]");
  });
  test("makeMap의 obj는 boolean이어야합니다.", () => {
    //given
    const input = [0, 1];
    const obj = { 0: true, 1: 3 };
    //when
    //then
    expect(() => {
      makeMap(input, obj);
    }).toThrow("[ERROR]");
  });
});
