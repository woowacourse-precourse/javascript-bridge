# 요구 사항

1. 시작 문구 출력
2. 다리 길이 입력받기<br>
   2-1. 3~20 범위의 숫자가 아니면 예외 처리
3. 입력받은 다리 길이 만큼 random number 생성하기
4. 이동할 칸 입력받기<br>
   4-1. `U` 또는 `D`가 아니면 예외 처리
5. 입력받은 칸과 생성한 random number 비교해서 결과 출력
6. 이동에 성공했으면 4~5 반복
7. 이동에 실패했으면 재시도 여부 입력받기<br>
   7-1. `R` 또는 `Q`가 아니면 예외 처리<br>
   7-2. `R`이면 입력값 지우고 4~5 반복
8. 최종 게임 결과/성공 여부/시도 횟수 출력

# 구현 기능

InputView)<br>
&nbsp; readBridgeSize: 다리 길이 숫자로 입력받아서 올바르지 않은 값이면 `ErrorHandler.bridgeSize` 호출, 올바른 값이면 `BridgeMaker.makeBridge` 호출 <br>
&nbsp; readMoving: 이동할 칸 U/D로 입력받아서 올바르지 않은 값이면 `ErrorHandler.moving` 호출, 올바른 값이면 `BridgeGame.move` 호출 <br>
&nbsp; readGameCommand: 게임 재시도 여부 R/Q로 입력받아서 올바르지 않은 값이면 `ErrorHandler.gameCommand` 호출, 올바른 값이면 `BridgeGame.retry` 호출 <br>

OutputView)<br>
&nbsp; printMap: 이동 상태 배열로 전달받아서 출력<br>
&nbsp; printResult: 이동 상태 배열/성공 여부/시도 횟수 전달받아서 출력<br>
&nbsp; printStart: 시작 문구 출력

BridgeGame)<br>
&nbsp; move: 현재 이동 상태, 만들어진 다리, 이동할 칸 입력받아서 다리 배열의 이동 상태.length번째 값과 이동할 칸의 값이 같으면 해당 자리에 O, 다르면 넣어서 출력<br>
&nbsp; retry: 전달값이 R이면 `InputView.readMoving` 호출, Q이면 `OutputView.printResult` 호출<br>

BridgeMaker)<br>
&nbsp; makeBridge: 다리 길이 전달받아서 해당 크기만큼 `BridgeRandomNumberGenerator.generate()` 호출, 호출한 결과를 배열에 담아서 리턴

ErrorHandler)<br>
&nbsp; bridgeSize: `throw Error` 후 `InputView.readBridgeSize` 호출
&nbsp; moving: `throw Error` 후 `InputView.readMoving` 호출<br>
&nbsp; gameCommand: `throw Error` 후 `InputView.readGameCommand` 호출<br>
