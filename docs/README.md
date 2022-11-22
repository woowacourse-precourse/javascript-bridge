# 프리코스 4주차 - 다리 건너기 🌉

## 💡 작동 기능
- 다리의 길이를 정할 수 있다.
- 다리의 위, 아래 중 건널 수 있는 칸은 한 칸이다.
- 성공하면 다음 칸을 선택하고, 다리의 길이만큼 건너면 게임 종료
- 실패하면 재시도를 하거나, 게임을 종료할 수 있다.
- 게임 종료 시 다리 정답, 시도 횟수, 성공 여부가 출력된다.

## 🕹 작동 결과
![image](https://user-images.githubusercontent.com/57815133/203286454-fc8571de-5200-4d4d-9af2-65c5a82af145.png)

## 🔨 기능 목록

- 다리 건너기 게임 시작 메시지를 출력한다.
- 다리의 길이를 숫자로 입력받는다. 
  - 숫자가 아닌 경우 예외처리한다.
  - 길이가 3 이상 20 이하가 아닌 경우 예외처리한다.
- 다리를 생성한다. 
  - 다리를 생성할 때 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정한다.
  - 위 칸을 건널 수 있는 경우 U, 아래 칸을 건널 수 있는 경우 D값으로 나타낸다.
  - 무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.
- 다리가 생성되면 플레이어가 이동할 칸을 받아온다. 
  - 이동할 때 위 칸은 대문자 U, 아래 칸은 대문자 D를 입력한다.
  - U와 D가 아닌 값이 입력되면 예외처리한다.
- 다리를 건널 수 있는지 없는지 확인한다.
- 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시한다.
- 다리를 성공적으로 건너면 다시 이동할 칸을 받아온다.
- 다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있다.
  - 재시작 시에는 처음에 만든 다리로 재사용한다.
- 재시작 할건지 종료할 건지 여부를 받아온다.
  - R과 Q가 아닌 값이 입력되면 예외처리한다.
- 다리를 끝까지 건너면 게임이 종료된다.
- 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

## 📁 디렉토리 구조

```
javascript-bridge
┣ src
┃ ┣ constants
┃ ┃ ┗ constants.js
┃ ┣ controller
┃ ┃ ┗ BridgeGameController.js
┃ ┣ models
┃ ┃ ┣ Bridge.js
┃ ┃ ┗ BridgeGame.js
┃ ┣ utils
┃ ┃ ┣ BridgeRandomNumberGenerator.js
┃ ┃ ┗ Validator.js
┃ ┣ views
┃ ┃ ┣ InputView.js
┃ ┃ ┗ OutputView.js
┃ ┣ App.js
┗ ┗ BridgeMaker.js
```

## 🔍 역할
### Bridge
다리 방향들과 현재 다리 위치를 관리하는 클래스

### BridgeGame
다리 건너기 게임을 관리하는 클래스
  - 다리 건너기
  - 게임이 끝났는지
  - 현재 건너는 칸의 정답 여부
  - 재시도
  - 결과값 관리

### BridgeGameController
View들과 BridgeGame 사이의 전체 로직 제어

### InputView
모든 입력 뷰 담당

### OutputView
모든 출력 뷰 담당

### BridgeRandomNumberGenerator
0, 1 랜덤 생성 담당
 
### BridgeMaker
다리 길이만큼 방향 생성 

### Validator
유효성 검사 담당

### App
애플리케이션 시작

## 📚 테스트 결과
![image](https://user-images.githubusercontent.com/57815133/203292689-a49e91a4-4d68-4c2c-a9ae-9e119b5cea80.png)
