## 기능 목록

### 브릿지 게임을 시작하는 기능

- 앱을 실행하면 브릿지 게임을 시작함

```js
const bridgeGame = new BridgeGame();
bridgeGame.start();
```

### 유저로부터 다리 길이를 입력받는 기능

- 다리 길이를 입력받는 기능(3이상 20이하)
- 입력받은 다리 길이 값이 숫자가 아닌 경우 예외처리 -> <code>isNaN()</code> 사용
- 입력받은 다리 길이 값이 3이상 20이하가 아닌 경우 예외처리 -> <code>if (value <= 20 && value >= 3)</code> 조건 활용

### 유저로부터 이동할 칸을 입력받고 출력하는 기능

- 이동할 칸을 입력받고 출력하는 기능
- 입력 받은 값이 U 혹은 D가 아닌 경우 예외처리 -> <code> (check === COMMAND_VALUE.UP || check === COMMAND_VALUE.DOWN)</code> 사용

  - U를 입력받은 경우 : <code> userMoveArray.push(1); </code>
  - D를 입력받은 경우 : <code> userMoveArray.push(0); </code>

- 랜덤으로 생성된 다리의 값과 유저가 입력한 이동 칸을 비교하여 조건에 따라 분기하여 출력
  - 맞춘 경우 : <code> if (bridge[i] === this.userMoveArray[i]) </code>
  - 맞춘 경우가 length 끝까지 이어진 경우 다 맞췄다는 판단을 함
  - 그 외의 경우 틀림
- UPSIDE, DOWNSIDE를 각각 분리하여 조건에 따라 추가하면서 출력

### 유저로부터 재시작/종료 여부를 입력받는 기능

- 재시작/종료 여부를 입력받는 기능
- 입력 받은 값이 Q 혹은 R이 아닌 경우 예외처리 -> <code> if (check === COMMAND_VALUE.RETRY || check === COMMAND_VALUE.QUIT) </code>
  - Q를 입력받은 경우 종료, R을 입력받은 경우 재시작 된다.
- 재시작이 되면 시도 회수 카운트가 1 증가한다.
- 재시작이 되면 기존 생성했던 다리를 재사용한다.

### 게임 결과를 출력하는 기능

- 게임 결과를 출력하는 기능
- 결과 출력 시 몇번의 시도를 했는지 출력
- 전부 정답 시, 성공을 출력하고 오답인 상태에서 종료 시 실패했다고 출력
- 정답, 오답의 결과를 최종 게임 결과에서 한번 더 출력
