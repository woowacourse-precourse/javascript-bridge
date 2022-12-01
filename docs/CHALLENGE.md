# 챌린지 목표

- [] else 지양(if 조건절에서 값을 return하는 방식으로 구현)
- [] 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분
- [] 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현
- [] 메서드의 파라미터 개수는 최대 3개까지만 허용
- [] InputView, OutputView, BridgeGame, BridgeMaker 클래스(또는 객체)의 요구사항을 참고하여 구현
  - [] 각 클래스(또는 객체)의 제약 사항은 아래 클래스별 세부 설명을 참고
  - [] InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
  - [] BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.

## InputView 객체

- [] 제공된 InputView 객체를 활용해 구현
- [] InputView의 파일 경로는 변경가능
- [] InputView의 메서드의 인자는 변경가능
- [] 사용자 값 입력을 위해 필요한 메서드를 추가가능

```js
const InputView = {
  readBridgeSize() {},

  readMoving() {},

  readGameCommand() {},
};
```

## OutputView 객체

- [] 제공된 OutputView 객체를 활용해 구현
- [] OutputView의 파일 경로는 변경가능
- [] OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경가능
- [] 값 출력을 위해 필요한 메서드를 추가가능

```js
const OutputView = {
  printMap() {},

  printResult() {},
};
```

## BridgeGame 클래스

- [] 제공된 BridgeGame 클래스를 활용해 구현
- [] BridgeGame에 필드(인스턴스 변수)를 추가가능
- [] BridgeGame의 파일 경로는 변경가능
- [] BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경가능
- [] 게임 진행을 위해 필요한 메서드를 추가 하거나 변경가능

```js
class BridgeGame {
  move() {}

  retry() {}
}
```

## BridgeMaker 객체

- [] 제공된 BridgeMaker 객체를 활용해 구현
- [] BridgeMaker에 프로퍼티를 추가불가능
- [] BridgeMaker의 파일 경로는 변경불가능
- [] BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경 불가능

```js
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {},
};
```

## BridgeRandomNumberGenerator 객체

- [] Random 값 추출은 제공된 BridgeRandomNumberGenerator의 generate()를 활용
- [] BridgeRandomNumberGenerator의 코드는 변경불가능
- []

```js
const number = generateRandomNumber();
```

- [] MissionUtils 라이브러리에서 제공하는 Console API를 사용하여 구현
  - [] 사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용
