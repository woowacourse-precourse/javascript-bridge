# 구현할 기능 정리

1. 3~20사이의 다리의 길이 입력 함수 (InputView)

```
    3~20이 아닌 숫자가 입력되면 예외처리
```

- App

  여기서 게임을 시작해야함

- BridgeGame

  클래스를 활용해 구현해야 함. 필드 추가 가능.
  파일 경로 변경 가능. 메서드의 이름 변경 불가능.
  인자는 필요에따라 추가 및 변경 가능.

- BridgeMarker

  객체를 활용해 구현해야 함. 프로퍼티 추가 불가능.
  파일 경로 변경 불가능. 메서드의 시그니처(인자, 이름)와 반환 타입은 변경 불가능.

- BridgeRandomNumberGenerator

  Random 값 추출은 제공된 `BridgeRandomNumberGenerator`의 generate()
  를 활용. `BridgeRandomNumberGenerator의 코드 변경 불가능.

- InputView

  메서드 인자 변경 가능. 사용자 값 입력을 위해 필요한 메서드 추가 가능.

- OutputView

  파일 경로 변경 가능. 이름 변경 불가능.
  인자는 필요에 따라 추가하거나 변경할 수 있음.
  값 출력을 위해 필요한 메서드 추가할 수 있음.

- test

  ApplicationTest
  내가 단위테스트 만들어야 함.
