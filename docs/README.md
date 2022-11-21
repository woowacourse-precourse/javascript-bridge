# 요구 사항

1. 시작 문구 출력
2. 다리 길이 입력받기
3. 입력받은 다리 길이 만큼 random number 생성하기
4. 이동할 칸 입력받기
5. 입력받은 칸과 생성한 random number 비교해서 결과 출력
6. 이동에 성공했으면 4~5 반복
7. 이동에 실패했으면 재시도 여부 입력받기<br>
   7-1. 재시도면 입력값 지우고 4~5 반복
8. 최종 게임 결과/성공 여부/시도 횟수 출력

# 구현 기능

InputView)<br>
&nbsp; readBridgeSize: 다리 길이 숫자로 입력받아서 리턴 <br>
&nbsp; readMoving: 이동할 칸 U/D로 입력받아서 리턴<br>
&nbsp; readGameCommand: 게임 재시도 여부 R/Q로 입력받아서 리턴 <br>

OutputView)<br>
&nbsp; printMap: 이동 상태 배열로 전달받아서 출력<br>
&nbsp; printResult: 이동 상태 배열/성공 여부/시도 횟수 전달받아서 출력<br>

BridgeGame)<br>
&nbsp; move: 현재 이동 상태, 만들어진 다리, 이동할 칸 입력받아서 다리 배열의 이동 상태.length번째 값과 이동할 칸의 값이 같으면 해당 자리에 O, 다르면 넣어서 출력<br>
&nbsp; retry: 전달값이 R이면 `InputView.readMoving` 호출, Q이면 `OutputView.printResult` 호출<br>

BridgeMaker)<br>
&nbsp; makeBridge: 다리 길이 전달받아서 해당 크기만큼 `BridgeRandomNumberGenerator.generate()` 호출, 호출한 결과를 배열에 담아서 리턴
