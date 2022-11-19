### 리팩토링

- [x] refactor: BridgeGame의 다리 건너기 이동 결과 함수 분리

  - 한 함수가 한 가지 행동만 하도록 분리
  - max-line이 10줄 이내로 되도록 분리

- [x] refactor: OutputView의 결과 출력 함수 가독성 향상 및 분리

- [x] refactor: InputView의 함수 분리 및 매개변수 변경

  - InputView의 함수 길이가 10이 넘어가던 함수 수정
  - InputView의 매개변수를 BridgeGame 클래스로 변경

- [x] refactor: Utils와 BridgeGame ,constant 리팩토링
  - Utils의 readLine 함수 기능 구현
  - InputView에 있던 재시작 함수를 BridgeGame의 retry으로 이동
  - constant의 GAME_BOOLEAN 추가
