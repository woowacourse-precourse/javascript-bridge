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

- [x] refactor: InputView에 있던 예외 처리 함수를 분리
- Validations 파일 추가

- [x] refactor: bridgeGame의 필드 수를 줄이기 위해 isAnswer 삭제

  - 정답을 맞췄는 지 알려주는 함수를 추가

- [x] refactor: bridgeGame의 필드 isAnswer 추가

  - 기능상 오류로 isAnswer 필드 다시 추가
  - bridge Game의 함수 기능 분리

- [x] refactor: InputView의 함수 이름 수정

- [x] refactor: 파일 Import 순서 정렬

- [x] refactor: 파일명 파스칼 규칙으로 수정

- [x] refactor: 한 가지 함수가 한 가지 기능만 하도록 수정

  - 에러 메세지와 함수를 호출 하는 Util 함수 추가

- [x] refactor: InputView에 있던 함수를 다른 클래스로 분리
- bind를 이용하여 InputView의 목적에 맞지 않던 함수 분리

### 테스트

- [x] test: 사용자 입력 예외 함수 테스트 파일 추가
- [x] test: 다리 건너기 게임 함수 테스트 파일 추가
- [x] test: 다리 건너기 게임 테스트 파일 추가
- [x] test: 다리 건너기 게임 예외 케이스 추가
