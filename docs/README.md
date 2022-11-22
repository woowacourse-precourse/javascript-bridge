# 🌉 미션 - 다리 건너기

## 🔍 구현 목록

### 프로그램 순서

1. 게임을 시작합니다. ( ✅ )
2. 다리의 길이를 입력합니다.( ✅ )
   - ❗️ 3이상 20이하의 숫자가 아닐 경우 에러 메세지를 출력합니다. ( ✅ )
3. 새로운 다리를 만듭니다.( ✅ )
4. 이동 방향을 묻습니다. ( ✅ )
   - ❗️ U와 D 이외의 문자 입력이 있을 경우 에러 메세지를 출력합니다. ( ✅ )
5. 다음 칸으로 이동합니다. ( ✅ )
6. 다리 그림을 출력합니다. ( ✅ )
7. 게임 결과 상태를 확인합니다. ( ✅ )
   1. 진행 중 -> "\[4\]이동방향을 묻습니다."으로 돌아갑니다. ( ✅ )
   2. 성공 시 -> `[종료]결과를 출력합니다.(다리 그림, 게임 성공 여부, 총 시도한 횟수)` ( ✅ )
   3. 실패 시 -> 재시작 여부를 묻습니다. ( ✅ )
      1. 재시작 시 -> "\[4\]이동방향을 묻습니다."으로 돌아갑니다. 단, 시행횟수를 증가시키고, 다리의 처음 칸부터 다시 시작합니다. ( ✅ )
      2. 종료 시 -> `[종료]결과를 출력합니다.(다리 그림, 게임 성공 여부, 총 시도한 횟수)` ( ✅ )
   - ❗️ R과 Q 이외의 문자 입력이 있을 경우 에러 메세지를 출력합니다. ( ✅ )

### 프로그램 순서도

![순서도](./images/순서도.png)

## 🗂️ 디렉토리

```
├─ __tests__
│  ├─ ApplicationTest.js
│  ├─ bridgeGame.test.js
│  ├─ bridgeMaker.test.js
│  ├─ outputview.test.js
│  └─ validator.test.js
└─ src
   ├─ App.js
   ├─ BridgeGame.js
   ├─ BridgeMaker.js
   ├─ BridgeRandomNumberGenerator.js
   ├─ Controller.js
   ├─ Validator.js
   ├─ utils
   │  ├─ constant.js
   │  └─ message.js
   └─ views
      ├─ InputView.js
      └─ OutputView.js
```

## 🎛️ 기능 목록

### inputView

- readBridgeSize: 사용자로부터 다리의 길이를 입력 받습니다.
- readMoving: 사용자로부터 이동 방향을 입력 받습니다.
- readGameCommand: 사용자로부터 종료/재시작 명령을 입력 받습니다.

### outputView

- printMap: 다리 이동에 따른 결과를 그림으로 출력합니다.
- getBridgeMap: BridgeGame에서 유저가 게임에서 이동을 시도했던 정보들을 바탕으로 BridgeMap을 만듭니다.
- newLine: 개행을 해줍니다.
- printError: 에러 메세지를 출력합니다.
- printResult: 최종 게임 결과 내용을 출력합니다.
- getTemplate: 최정 게임 결과 템플릿을 통해 정보를 입력하여 결과지를 만듭니다.

### Validator

- check: 입력 종류에 따라 해당 값이 유효한지 검사하는 함수를 반환합니다.
- checkBridgeSize: 다리의 길이 입력 값을 검사합니다.
- checkMoving: 이동 방향 입력 값을 검사합니다.
- checkGameCommand: 게임 명령 입력 값을 검사합니다.

### Controller

**View단과 Model(Service)단에 있는 모듈을 생성자로 받아 게임 진행에 따라 제어권을 넘겨줍니다.**

- start: 게임 시작 메세지를 출력하고 다리의 길이를 입력 받습니다.
- askBridgeSize: 다리의 길이를 입력 받습니다.
- handleMakingBridge: 입력 받은 다리 길이를 토대로 검증 후에 다리를 생성합니다.
- askMoveDirection: 이동 방향을 입력 받습니다.
- handleMoving: 입력 받은 이동 방향을 토대로 검증 후에 이동합니다.
- askGameCommand: 게임 종료/재시작 명령을 받습니다.
- handleGameCommand: 입력 받은 명령을 토대로 검증 후에 실행합니다.
- end: 게임 결과를 출력하고 종료합니다.
- validateBy: 입력 정보를 검증합니다.
- retry: 게임을 재시작합니다.

### BridgeRandomNumberGenerator

- generate: 0과 1사이의 숫자를 무작위로 반환합니다.

### BridgeMaker

- makeBridge: 다리의 스테이지별로 정답이 적혀있는 배열을 반환합니다.

### BridgeGame

- setBridge: 다리 정답이 적혀있는 배열을 프로퍼티에 저장합니다.
- move: 다리 이동에 따른 정보를 업데이트합니다.
- updateStatus: 현재 게임 상황(진행중/실패/성공)을 업데이트 합니다.
- updateTrialList: 유저의 다리 이동 시도를 스테이지별로 기록합니다.
- retry: 유저가 재시작할 경우 전체 시도횟수를 1 더하고 이전의 스테이지별 시도 정보를 초기화한 후에 게임 상황을 진행중으로 변경합니다.

## TIL

| 목록 | 링크                                | 키워드                        |
| ---- | ----------------------------------- | ----------------------------- |
| 1️⃣   | [🧩 22일차 TIL](DAY22_221116.md)    | `this` `private` `객체`       |
| 2️⃣   | [🧩 23일차 TIL](DAY23_221117.md)    | `eslint` `Set.has()` `MVC`    |
| 3️⃣   | [🧩 24일차 TIL](DAY24_221108.md)    | `jest mock` `jest Spyon`      |
| 4️⃣   | [🧩 25일차 TIL](DAY25_221119.md)    | `객체` `테스트하기 좋은 코드` |
| 5️⃣   | [🧩 26일차 TIL](DAY26_221120.md)    | `피드백` `테스트코드`         |
| 6️⃣   | [🧩 27일차 TIL](DAY27_221121.md)    | `다형성` `else`               |
| 7️⃣   | [🌠 4주차 회고](DAY28_4주차회고.md) | `회고`                        |
