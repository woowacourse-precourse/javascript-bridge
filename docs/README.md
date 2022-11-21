## 🚩 기능 목록

### App

#### play

#### createGame

#### runGame

### BridgeGame

#### getIndex

#### getMatchSymbol

#### move

#### makeMapData

#### getMap

#### isCleared

#### isEnded

#### retry

### BridgeMaker

#### makeBridge

### BridgeRandomNumberGenerator

### InputView

#### readBridgeSize

#### readMoving

#### readGameCommand

### OutputView

#### printHello

#### printMap

#### printCleared

#### printRunCount

#### printResult

---

## 🚌 기능 흐름

### 앱 구동(App; play)

- 시작 문구 출력
- 다리 길이 입력

### 시작 문구 출력(OutputView; printHello)

### 다리 길이 입력(InputView; readBridgeSize)

- [ERROR]: 입력이 3 이상 20 이하의 정수가 아닐 경우
- 다리 생성
- 게임 생성

### 다리 생성(BridgeMaker; makeBridge)

- 다리 길이와 같은 크기의 배열 생성
- 배열 각 원소:
  - 무작위 숫자 생성
  - 숫자가 0이면 "U", 1이면 "D"를 배열에 저장
- 배열 반환

### 무작위 숫자 생성(BridgeRandomNumberGenerator; generateRandomNumber)

- 0 또는 1을 반환

### 게임 생성(App; createGame)

- 게임 인스턴스 생성
- 게임 실행

### 게임 인스턴스 생성(new BridgeGame)

### 게임 실행(App; runGame)

- 이동 방향 입력

### 이동 방향 입력(InputView; readMoving)

- [ERROR]: 입력이 "U"나 "D"가 아닐 경우
- 다리 건너기
- 이동 결과 출력
- 조건: 이동 실패
  - 사실
    - 재시작 여부 입력
  - 거짓
    - 조건: 다리 건너기 완료
      - 사실
        - 최종 결과 출력
      - 거짓
        - 이동 방향 입력

### 다리 건너기(BridgeGame; move)

- 건너야 할 다리 번호 구하기
- 이동 결과 표시 구하기
- 필드에 건넌 다리 방향과 결과 표시 저장하기

### 건너야 할 다리 번호 구하기(BridgeGame; getIndex)

### 이동 결과 표시 구하기(BridgeGame; getMatchSymbol)

- 이동 가능한 방향과 실제 이동한 방향이 같다면 "O"를, 아니면 "X"를 반환

### 이동 결과 출력(OutputView; printMap)

- 이동 결과 지도 가져오기
- 출력하기

### 이동 결과 지도 가져오기(BridgeGame; getMap)

- 이동 결과 정보 생성하기
- 위쪽과 아래쪽으로 나누기
- 둘을 담은 객체 반환하기

### 이동 결과 정보 생성하기(BridgeGame; makeMapData)

### 이동 실패 판단(BridgeGame; isCleared)

- 마지막 이동 결과 표시가 "X"라면 true를, 아니면 false를 반환

### 재시작 여부 입력(InputView; readGameCommand)

- [ERROR]: 입력이 "R"이나 "Q"가 아닐 경우
- 조건: 입력이 R일 경우
  - 사실
    - 재시작
  - 거짓
    - 최종 결과 출력

### 재시작(BridgeGame; retry)

- 이동 결과 초기화
- 시도 횟수 +1
- 게임 실행

### 최종 결과 출력(OutputView; printResult)

- 완료 문구 출력
- 이동 결과 출력
- 성공 여부 출력
- 시도 횟수 출력

### 성공 여부 출력(OutputView; printCleared)

### 시도 횟수 출력(OutputView; printRunCount)

### 다리 건너기 완료 여부 구하기(BridgeGame; isEnded)
