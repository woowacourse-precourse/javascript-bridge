### 진행 사항

- 나중에 오류시 확인해봐야 할 것

```javascript
BridgeMaker.js
generateRandomNumber 
```



- 기능 테스트 만들기

```js
// - 기존 코드 성공 확인


test("기능 테스트 2", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "1", "1"]);
    mockQuestions(["3", "U", "U", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O | O | O ]",
      "[   |   |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O | O | O ]", "[   |   |   ]");
  });
```

```js
// 게임 성공 실패 테스트

test("기능 테스트 3", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "1", "1"]);
    mockQuestions(["3", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O | X ]",
      "[   |   ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });
```

