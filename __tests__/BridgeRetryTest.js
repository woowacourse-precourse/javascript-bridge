/*eslint-disable*/
const { checkRetry } = require("../src/lib/bridgeRetryInputUtils");

describe("재시작 테스트", () => {
  test("재시작을 위한 입력의 길이가 1인지 테스트", () => {
    expect(checkRetry("RQ")).toEqual(false);
    expect(checkRetry("")).toEqual(false);
    expect(checkRetry("R")).toEqual(true);
  });

  test("재시작을 위한 입력이 R 또는 Q인지 테스트", () => {
    expect(checkRetry("T")).toEqual(false);
    expect(checkRetry("R")).toEqual(true);
    expect(checkRetry("r")).toEqual(false);
    expect(checkRetry("Q")).toEqual(true);
    expect(checkRetry("q")).toEqual(false);
  });
});
