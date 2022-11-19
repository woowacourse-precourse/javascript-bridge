> InputView에서만 `Console.readLine()` 사용가능
>
> BridgeGame 클래스에서 InputView, OutputView 사용 불가
>
> 메서드의 파라미터 개수는 최대 3개까지만 허용
>
> 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현

# MVC 패턴으로 기능 구현

## Model

- BridgeGame

## View

- InputView
- OutputView

## Controller

- BridgeGameController

## utils

- BridgeMaker
- BridgeRandomNumberGenerator

## constants

- gameSetting
- error
- message

<br>
<br>

# 기능 목록

## InputView

> 제공된 InputView 객체를 활용해 구현해야 한다.
>
> InputView의 파일 경로는 변경할 수 있다.
>
> InputView의 메서드의 인자는 변경할 수 있다.
>
> 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

- [ ] 다리의 길이를 입력받는다.
  - 다리 길이는 3~20 사이의 숫자
- [ ] 이동할 칸을 입력받는다.
  - 위: U / 아래: D
- [ ] 게임을 다시 시도할지 여부를 입력받는다.
  - 재시작: R / 종료: Q

## OutputView

> 제공된 OutputView 객체를 활용해 구현해야 한다.
>
> OutputView의 파일 경로는 변경할 수 있다.
>
> OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
>
> 값 출력을 위해 필요한 메서드를 추가할 수 있다.

- [ ] 게임 시작 문구
- [ ] 게임 종료 문구
  - 게임 성공 여부
  - 총 시도한 횟수
- [ ] 다리 건너기 결과 출력 문구
  - 이동할 수 있는 칸을 선택한 경우 O 표시
  - 이동할 수 없는 칸을 선택한 경우 X 표시
  - 선택하지 않은 칸은 공백 한 칸으로 표시
  - 다리의 시작은 [, 다리의 끝은 ]으로 표시
  - 다리 칸의 구분은 |(앞뒤 공백 포함) 문자열로 구분
  - 현재까지 건넌 다리를 모두 출력

## BridgeGame

> 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
>
> BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
>
> BridgeGame의 파일 경로는 변경할 수 있다.
>
> BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
>
> 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

- [x] 이동하는 기능
- [x] 재시작하는 기능
  - 재시작해도 처음에 만든 다리로 재사용함
- [x] 이동에 성공했는지 확인하는 기능
- [x] 생성된 다리와 건넌 다리의 길이 비교하는 기능
- [x] 시도 횟수를 알려주는 기능

## BridgeMaker

> 제공된 BridgeMaker 객체를 활용해 구현해야 한다.
>
> BridgeMaker에 프로퍼티를 추가할 수 없다.
>
> BridgeMaker의 파일 경로는 변경할 수 없다.
>
> BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

- [ ] 다리 생성하기

## BridgeGameController

- [ ] OutputView의 시작 문구 출력 메서드 호출
- [ ] InputView의 이동할 칸 입력 메서드 호출
  - OutputView의 결과 출력 문구 메서드 호출
- [ ] BridgeGame의 성공 여부가 참이면 OutputView의 게임 종료 문구 메서드 호출
- [ ] BridgeGame의 길이 비교 메서드 호출
  - 참이면서 실패하지 않고 이동했으면 InputView의 게임 종료 문구 메서드 호출
  - 거짓이면서 실패하지 않고 이동했으면 InputView의 이동할 칸 입력 메서드 호출
  - 거짓이면서 실패했으면 InputView의 다시시도 여부 입력 메서드 호출
    - 다시시도 시 BridgeGame의 retry 메서드 호출 및 InputView의 이동할 칸 입력 메서드 호출
    - 종료 시 OutputView의 게임 종료 문구 메서드 호출

## 예외처리

> 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

- [x] 다리 길이 입력 시 3~20의 숫자가 아닌 경우
- [x] 이동할 칸 입력 시 'U' 또는 'D' 중 하나를 입력하지 않은 경우
- [x] 게임 재시작/종료 여부 입력 시 'R' 또는 'Q' 중 하나를 입력하지 않은 경우
