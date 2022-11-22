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
&nbsp; readBridgeSize: 다리 길이 입력 받아서 유효성 검사, 올바른 값이면 다리 생성하고 올바르지 않은 값이면 에러메세지 출력 후 다시 입력받기 <br>
&nbsp; readMoving: 이동할 칸 입력 받아서 유효성 검사, 올바른 값이면 입력받은 값에 따라 이동하고 올바르지 않은 값이면 에러메세지 출력 후 다시 입력받기 <br>
&nbsp; readGameCommand: 게임 재시도 여부 입력 받아서 유효성 검사, 올바른 값이면 재시도하고 올바르지 않은 값이면 에러메세지 출력 후 다시 입력받기 <br>

OutputView)<br>
&nbsp; printMap: 이동 상태를 지도 형식으로 전달받아서 출력<br>
&nbsp; printResult: 이동 지도/성공 여부/시도 횟수 전달받아서 출력<br>
&nbsp; printStart: 시작 문구 출력<br>
&nbsp; printError: 에러메세지 출력

BridgeGame)<br>
&nbsp; make: 전달받은 다리 길이만큼 다리 생성해서 저장<br>
&nbsp; move: 이동할 칸 전달 받아서 현재 상태에 추가하고 지도 생성, 이동 성공이면 다음 이동 입력받거나 최종 결과 출력, 실패하면 재시도 여부 입력받기<br>
&nbsp; makeMap: 성공 여부에 따라 현재 상태로 지도 만들기<br>
&nbsp; addSuccessMove: 이동 성공 시 전달받은 이동할 칸에 따라 지도에 이동 경로를 추가한다<br>
&nbsp; addFailMove: 이동 실패 시 전달받은 이동할 칸에 따라 지도에 이동 경로를 추가한다<br>
&nbsp; retry: 전달값이 R이면 직전 시행 되돌리고 재시도 횟수 추가해서 재입력, Q이면 실패 지도 만들어서 최종 결과 출력<br>
&nbsp; revert: 마지막 현재 상태 제거하고 지도에 마지막 경로 삭제해서 직전 시행을 되돌리기<br>

BridgeMaker)<br>
&nbsp; makeBridge: 다리 길이 전달받아서 해당 크기만큼 랜덤 숫자 생성, 랜덤 숫자에 따른 결과를 배열에 담아서 리턴

ValidateInput)<br>
&nbsp; bridgeSize: 입력값이 숫자가 아니거나 3~20의 범위가 아니면 `throw Error`<br>
&nbsp; moving: 입력값이 U/D가 아니면 `throw Error`<br>
&nbsp; gameCommand: 입력값이 R/Q가 아니면 `throw Error`<br>

Util)<br>
&nbsp; insertResult: 기존의 지도에서 마지막 칸에 새로운 이동 추가하기<br>
&nbsp; removeResult: 기존의 지도에서 마지막 칸의 이동 제거하기<br>
