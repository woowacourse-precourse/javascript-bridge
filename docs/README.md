# 설명

```
입력한 숫자 만큼 랜덤으로 구멍이 있는 2줄짜리 다리를 만들고
이동을 첫째줄(U) 또는 둘째줄(D)로 할지 선택하면
다리 건너기를 실패할지 성공할지 알려줍니다.
실패한다면 기존 다리로 처음부터 다시 이동(R)하거나 종료합니다(Q).
```

# 사용법

[code runner 설치](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

```
node "YOUR_PATH/javascript-lotto/src/App.js"
```

# 기능 목록

BridgeGame

- 다리 길이를 숫자로 입력받는다. (InputView.readBridgeSize -> BridgeSize)
  - 다리 길이 유효성 검증 (BridgeSize.js)
  - 입력 받은 숫자 길이 만큼 다리를 생성한다. (BridgeMaker.makeBridge <- Map <- Stage)
  - 이동할 칸을 입력받는다. : U 또는 D (InputView.readMoving -> Moving)
    - 이동할 칸 유효성 검증(Moving.js)
    - 이동한 칸을 출력한다. (OutputView.printMap)
    - 성공 실패 여부를 반환 받는다. (BridegeGame.matchResult)
    - 성공시 칸 이동을 계속해서 다시 시작한다.(BridgeGameControl.move 재귀)
      - 시도 횟수를 카운트 한다.
    - 실패시 재시작하는지 종료하는지 입력받는다. R 또는 Q (InputView.readGameCommand -> GameCommand)
      - 재시작 및 종료 입력 유효성 검증(GameCommand.js)
      - Q 라면 게임 결과를 출력한다. (OutputView.printResult)

# 자료구조 설명

```
model Map은 다리를 나타냅니다. Map에는 각 단계(model Stage)가 있으며 Stage는 각 단계에 대한 property를 가집니다.

다리 길이가 5일때 자료구조

Map{
  1 : Stage 인스턴스, <- currentPosition
  2 : Stage 인스턴스,
  3 : Stage 인스턴스,
  4 : Stage 인스턴스,
  5 : Stage 인스턴스,
}

이동할때마다 currentPosition이 1씩 늘어나며 Stage가 바뀝니다.
```

# 클래스 설명

## 1. App.js : 시작 트리거를 날립니다.

## 2. controller : 조작 기능을 담당합니다.

- BridgeGameControl.js : 전체적인 조작을 담당합니다. 위에서 설명한 Map 자료구조을 만들고 이동 및 게임 종료 재시작을 조작합니다.

- BridgeGame.js : 이동(move) 및 재시작(retry) 세부 기능을 담당합니다.

## 3. model : 데이터 및 자료구조를 정의하거나 유효성 검증을 합니다.

- BrigeSize.js : 입력받은 다리 길이에 대하여 validate를 수행합니다.

- Moving.js : 입력받은 이동 명령어에 대하여 validate를 수행합니다.

- GameCommand.js : 입력받은 재시작 및 종료 명령어에 대하여 validate를 수행합니다.
- Map.js : 다리를 Object 로 나타냅니다. Object.1 은 첫번째 스테이지 인스턴스를 나타냅니다.
- Stage.js : 각 단계를 인스턴스로 나타내며 Map Object의 value로 할당합니다.

## 4. view : model 데이터에 입력하거나 데이터로 출력합니다.

- InputView.js : 사용자 입력에 대한 기능입니다.

- outputView.js : 출력에 대한 기능입니다.

# 궁금한 것

model 클래스는 사용자가 입력한 데이터를 그대로 가져와 내부에서 처리해야하는가? -> validate를 위해서. 그런데 3주차 lotto 클래스에서는 숫자로 받은 걸까?
