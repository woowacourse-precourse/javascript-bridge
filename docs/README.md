# 기능 목록

## 1. `InputView`의 `readBridgeSize()`를 통해 다리의 길이를 입력받는 기능 구현

## 2. `BridgeMaker`의 `makeBridge()`를 통해 다리를 생성하는 기능 구현

- `BridgeRandomNumberGenerator`의 랜덤값 생성을 통하여 구현한다
- `makeBridge`의 인자로 size와 generateRandomNumber를 받아오기 때문에,
  `inputView`에서 `makeBridge`를 호출 할 때 콜백함수로 `BridgeRandomNumberGenerator`를 넣어준다.

## 3. `InputView`의 `readMoving()`을 통해 이동 입력을 받는 기능 구현

- 값이 유효한지 확인한다.
- `BridgeGame`의 `move()`에서 해당 함수를 호출한다.
- 입력받은 값에 따라 통과여부, 클리어 여부를 확인한다.
- 클리어했다면 `BridgeGame`의 `retry()` 호출.

## 4. 입력받은 이동 입력을 바탕으로 생성된 Bridge의 값과 일치하는지 비교하는 기능 구현

## 5. `OutputView`의 `printMap()`을 통해 이동한 결과값을 출력하는 기능 구현

- `printMap()`의 인자로 단계 진행 성공, 실패여부를 담은 배열을 넘겨주면 될 듯 하다.
- 이동이 끝날 때 마다 출력.

## 6. 이동 실패 시 재시작하는 기능 구현

- `InputView`의 `readGameCommand()` 사용하여 재시작 기능 구현
- 해당 입력값이 유효한지 확인한다.
- 유효하다면 다리를 재생성하지 않고 게임을 재시작한다.

## 7. 게임 성공 여부, 총 시도횟수를 출력하는 기능 구현

- 재시작 카운트를 만들어, 게임 최초 시작시 1, 이후 재시작시마다 1을 더해준다
- 클리어 성공, 실패를 `OutputView`의 `printResult` 인자로 넘겨주어 출력한다.

# 리팩토링

- 하드코딩된 부분들을 `Constants` 폴더에 상수 파일들을 생성하여 분리.
- 비구조화할당 되어있지 않던 함수들을 비구조화 할당.
- 유효성 검사 함수들을 `Utils/Validation.js`로 분리 예정
