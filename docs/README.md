# 미션 - 다리 건너기
[!] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

## 진행도
[O] 입력값들 입력받고 에러처리해주는 기능구현
[O] 입력한 수만큼 다리를 생성해준뒤 배열로 return 해주는 기능구현
[] 

## InputView
- printGameStart() : 다리 건너기 게임을 시작합니다.
- readBridgeSize() : 다리의 길이를 입력받는다. 3~20이하 숫자만 허용 나머지는 에러처리를 한다
-> checkBridgeSizeInput() : 다리 길이 입력 값 에러 확인하는 함수

- readMoving(): 이동할 칸을 선택하는 함수 U,D만 허용하고 나머지 값은 에러처리를 한다
-> checkMovingInput() : 이동할 칸 입력 값 에러 처리하는 함수

- readGameCommand() : 게임 재시작/종료 여부를 입력받는 함수 R,Q가 아닌 값은 에러처리를 한다
-> checkReadGameInput() : 게임 재시작/종류 입력 값 에러처리 함수

- randomBridge() : bridge의 길이와 RandomNumberGenerator함수를 BridgeMaker의 파라미터로 보내준다
-> 오류처리 없음

---

## 에러처리

### InputViewTest.js
- readBridegeSize() - 음수,문자,범위에서 벗어나는 수 에러처리
- readMoving() : U,D가 아닌 모든 것들 에러처리
- readGameCommand() : R,Q가 아닌 값 에러처리

## OutputView
- printMap() : InputView에서 파라미터로 넘겨준 bridgeArray를 받아서 사용자 화면에 뿌려줌
ex) bridge가 5면 배열은 [1,1,0,1,1] 이런식으로 랜덤하게 생성됨 OutputView에서는 사용자가 U,D를 입력할 때 맞추면 O 틀리면 X로 한개씩 뿌려주는 기능이 있어야함