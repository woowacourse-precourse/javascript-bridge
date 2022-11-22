# 미션 - 다리 건너기

## [기능 요구 사항]

---
 1. play() 게임 실행
 2. settingGame()
    - 다리 길이 설정(사용자 입력) readBridgeSize() / InputView.js (예외1)
    - 다리 생성(0, 1 무작위 값으로 설정) makeBridge() / BridgeMaker.js
      * bridges 배열에 0: 아래(D), 1: 위(U)로 재 설정된 값 넣기
 3. startGame()
    - 게임 시작 bridgeGame에 위에 생성한 다리 정보 넣기
      * mainBridges 배열에 저장
    - 다리 길이 만큼 게임 시작
    - 사용자의 이동 선택 (위: U, 아래: D) (예외2)
      * readMoving() / InputView.js
      * userBridges 배열에 저장
    - 사용자 이동  move()
      * 다리와 사용자 선택 비교 후 같으면 true, 다르면 false
      * true -> switch() -> makeUpDownBridge()
      * false -> settingXBridge() 함수 -> makeUpDownBridge()
      * 선택 결과 true, false를 리턴
    - 리턴 값이 true이면 계속 진행, false이면 break;
      * state에 true/false 값 계속 저장
      * printMap() / OutputView.js을 통해 현재 이동 상태 출력
 4. output()
    - state == false -> 5.reset()으로 이동
      * up,down이 들어있는 다리 배열 넘김
    - state == true -> printResult() / OutputView.js
      * up,down이 들어있는 다리 배열과 횟수, 상태를 넘김
      * 최종 결과 출력
     4. 플레이어가 이동할 칸(사용자 입력) /startGame()
    - 플레이어의 입력. 위: U, 아래: D ->(예외처리 2)
 5. reset()
    - 종료/재시작 입력 받음  readGameCommand() / InputView.js (예외3)
    - 재시작(R)
      * retry() / BridgeGame.js
      * restart() constructor 다리 외에 다른 것 초기화.
    - 종료(Q) 
      * printResult() / OutputView.js
      * 최종 결과 출력
 
<예외처리> ValidateCheck.js
 1. 다리 길이는 3부터 20 사이의 숫자. bridgeSizeValidate()
    (문자, 3부터 20 사이의 숫자가 아닌 경우 try-catch 사용하여 예외처리)
 2. U, D 외의 문자나 숫자일 경우. movingValidate()
 3. Q, R 외의 문자나 숫자일 경우. gameCommandValidate()

<그 외 주의사항>
 1. indent depth는 3이 넘지 않아야 함.
 2. else 지양
 3. 함수의 길이가 10라인 이하.
 4. 파라미터 개수는 최대 3개

 * InputView 에서만 MissionUtils의 Console.readline()을 이용해 사용자 입력 받기.
 * BridgeGame 에서는 InputView, OutputView를 사용하지 않는다.

---