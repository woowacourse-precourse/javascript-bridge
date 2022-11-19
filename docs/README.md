## 기능 목록
- [x] 다리 길이 입력받기
  ```
  <예외 상황>
  - 3~20 사이의 수가 아닐 경우
  - 숫자가 아닐 경우
  ```

- [x] 입력받은 길이만큼 랜덤 다리 만들기

- [x] U/D 입력받기
  ```
  <예외 상황>
  - 다른 문자 입력한 경우
  - U나 D를 여러번 입력한 경우
  - 그냥 한 줄을 띄운 경우
  ```

- [x] 정답 계산하기
  - 틀린 경우 (0)
  - 문자는 같지만 아직 다리를 다 건넌 경우가 아닐 경우 (1)
  - 문자가 맞고 다리를 모두 건넌 경우 최종 정답 (2) -> 최종 게임 결과 출력하고 프로그램 종료
  

- [x] 다리 모양 출력하기
  - [x] 정답인 경우 O 표시, U/D 다시 입력받기
  - [x] 오답인 경우 X 표시, 재시도 여부 묻기 기능 실행
  - [x] 선택하지 않은 칸은 공백

- [x] 게임 실패하면 재시도 여부 묻기
  ```
  <예외 상황>
  - 다른 문자 입력한 경우
  - R또는 Q를 여러번 입력한 경우
  - 그냥 한 줄을 띄운 경우
  ```

- [x] 최종 게임 결과 출력 (다리 모양/성공 여부/시도 횟수)

- [x] 예외상황 발생 시, 종료하지 말고 다시 입력받아야 한다!

 <br />

## :file_folder: 파일 구조
```
src
 ┣ controller
 ┃ ┗ BridgeGameControl.js
 ┣ models
 ┃ ┣ AskRetry.js
 ┃ ┣ BridgeGame.js
 ┃ ┣ BridgeSize.js
 ┃ ┣ MakeMap.js
 ┃ ┗ MovingCheck.js
 ┣ utiles
 ┃ ┗ Constant.js
 ┣ view
 ┃ ┣ InputView.js
 ┃ ┗ OutputView.js
 ┣ App.js
 ┣ BridgeMaker.js
 ┗ BridgeRandomNumberGenerator.js
```

 <br />

## :sparkles: 각 파일의 기능
### App.js
- 애플리케이션 실행( = 시동)
- BridgeGameControl.start()로 다리 건너기 프로그램 실행

### controller/BridgeGameControl.js
- 다리 건너기 프로그램이 순서대로 진행하도록 컨트롤

### models/BridgeGame.js
- 움직임에 대한 정답 검사 및 재시작 입력 분류

### models/MakeMap.js
- 출력할 다리 모양을 만드는 기능

### models/AskRetry.js, BridgeSize.js, MoveingCheck.js
- 입력값에 대한 유효성 검사

### view/InputView.js
- 다리 길이, 움직임, 재시작 값을 입력받는 기능

### view/OutputView.js
- 시작 멘트, 에러 메시지, 다리 모양, 최종 결과를 출력하는 기능

### utils/Constant.js
- 상수들의 집합

### BridgeMaker.js, BridgeRandomNumberGenerator.js
- 랜덤 다리를 생성하는 기능

 <br />

## :white_check_mark: 테스트 목록
### ApplicationTest.js
- 전체 기능 테스트

### InputValueTest.js
- 다리 길이 입력값, U/D 입력값, R/Q 입력값의 유효성 로직을 테스트

### MakeBridgeTest.js
- 다리 생성 테스트
```
1. 입력한 길이에 맞는 다리 생성하는지 테스트
2. 1과 0이 올바른 문자로 바뀌는지 테스트
```

### UpDownAnswerTest.js
- 사용자가 입력한 값이 정답인지 검사하는 로직을 테스트
```
1. 모든 정답 맞은 경우
2. 현재 입력값이 정답인 경우 (아직 다리를 다 건넌게 아닐때)
3. 오답인 경우
```