# 구현 순서

1. 기능 리스트 작성
2. 리스트에 맞게 기능 구현
3. 구현 로직에 대한 테스트 작성
4. 리팩토링

# 구현 로직

1. 다리를 생성

- 길이만큼의 0과1로 구성된 문자열 생성

2. 사용자 플레이

- 입력값을 받는다.
- 다리에서와 입력값과의 비교

3. 성공 또는 실패

# 기능리스트

- 다리를 생성
- 이동할 칸 입력을 받는다.
- 게임 다시시도에 관한 입력값을 받는다.

## 입력 & 출력

- 다리길이 입력
- 이동할 칸 선택
- 이동 한 후 다리 결과 출력
- 다시시도 여부 선택

- 최종 게임결과

# class

## Model

- Bridge: 3이상 20이하의 number를 input으로 받아 랜덤으로 생성된 bridge를 관리

  - #validate
  - get length
  - getElement
  - setBridge

- Selected: 사용자가 입력한 "U"또는 "D"값을 관리한다.

  - #validate
  - get level
  - getElement
  - addElement
  - reset

- Try: 사용자의 시도 횟수를 관리한다.
  - get cnt
  - add
  - reset

## Controller

- BridgeGame

  - #validate
  - get levelCnt
  - get tryCnt
  - setInitialResultMap
  - resetSelectedAndAddTryCnt
  - isWin
  - getResultMap
  - setResultMap
  - setResultElement
  - setBoolean

  - move
  - retry

# function

- InputView
  - readBridgeSize
  - readMoving
  - isReMoving
  - readGameCommand
- OutputView
  - printMap
  - getPrintLine
  - getMessageElement
  - isLastLine
  - printResult
- BridgeMaker
  - makeBridge
- BridgeRandomNumber
  - generate

# 예외 상황

## Bridge

### 입력 값 예외

- 문자가 입력되는 경우
- 3미만, 20초과의 숫자가 입력되는 경우
- 띄어쓰기가 있는경우
- 값이 없는 경우

## Selected

### 입력값 예외

- 소문자가 입력된 경우
- 숫자가 입력된 경우

## Game

### 입력값 예외

- 소문자가 입력된 경우
- 숫자가 입력된 경우
