describe("2-3 이동 이후 다음 라운드로 잘 실행되는가?", () => {
  const testCase = [
    {
      testId: "2-3-1",
      explain: "아직 다리를 다 건너지 않았을 때",
      param: ["U"],
      expected: "", // spyOn move;
    },
    {
      testId: "u2-3-2",
      explain: "이동 불가능한 칸으로 이동했을 때",
      param: ["U"],
      expected: [], // spyOn retry;
    },
    {
      testId: "2-3-3",
      explain: "다리를 다 건넜을 때",
      param: ["U", "D", "U", "D"],
      expected: [], //spyOn retry;
    },
  ];

  const expectCallback = (...param) => {};
});

describe("3-1 게임 종료 상황을 잘 체크하는가?", () => {
  const testCase = [
    {
      testId: "3-1-1",
      explain: "(2-3-2) 이후 retry() 메서드가 실행되는가?",
      param: [],
      expected: [],
    },
    {
      testId: "3-1-2",
      explain: "(2-3-3) 이후 retry() 메서드가 실행되는가/",
      param: [],
      expected: [],
    },
  ];
});
