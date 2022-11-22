## 🚩 기능 목록

### App

#### play

앱을 실행한다.

```js
const app = new App();
app.play();
```

#### createGame

게임 인스턴스를 생성하고 게임을 실행한다.

```js
// ...
app.createGame(bridge);
```

#### runGame

게임을 새로 실행하면서 입력을 받도록 한다.

```js
// ...
app.runGame(bridgeGame);
```

#### askRetry

게임을 재시도 할 것인지 사용자에게 물어본다.

```js
// ...
app.askRetry(bridgeGame);
```

#### terminate

콘솔을 닫고 앱을 종료한다.

```js
// ...
app.terminate();
```

---

### BridgeGame

다리 건너기 게임을 관리하는 클래스이다. 필드로 주어진 다리와 사용자의 이동 결과, 시도 횟수를 저장한다.

```js
// ...
const bridgeGame = new BridgeGame(bridge);
```

#### getIndex

이번에 건너야 하는 다리의 순번을 구하여 반환한다.

```js
// ...
bridgeGame.getIndex();
// 0
```

#### getMatchSymbol

이동 가능한 다리 방향과 사용자가 선택한 다리 방향을 받아 이동 결과를 알리는 표식을 반환한다.

```js
// ...
bridgeGame.getMatchSymbol("U", "U"); // "O"
bridgeGame.getMatchSymbol("U", "D"); // "X"
```

#### getMap

지나온 다리를 방향을 바탕으로 지도 정보를 만들어 반환한다.

```js
// ...
bridgeGame.getMap();
// [ [ "O", " " ], [ " ", "O" ] ]
```

#### getRunCount

게임 시도 횟수를 반환한다.

```js
// ...
bridgeGame.getRunCount();
// 2
```

#### hasMovedCorrectly

마지막 이동에서 올바른 방향으로 이동했는지 여부를 반환한다.

```js
// ...
bridgeGame.hasMovedCorrectly();
// true
```

#### hasCrossedCompletely

다리를 완전히 건넜는지 여부를 반환한다.

```js
// ...
bridgeGame.hasCrossedCompletely();
// false
```

#### isClear

모든 이동 횟수를 사용했고, 마지막까지 올바르게 건너 게임을 클리어했는지 여부를 반환한다.

```js
// ...
bridgeGame.isClear();
// true
```

#### move

사용자가 선택한 방향에 따라 이동한다.

```js
// ...
bridgeGame.move(direction);
```

#### endStep

이동 횟수를 모두 소모햐였는지 확인하고, 그 여부에 따라 게임을 계속 진행하든가 멈추도록 한다.

#### retry

이동 정보를 초기화하고, 시도 횟수를 하나 추가한 뒤 게임을 새로 시작한다.

---

### BridgeMaker

#### makeBridge

입력받은 다리 길이를 바탕으로 게임을 위한 다리 정보를 생성한다.

```js
const bridge = BridgeMaker.makeBridge(3, generator);
console.log(bridge);
// [ "U", "D", "D" ]
```

#### getDirection

무작위로 생성된 숫자에 따라 방향을 정한다.

```js
BridgeMaker.getDirection(1); // "U"
BridgeMaker.getDirection(0); // "D"
```

---

### BridgeRandomNumberGenerator

#### generate

1혹은 0 중 무작위의 숫자 하나를 반환한다.

```js
BridgeRandomNumberGenerator.generate(); // 1
```

---

### ErrorCase

#### checkBridgeSizeInput

입력받은 다리 길이가 조건에 맞는지 확인하고 올바르지 않으면 true를, 올바르면 false를 반환한다.

조건: 3이상 20 이하의 정수일 것.

```js
ErrorCase.checkBridgeSizeInput(2); // true
```

#### checkMovingInput

입력받은 이동 방향이 조건에 맞는지 확인하고 올바르지 않으면 true를, 올바르면 false를 반환한다.

조건: 'U'나 'D'일 것.

```js
ErrorCase.checkMovingInput("U"); // false
```

#### checkRetrialInput

입력받은 재시작 여부 명령어가 조건에 맞는지 확인하고 올바르지 않으면 true를, 올바르면 false를 반환한다.

조건: 'R'이나 'Q'일 것.

```js
ErrorCase.checkRetrialInput("f"); // true
```

---

### InputHandler

#### handleBridgeSizeInput

입력받은 다리 길이에 대해 에러 발생 여부를 확인하고 그에 따라 다음 행동을 진행하도록 한다.

#### handleMovingInput

입력받은 이동 방향에 대해 에러 발생 여부를 확인하고 그에 따라 다음 행동을 진행하도록 한다.

#### handleRetrialInput

입력받은 재시작 여부 명령어에 대해 에러 발생 여부를 확인하고 그에 따라 다음 행동을 진행하도록 한다.

---

### ErrorHandler

#### BridgeSize.true

에러 문구를 출력하고 다리 길이를 다시 입력받는다.

#### BridgeSize.false

입력받은 다리 길이에 따라 다리를 생성하고 그 다리를 바탕으로 게임을 생성한다.

#### Moving.true

에러 문구를 출력하고 이동 방향을 다시 입력받는다.

#### Moving.false

입력받은 이동 방향으로 이동하고 그 결과를 출력한다. 결과에 따라 다음으로 진행한다.

#### Retrial.true

에러 문구를 출력하고 재시작 여부 명령어를 다시 입력받는다.

#### Retrial.false

입력받은 명령어를 바탕으로 다음으로 진행한다.

---

### Utils

#### generateColumnMap.U

위 방향에 표식을 표시한다. 해당 정보를 나타내는 배열을 반환한다.

```js
generateColumnMap.U("O"); // [ "O", " " ]
generateColumnMap.U("X"); // [ "X", " " ]
```

#### generateColumnMap.D

아래 방향에 표식을 표시한다. 해당 정보를 나타내는 배열을 반환한다.

```js
generateColumnMap.D("O"); // [ " ", "O" ]
generateColumnMap.D("X"); // [ " ", "X" ]
```

#### takeNextStep.true

이동한 방향이 옳았을 경우 사용한다. 이동 횟수 소모 여부에 따라 다음으로 진행하도록 한다.

#### takeNextStep.false

이동한 방향이 틀렸을 경우 사용한다. 재시작 여부를 묻도록 한다.

#### stopWalking.true

이동한 방향이 옳았고, 이동 횟수를 모두 소모한 경우 사용한다. 최종 결과를 출력하고 앱을 종료한다.

#### stopWalking.false

이동한 방향이 옳았고, 이동 횟수가 아직 남아있는 경우 사용한다. 다음 이동 방향을 입력받는다.

#### Command.R

재시작 여부 명령어가 'R'일 경우 사용한다. 게임을 재시작한다.

#### Command.Q

재시작 여부 명령어가 'Q'일 경우 사용한다. 최종 결과를 출력하고 앱을 종료한다.

---

### InputView

안내 문구를 출력하고, 그에 맞는 사용자의 입력을 받는다.

#### readBridgeSize

다리 길이를 입력받는다.

#### readMoving

이동 방향을 입력받는다.

#### readGameCommand

재시작 여부 명령어를 입력받는다.

---

### OutputView

사용자에게 문구나 정보를 출력한다.

#### printStartingMessage

시작 문구를 출력한다.

#### printEndingMessage

종료 문구를 출력한다.

#### printInputErrorMessage

에러 문구를 출력한다.

#### printMap

이동 결과에 따른 지도를 출력한다.

#### printClear

게임 성공 여부를 출력한다.

#### printRunCount

총 시도 횟수를 출력한다.

#### printResult

종료 문구, 최종 지도, 성공 여부, 총 시도 횟수를 차례대로 출력한다.
