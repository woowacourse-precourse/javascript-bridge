# 구현 기능 목록

## InputView 객체
**사용자로부터 입력을 받는 역할**  
- `readBridgeSize`: 다리의 길이를 입력 받는 기능
- `readMoving`: 사용자가 이동할 칸을 입력 받는 기능
- `readGameCommand`: 사용자가 게임을 다시 시도할지 종료할지 여부를 입력 받는 기능  

## OutputView 객체
**사용자에게 게임 진행 상황과 결과를 출력하는 역할**  
- `printMap`: 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력하는 기능
- `printResult`: 게임의 최종 결과를 정해진 형식에 맞춰 출력하는 기능
- `printGameStart`: 게임 시작 안내를 출력하는 기능
- `printInputMove`: 이동할 칸 입력 안내 출력하는 기능
- `printGameSuccess`: 게임 성공 여부 출력하는 기능
- `printTryCount`: 총 시도 횟수 출력하는 기능  

## BridgeMaker 객체
**다리의 길이를 입력 받아서 다리를 생성해주는 역할**
- `makeBridge`: 다리의 길이를 입력 받아서 다리를 생성해주는 기능  

## BridgeGame 클래스
**다리 건너기 게임을 관리하는 역할**  
- `setCurrentBridge`: 현재 다리 상태를 설정해주는 기능
- `setCurrent`: 현재 다리 위치를 설정해주는 기능
- `isCorrect`: 현재 다리와 정답 다리가 일치하는지 비교하는 기능
- `move`: 사용자가 칸을 이동하는 기능
- `retry`: 사용자가 게임을 다시 시도할 때 사용하는 기능  
- `checkGameSuccess`: 게임이 성공했는지 검사하는 기능
- `getTryCount`: 시도 횟수를 반환해주는 기능  

## Player 클래스
**다리 건너기 게임 진행을 총괄하는 역할**  

## Validation 클래스
**유효성 검사 후 예외 처리 해주는 역할**  
- `checkSizeInputValidation`: 다리의 길이 입력 값 유효성 검사하는 기능
    - 숫자가 아닌 값
    - 3 이상 25 이하가 아닌 값
- `checkMovingInputValidation`: 이동할 칸 입력 값 유효성 검사하는 기능
    - U, D가 아닌 값
- `checkRetryInputValidation`: 재시도 여부 입력 값 유효성 검사하는 기능
    - R, Q가 아닌 값