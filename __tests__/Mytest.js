function ifErrorDoThis() {
  console.log("예외가 발생했습니다.");
}
function ifErrorDoThisTwo() {
  console.log("예외가 발생했습니다.2222");
}

function throwError() {
  throw new Error("예외를 던질것입니다.");
}

describe("예외처리 연습을 진행합니다.", () => {
  test("이 함수는 언제나 예외를 일으킵니다.", () => {
    expect(() => {
      throwError();
    }).toThrow();
  });

  test("캐치문으로 출력을 해보겠습니다.", () => {
    try {
      throwError();
      ifErrorDoThisTwo();
    } catch {
      ifErrorDoThis();
    }
  });
});
