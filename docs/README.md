## 🚀 게임 구현

### 게임 실행

- App.play()로 게임 실행

- InputView를 통해 다리 길이를 입력

- > 3 이상 20 이하의 숫자를 입력할 수 있으며 올바른 값이 아니면 예외 처리

- BridgeMaker를 통해 Bridge를 생성

### 게임 진행

- InputView를 통해 이동할 다리를 입력

- > U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리

- 생성되어 있던 Bridge의 배열과 비교

- - 이동할 수 있는 경우 : 입력한 자리에 'O'를 출력하고, 다시 InputView를 통해 이동할 다리를 입력

- - 이동할 수 없는 경우 : 입력한 자리에 'X'를 출력하고, InputView를 통해 게임 재시도 여부를 입력

- - > R(재시작)과 Q(종료) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리

### 게임 종료

- 최종 게임 결과를 출력

- 시도 횟수를 출력

---

--- 

## 🚀 기능 목록

### 1. Bridge 구현

- Bridge class의 구성 { string[] bridge, int tryCount, bool isClear }

---

### 2. BridgeMaker 구현

- Parameter로 전달받은 숫자 만큼 랜덤 숫자를 생성하고, 이 숫자에 따라 "U", "D"로 구성된 string 배열을 생성

- > 입력된 size가 3 이상 20 이하의 숫자가 아닌 경우 예외 처리한다.

- > BridgeRandomNumberGenerator 사용

- Bridge에 생성한 string배열, tryCount : 0, isClear : false를 전달하여 새 Bridge 클래스를 생성

---

### 3. InputView 구현

- readBridgeSize() : 생성할 bridge의 크기를 입력받는다.

- > 3 이상 20 이하의 숫자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.

- readMoving() : 라운드마다 플레이어가 이동할 칸을 입력 받는다. 

- > U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.

- readGameCommand() : 게임 재시작/종료 여부를 입력 받는다. 

- > R(재시작)과 Q(종료) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.

---

### 4. BridgeGame 구현

- 현재 라운드 수와 위와 아래 다리의 이동상태를 저장하는 instance를 추가한다.

- InputView의 readMoving() method를 통해 값을 입력받는다.

- > U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.

- 현재 라운드의 입력받은 값과 bridge를 비교하여 valid 여부를 확인한다.

- - valid : 입력한 자리(위||아래)에 'O'를 저장하고, 다른 자리에 공백을 저장한다.

- - !valid : 입력한 자리(위||아래)에 'X'를 저장하고, 다른 자리에 공백을 저장한다. InputView.readGameCommand()를 통해 게임 재시도 여부를 입력받는다.

- OutputView를 통해 입력받았던 값과 현재 다리 상태를 출력한다.

- 다리를 완전히 건넜거나 재시도를 거부했을 경우 OutputView를 통해 결과를 출력한다.

- valid의 여부에 따라 while문을 통해 계속 이동할 칸을 입력받는다.

---

### 5. OutputView 구현

- printMap() : BridgeGame의 이동상태를 인자로 받아 출력한다.

- printResult() : Bridge의 isClear상태와 triCount를 인자로 받아 출력한다.