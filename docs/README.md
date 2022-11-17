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

- Bridge
  - validate
  - setBridge
  - getLength
  - getBridge
- BridgeGame
  - validate
  - getSelected
  - getLength
  - getResult
  - getTryCnt
  - move
  - retry

# function

- InputView
  - readBridgeSize
  - readMoving
  - readGameCommand
- OutputView
  - printMap
  - printLine
  - setMesage
  - getMessageBody
  - getMessageElement
  - printResult
- BridgeMaker
- BridgeRandomNumber
