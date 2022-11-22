# 미션 - 다리 건너기
[!] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.
-> throw 한 뒤에 함수를 다시 실행시킬수 있나??

## 진행도
[O] 입력값들 입력받고 에러처리해주는 기능구현
[O] 입력한 수만큼 다리를 생성해준뒤 배열로 return 해주는 기능구현
[O] Retry일 때 배열이 초기화 되는 로직추가
[O] 출력문 초기화
[O] 문제 : 원본배열에 shift를 해서 Restart할 때 문제가 생기므로 이 부분 수정
[O] 파생된 문제 : count가 초기화되는듯 -> 수정완료
[] ApplicationTest가 원하는대로 로직수정
[] 테스트 케이스 작성
[O] 버그 발견 : 게임 실패가 나온 후에 입력값을 받음 -> 수정완료

## 테스트케이스에 맞도록 재수정
1. BridgeMaker "U" "D" "U" 이런식으로 배열이 생성되도록 O

## 리팩토링 진행 시작
1. 함수 길이줄이기
- InputView,OutputView에 있는 함수 줄이는중
2. 클래스 사용하는 로직짜기
- Input 클래스에 검증로직 구현
- OutPut 클래스 선언
3. 변수이름, 따로 빼두는 로직

## InputView
- printGameStart() : 다리 건너기 게임을 시작합니다.

- readBridgeSize() : 다리의 길이를 입력받는다. 3~20이하 숫자만 허용 나머지는 에러처리를 한다

- randomBridge() : bridge의 길이와 RandomNumberGenerator함수를 BridgeMaker의 파라미터로 보내준다

- readMoving(): 이동할 칸을 선택하는 함수 U,D만 허용하고 나머지 값은 에러처리를 한다
-> checkMoving() : 'O','X'를 확인해서 각각다른 함수동작을 하도록 한다
->checkIsOValue() : 'O'일경우 배열의 앞부분을 자르고, 다시 입력받고, 배열이 []이면 종료시킨다

- readGameCommand() : 게임 재시작/종료 여부를 입력받는 함수 R,Q가 아닌 값은 에러처리를 한다

[!] 오류 : 게임을 다시시작할때 배열 초기화가 안됨 -> BridgeGame을 통해 초기화가 되게
[해결완료]

## Input 클래스
- static count = BridgeGame.count : BridgeGame에 있는 count값을 받아와서 필드에 저장한다
- checkBridge() : 다리의 길이 입력 값을 확인해준다
- randomBridge() : 다리의 길이를 받아서 깊은 복사로 original을 살려둔다
- checkMovingInput() : 'U','D'입력값을 확인해서 'O','X'를 return 시킨다
- checkReadGameInput() : 'R','Q'를 확인해서 재시작과 끝내는 로직을 관리한다

## 에러처리

### InputTest.js
- readBridegeSize() - 음수,문자,범위에서 벗어나는 수 에러처리
-> .match is not a function 이 에러 떄문에 실행 불가 해결 X ㅠ
- readMoving() : U,D가 아닌 모든 것들 에러처리
- readGameCommand() : R,Q가 아닌 값 에러처리

## OutputView
- printMap() : InputView에서 파라미터로 넘겨준 userSpace,bridgeArray를 받아서 [] 이런 형태로 사용자 화면에 뿌려줌
ex) bridge가 5면 배열은 [1,1,0,1,1] 이런식으로 랜덤하게 생성됨 OutputView에서는 사용자가 U,D를 입력할 때 맞추면 O 틀리면 X로 한개씩 뿌려주는 기능이 있어야함
다리 길이가 짧아지면 배열 사이에 값을 추가하는 기능을 넣어야함 -> 어떻게?
배열에 공백값이랑 'O' 'X' 구분해서 넣어두고 출력할 만 콤마를 '|'이걸로 바꾸고 출력하면 될듯?
- printArrays() : 2개의 배열을 받아서 '' -> 공백으로 , 'O' -> O로 ','는 '|', 로 바꿔서 출력함
-> 아마 for 반복문으로 각각 돌려서 해줘야 할듯
bridgePrinterAbove라는 배열이 ['empty','O','O'] 이런식을 되어있다고 가정
JSON.stringify 사용???? Ok

-> printMapHelper() : 위에 내용을 구현한 함수 Output 클래스에서 받아온 배열에 조건에 따라 값을 넣어주고
-> printArrays() : 이 함수를 통해서 조건에 맞도록 string으로 변환시켜 return 시켜줌

- initializeArray() : retry시 배열을 초기화시키는 로직

-> 게임이 끝나면 printResult에 보내는 로직도 추가 [O]

- printBridgeResult() : 사용자 화면에 위에서 string으로 바꾼 출력형태를 뿌려줌

- printResult() : 최종 결과를 뿌려줌

## OutPut 클래스
- OutputView에서 사용하는 배열이 담겨져 있음

### BrideGame
- move() : 'O'일때 bridgeArray를 받아와서 앞부분을 하나씩 날려준다.
배열을 깊은 복사를 사용해 shift()시 원본배열을 참조하지 않도록한다
- retry(): count를 올려주는 로직추가

## Const
- 변하지 않는 문자들은 여기다가 담아서 export시켜 사용한다