# 미션 - 다리 건너기

## 입력
- printGameStart() : 다리 건너기 게임을 시작합니다.
- readBridgeSize() : 다리의 길이를 입력받는다. 3~20이하 숫자만 허용 나머지는 에러처리를 한다
-> checkBridgeSizeInput() : 다리 길이 입력 값 에러 확인하는 함수

- readMoving(): readBridgeSize에서 다리의 길이를 넘겨받아 이동할 칸을 선택하는 함수 U,D만 허용하고 나머지 값은 에러처리를 한다
-> checkMovingInput() : 이동할 칸 입력 값 에러 처리하는 함수

- 

## 에러처리

### InputViewTest.js
- readBridegeSize() - 음수,문자,범위에서 벗어나는 수 에러처리
- readMoving() : U,D가 아닌 모든 것들 에러처리
게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)