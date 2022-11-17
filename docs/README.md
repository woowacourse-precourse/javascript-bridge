# 기능 목록

## 1. `InputView`의 `readBridgeSize()`를 통해 다리의 길이를 입력받는 기능 구현

- `BridgeGame`에 `create()`를 만들어서 `readBridgeSize()`를 호출한다.

## 2. `BridgeMaker`의 `makeBridge()`를 통해 다리를 생성하는 기능 구현

- `BridgeRandomNumberGenerator`의 랜덤값 생성을 통하여 구현한다
- `makeBridge`의 인자로 size와 generateRandomNumber를 받아오기 때문에,
  `BridgeGame`에서 `BridgeRandomNumberGenerator`를 로드해야하지 않을까?
- 생성된 다리는 `#Bridge` 에 저장해준다.

## 3. `InputView`의 `readMoving()`을 통해 이동 입력을 받는 기능 구현

- 값이 유효한지 확인한다.
- `BridgeGame`의 `move()`에서 해당 함수를 호출한다.

## 4. 입력받은 이동 입력을 바탕으로 생성된 Bridge의 값과 일치하는지 비교하는 기능 구현

- `BridgeGame`의 `#Bridge`를 바탕으로 입력받은 이동 입력을 인덱스로하는 `#Bridge`의 값을 확인한다.
- 해당하는 `#Bridge`의 값이 0이라면 false 를, 1이라면 true를 반환하게 하면 될듯.
- 해당 기능은 Utils로 따로 분리하여 작성하는게 좋을 듯 하다.

## 5. `OutputView`의 `printMap()`을 통해 이동한 결과값을 출력하는 기능 구현

- `printMap()`의 인자로 성공, 실패여부를 담은 배열을 넘겨주면 될 듯 하다.
- 이동이 끝날 때 마다 출력해야함.

## 6. 이동 실패 시 재시작하는 기능 구현

- `#Bridge`의 값이 0일 때 재시작 여부를 묻는 입력이 필요, 해당 입력은 `InputView`의 `readGameCommand()` 사용
- 해당 입력값이 유효한지 확인한다.
- 유효하다면 '다리를 재생성하지 않고' 게임을 재시작한다.

## 7. 게임 성공 여부, 총 시도횟수를 출력하는 기능 구현

- `BridgeGame`에 `#tried`를 생성하여 게임 최초 시작시 1, 이후 재시작시마다 1을 더해준다
- `BridgeGame에서 `현재 상황을 나타내는 `currentLevel` 변수를 만들어 `currentLevel`이 다리의 길이가 같으면 성공, 아니면 실패
- 성공 실패여부를 `OutputView`의 `printResult` 인자로 넘겨주어 출력한다.
