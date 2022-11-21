### 기능 목록

1. [x] 다리 길이 입력받기 (InputView.readBridgeSize())

   - [x] 3 이상 20 이하의 숫자 이외의 입력은 오류 발생(BridgeMaker.canMakeBridge)
   - [ ] "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

2. [x] 다리 만들기 (BridgeMaker.makeBridge())

3. [x] 이동할 칸 입력받기 (InputView.readMoving())

   - [x] U,D 이외의 입력은 오류 발생 (InputView.isValidMoving())
   - [ ] "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

4. [x]이동할 칸의 상태(U, D)와 입력값 비교하기

   - [x] 입력받은 위치정보(U / D), 다리와의 일치 여부(Boolean) 반환 (BrideGame.canMove)
   - [x] 맵 채우기 (BridgeGame.fillMap)

5. 움직임의 결과(O,X)와 다리의 위치값(0,1)를 활용해 출력만들기 (OutputView.printMap)

   - [x] 배열 형태로 결과값 저장하기 (BridgeGame.fillMap)
   - [x].join(" | ")으로 묶어 string 처리해주기 (BridgeGame.printMap)

6. [x] 이동 불가시, 게임 재시도 여부 입력받기 (InputView.readGameCommand())

   - [x] R 입력시,재시도 (BridgeGame.retry)
     - [x] 다시 이동할 칸 입력받기(InputView.readMoving)
     - [x] 시도한 횟수 누적하기 (BridgeGame.#retryCount)
     - [x] 게임 위치 0으로 초기화 (BridgeGame.#currendIdx)
     - [x] 다리맵 [[],[]] 으로 초기화 (BridgeGame.#bridgeMap)
   - [x] Q 입력시, 게임 종료 (OutputView.printResult)
   - [ ] "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

7. [x] 이동 가능시, 다음 이동할 칸 입력받기 (InputView.readMoving)

   - [x] 성공할시 게임종료(OutputView.printResult)

8. [x]성공, 게임 종료할시 '최종 게임 결과' 출력하기(OutputView.printResult)
   - [x] 게임 성공 여부 출력하기
   - [x] 시도한 횟수 출력하기
