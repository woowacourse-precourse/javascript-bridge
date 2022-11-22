# 🌉 우아한테크코스 4주 차 미션 - 다리 건너기

## 🚀 로또 미션 목표

1. 클래스(객체)를 분리하는 연습을 할 수 있다.
2. 기존 코드가 잘 동작하는 것을 테스트로 검증한 후 리팩터링을 진행할 수 있다.

---

## ➕ 추가된 요구 사항

- 함수(또는 메서드)의 길이가 `10라인`을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
- 메서드의 파라미터 개수는 최대 `3개`까지만 허용한다.
- 아래 있는 `InputView`, `OutputView`, `BridgeGame`, `BridgeMaker` 클래스(또는 객체)의 요구사항을 참고하여 구현한다.
  - 각 클래스(또는 객체)의 제약 사항은 아래 클래스별 세부 설명을 참고한다.
  - 이외 필요한 클래스(또는 객체)와 메서드는 자유롭게 구현할 수 있다.
  - `InputView` 에서만 `MissionUtils`의 `Console.readLine()`을 이용해 사용자의 입력을 받을 수 있다.
  - `BridegGame` 클래스에서 `InputView`, `OutputView`를 사용하지 않는다.

---

### InputView 객체

- 제공된 `InputView` 객체를 활용해 구현해야 한다.
- `InputView`의 파일 경로는 변경할 수 있다.
- `InputView`의 메서드의 인자는 변경할 수 있다.
- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

```javascript
const InputView = {
  readBridgeSize() {},

  readMoving() {},

  readGameCommand() {},
};
```

---

### OutputView 객체

- 제공된 `OutputView` 객체를 활용해 구현해야 한다.
- `OutputView`의 파일 경로는 변경할 수 있다.
- `OutputView`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 값 출력을 위해 필요한 메서드를 추가할 수 있다.

```javascript
const OutputView = {
  printMap() {},

  printResult() {},
};
```

---

### BridgeGame 클래스

- 제공된 `BridgeGame` 클래스를 활용해 구현해야 한다.
- `BridgeGame`에 필드(인스턴스 변수)를 추가할 수 있다.
- `BridgeGame`의 파일 경로는 변경할 수 있다.
- `BridgeGame`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

```javascript
class BridgeGame {
  move() {}

  retry() {}
}
```

---

### BridgeMaker 객체

- 제공된 `BridgeMaker` 객체를 활용해 구현해야 한다.
- `BridgeMaker`에 프로퍼티를 추가할 수 없다.
- `BridgeMaker`의 파일 경로는 변경할 수 없다.
- `BridgeMaker`의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

```javascript
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {},
};
```

---

### BridgeRandomNumberGenerator 객체

- Random 값 추출은 제공된 `BridgeRandomNumberGenerator`의 `generate()`를 활용한다.
- `BridgeRandomNumberGenerator`의 코드는 변경할 수 없다.

사용 예시

- 다리 칸을 생성하기 위한 Random 값은 아래와 같이 추출한다.

```javascript
const number = generateRandomNumber();
```

---

## 📉 다리 건너기 게임의 흐름

1. 게임이 시작한 뒤 다리의 길이를 입력한다.
2. 다리가 생성된다.
3. 플레이어는 이동할 칸을 선택한다.
4. 이동한 다리의 상태를 출력한다.
5. 다리를 끝까지 건너면 게임 종료 문구를 출력한 뒤 게임이 종료된다.
6. 다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있다.

---

## 📃 기능 목록

### 1️⃣ 기본 설정

- [x] docs: 다리 건너기 미션을 위한 기능 목록 작성

---

### 2️⃣ 다리 생성하기

- [x] feat: 게임 시작 문구 출력
- [x] feat: 다리의 길이를 입력받은 후 유효성 검사
  - 3 이상 20 이하의 숫자를 입력할 수 있다.
  - 숫자만 입력할 수 있다.
  - 정수만 입력할 수 있다.
- [x] feat: 다리의 길이가 올바른 값이 아닐 경우의 기능 구현
  - throw문을 사용해 예외를 발생시킨다.
  - [ERROR]로 시작하는 에러 메시지를 출력한다.
  - 다리의 길이를 다시 묻는 문구를 출력한다.
- [x] feat: 다리를 생성한다.
  - 0과 1중 무작위 값을 이용하여 건널 수 있는 칸을 정한다.
  - 위 칸을 건널 수 있는 경우 U, 아래 칸을 건널 수 있는 경우 D값으로 나타낸다.
  - 무작위 값이 0인 경우 아래 칸(D), 1인 경우 위 칸(U)이 건널 수 있는 칸이 된다.
- [x] feat: BridgeGame 인스턴스 생성
  - 생성한 다리를 인수로 전달한다.
  - BridgeGame 클래스 내 bridge 인스턴스 변수를 생성한다.
  - App 클래스 내 bridgeGame 인스턴스 변수를 생성한다.

---

### 3️⃣ 게임 진행하기

- [x] feat: 이동할 칸을 입력받은 후 유효성 검사
  - 이동할 때 위 칸은 대문자 U, 아래 칸은 대문자 D를 입력한다.
  - U, D만 입력할 수 있다.
- [x] feat: U, D가 아닐 경우의 기능 구현
  - throw문을 사용해 예외를 발생시킨다.
  - [ERROR]로 시작하는 에러 메시지를 출력한다.
  - 이동할 칸을 다시 묻는 문구를 출력한다.
- [x] feat: 다리 건너기 결과 출력
  - 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시한다.
  - 선택하지 않은 칸은 공백 한 칸으로 표시한다.
  - 다리의 시작은 [, 다리의 끝은 ]으로 표시하고 다리 칸의 구분은 | 문자열로 구분한다.
- [x] feat: 다리를 건널 수 없다면 게임 실패로 이동
- [x] feat: 다리를 건널 수 있으면 게임 실패 또는 모두 성공할 때 까지 반복
  - 현재까지 건넌 다리를 모두 출력한다.

---

### 4️⃣ 게임 실패

- [x] feat: 건널 수 없는 다리를 선택하면 게임 실패 문구 출력
- [x] feat: 재시작 또는 종료 입력을 입력받은 후 유효성 검사
  - 재시작은 대문자 R, 종료는 대문자 Q를 입력한다.
  - R, Q만 입력할 수 있다.
- [x] feat: U, D가 아닐 경우의 기능 구현
  - throw문을 사용해 예외를 발생시킨다.
  - [ERROR]로 시작하는 에러 메시지를 출력한다.
  - 이동할 칸을 다시 묻는 문구를 출력한다.

---

### 5️⃣ 게임 재시작하기

> 게임 재시작은 다리 건너기를 실패한 후 재시작(R)를 입력했을 때 실행된다.

- [x] feat: 게임 재시작
  - 처음부터 다시 시작한다.
  - 처음에 만든 다리를 재사용한다.
  - BridgeGame의 시도횟수를 1증가 시키고, 다리를 건너간 순서를 초기화한다.
  - 재시작을 할 경우 이동할 칸 선택 입력 메시지는 공백이 없다.

---

### 6️⃣ 게임 종료하기

> 게임 종료는 다리 건너기를 성공했거나 게임 실패 문구에서 종료를 선택했을 때 실행된다.

- [x] feat: 최종 게임 결과 출력
  - 진행한 다리 건너기 결과를 출력한다.
- [x] feat: 게임 성공 여부 출력
  - 성공 또는 실패를 출력한다.
- [x] feat: 총 시도한 횟수 출력
  - 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 출력한다.

---

### 7️⃣ 테스트

- [x] test: App.js 테스트 코드 작성
  - Console.print() 테스트 코드를 작성한다.
  - 사용자 입력값에 대한 유효성 검사 함수의 호출 테스트 코드를 작성한다.
  - 다리 생성 함수의 호출 테스트 코드를 작성한다.
  - 이동할 방향을 입력 후 다리 건너기 결과 맵을 출력하는 함수의 호출 테스트 코드를 작성한다.
  - bridgeGame 결과에 따른 함수 호출 테스트 코드를 작성한다.
  - 재시작 또는 종료 입력에 따른 함수 호출 테스트 코드를 작성한다.
  - app.restart() 테스트 코드를 작성한다.
  - app.quit() 테스트 코드를 작성한다.
- [x] test: BridgeGame.js 테스트 코드 작성
  - move 메서드 테스트 코드를 작성한다.
  - getBridgeCrossingResult 메서드 테스트 코드를 작성한다.
  - isFail 메서드 테스트 코드를 작성한다.
  - isLast 메서드 테스트 코드를 작성한다.
  - retry 메서드 테스트 코드를 작성한다.
  - getResult 메서드 테스트 코드를 작성한다.
- [x] test: BridgeMaker.js 테스트 코드 작성
  - 무작위 값을 생성해주는 함수 호출 테스트 코드를 작성을 작성한다.
  - 반환값 길이 테스트 코드를 작성한다.
  - 반환값 테스트 코드를 작성한다.
- [x] test: InputView.js 테스트 코드 작성
  - readBridgeSize 메서드 테스트 코드를 작성한다.
  - readMoving 메서드 테스트 코드를 작성한다.
  - readMoving 출력 문구 위 공백에 따른 테스트 코드를 변경한다.
- [x] test: OutPutView.js 테스트 코드 작성
  - printMap 메서드 테스트 코드를 작성한다.
  - printResult 메서드 테스트 코드를 작성한다.
- [x] test: Validation.js 테스트 코드 작성
  - checkBridgeSize 메서드 테스트 코드를 작성한다.
  - checkDirection 메서드 테스트 코드를 작성한다.
  - checkCommandOption 메서드 테스트 코드를 작성한다.
- [x] test: BridgeGameManager.js 테스트 코드 작성
  - 전체적인 게임 흐름을 테스트한다.

---

### 8️⃣ 리펙터링

- [x] refactor: 객체(또는 클래스) 분리하기
  - UI를 담당하는 로직은 View 폴더 내에서 관리한다.
  - 게임 진행을 담당하는 BridgeGameManager 클래스를 만들어 분리한다.
  - BridgeGameManager 클래스는 Model과 View를 연결하는 Controller의 역할을 한다.
  - 특정 기능을 지닌 객체 또는 로직은 libs 폴더 내에서 관리한다.
  - 상태 데이터가 변하는 객체(또는 클래스)는 Model 폴더 내에서 관리한다.
- [x] refactor: 변수명, 함수명 수정하기
- [x] refactor: 매직 넘버 상수화하기
  - libs/Constant.js 에서 매직 넘버를 상수화한다.
  - 해당 파일에서 생성된 객체는 MESSAGE, ERROR_MESSAGE, BRIDGE_SIZE, DIRECTION, COMMAND_OPTION, CROSSING_RESULT이고 UP_NUMBER는 상수이다.
  - MESSAGE, ERROR_MESSAGE의 매직 넘버를 상수로 바꾼다.
- [x] refactor: 함수(또는 메서드)가 한 가지의 일만 하도록 하기
  - 에러가 발생하였을 때 실행되는 함수를 분리한다.
  - BridgeGame를 생성하는 함수를 만들어 분리한다.
  - BridgeGame의 결과에 따른 실행을 함수로 만들어 분리한다.
  - 다리 건너기 결과를 출력하는 부분을 함수로 만들어 분리한다.
  - 플레이어가 입력한 gameCommand의 결과에 따른 실행을 함수로 만들어 분리한다.
  - 게임이 종료할 때 출력되는 결과 메시지의 실행을 함수로 만들어 분리한다.
  - 다리 건너기 결과를 가져오는 함수에서 결과를 구하는 로직을 함수로 만들어 분리한다.
  - 유효성 검사 함수에서 각 항목을 검사하는 부분을 함수로 만들어 분리한다.
- [x] refactor: 같은 기능을 하는 함수(또는 메서드)는 하나로 만들기
  - 시작 메시지와 오류 메시지를 출력하는 함수를 하나로 만든다.
- [x] refactor: test코드 리팩터링

---

## 🗂 디렉토리 구조

```bash
├── __test__
│   ├── ApplicationTest.js
│   ├── BridgeGameManagerTest.js
│   ├── BridgeGameTest.js
│   ├── BridgeMakerTest.js
│   ├── InputViewTest.js
│   ├── OutPutViewTest.js
│   ├── ValidationTest.js
├── docs
│   ├── README.md
├── node_modules
├── src
│   ├── libs
│   │   ├── Constant.js
│   │   ├── ErrorHandler.js
│   │   ├── Validation.js
│   ├── Model
│   │   ├── BridgeGame.js
│   ├── View
│   │   ├── InputView.js
│   │   ├── OutputView.js
│   ├── App.js
│   ├── BridgeGameManager.js
│   ├── BridgeMaker.js
│   ├── BridgeRandomNumberGenerator.js
├── .gitignore
├── .npmrc
├── .package-lock.json
├── package.json
└── README.md
```
