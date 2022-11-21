# **🌁 다리 게임 미션 🌉**

<br/>

## **🏁 미션 설명**
![bridge](https://images.fineartamerica.com/images-medium-large-5/crescent-city-connection-twin-bridges-evgeny-vasenev.jpg)

요약: 다리의 길이를 입력받고 위아래 두 칸으로 이루어진 다리를 건넌다. 위아래 둘 중 하나의 칸만 건널 수 있게 설정되어 있는데, 플레이어는 답을 모르는 상태에서 이동할 칸을 선택한다. 다리를 끝까지 건너는데 성공하면 게임이 종료되며, 실패하면 게임을 재시작하거나 종료한다.

<br/>
<br/>

## **📝 기능 구현 목록** ##
- [x] get bridge size input from user
    - [x] check if input is valid (e.g., 3~20)
- [x] make bridge of designated size (e.g., ["U", "D", "D"])
- [x] get movement input from user
    - [x] check if input is valid (e.g., "U" or "D")
    - [x] move player (e.g., "O" or "X")
        - [x] compare user input with the bridge answer (e.g., ["U", "D", "D"]) and record "O" or "X"
- [x] print movement status
- [x] print results (if user input is "Q" or when user succeeds to cross the bridge)
- [x] get game command input from user
    - [x] check if input is valid (e.g., "R" or "Q")
- [x] retry game (if user input is "R")

<br/>
<br/>

## **🧪 테스트 구현 목록** ##
- [x] check if bridge size input is valid
    - [x] check if input is an integer
    - [x] check if input is in range (3~20)
- [x] check if movement input is valid
    - [x] check if input is "U" or "D"
- [x] check if game command input is valid
    - [x] check if input is "R" or "Q"
- [x] check if BridgeGame class works properly
    - [x] check if move method works properly
    - [x] check if checkCorrectOrNot method works properly
    - [x] check if setBridgeOutput method works properly
    - [x] check if retry method works properly
- [x] check if BridgeRandomNumberGenerator object works properly
    - [x] check if generate method works properly
- [x] check if BridgeMaker object works properly
    - [x] check if makeBridge method works properly

🚨 [NOTICE] Test for InputView, OutputView object is excluded since UI logic test is not required 🚨 
    
<br/>
<br/>

## **🗂️ 폴더 구성**
javascript-bridge  
┣ **`__tests__`**  
┃ ┣ ApplicationTest.js    
┃ ┣ BridgeGameTest.js   
┃ ┣ BridgeMakerTest.js  
┃ ┣ BridgeRandomNumberGeneratorTest.js  
┃ ┣ BridgeSizeCheckTest.js  
┃ ┣ MoveCheckTest.js   
┃ ┗ RetryQuitCheckTest.js  
┣ **`docs`**    
┃ ┗ README.md  
┣ **`src`**  
┃ ┣ **`Check`**  
┃ &nbsp;&nbsp;&nbsp;&nbsp;┣ BridgeSizeCheck.js  
┃ &nbsp;&nbsp;&nbsp;&nbsp;┣ MoveCheck.js  
┃ &nbsp;&nbsp;&nbsp;&nbsp;┗ RetryQuitCheck.js  
┃ ┣ **`Constants`**   
┃ &nbsp;&nbsp;&nbsp;&nbsp;┗ Constants.js  
┃ ┣ App.js  
┃ ┣ BridgeGame.js  
┃ ┣ BridgeGameToView.js  
┃ ┣ BridgeMaker.js  
┃ ┣ BridgeRandomNumberGenerator.js  
┃ ┣ InputView.js  
┗ ┗ OutputView.js
    
<br/>
<br/>

## **🗄️ 파일 설명**
**`<__tests__>`**  
- **`ApplicationTest.js`**  
    - 프로그램 전반에 대한 테스트 코드
- **`BridgeGameTest.js`**  
    - BridgeGame class를 테스트하기 위한 테스트 코드
- **`BridgeMakerTest.js`**  
    - BridgeMaker object를 테스트하기 위한 테스트 코드
- **`BridgeRandomNumberGeneratorTest.js`**  
    - BridgeRandomNumberGenerator object를 테스트하기 위한 테스트 코드
- **`BridgeSizeCheckTest.js`**  
    - BridgeSizeCheck class를 테스트하기 위한 테스트 코드
- **`MoveCheckTest.js`**  
    - MoveCheck class를 테스트하기 위한 테스트 코드
- **`RetryQuitCheckTest.js`**  
    - RetryQuitCheck class를 테스트하기 위한 테스트 코드  

**`<docs>`**
- **`README.md`**  
    - 미션에 대한 설명을 담은 문서

**`<src>`**
- **`<Check>`**
    - **`BridgeSizeCheck.js`**  
        - 사용자가 입력한 다리 길이가 유효한지 확인하는 클래스
    - **`MoveCheck.js`**  
        - 사용자가 입력한 움직임이 유효한지 확인하는 클래스
    - **`RetryQuitCheck.js`**  
        - 사용자가 입력한 재시도/종료 명령이 유효한지 확인하는 클래스

- **`<Constants>`**
    - **`Constants.js`**  
        - 프로젝트에서 사용되는 상수 및 메시지를 정의한 클래스
- **`App.js`**  
    - 프로그램의 시작점
- **`BridgeGame.js`**  
    - 다리를 건너는 게임을 진행하는 클래스
- **`BridgeGameToView.js`**  
    - BridgeGame과 In/OutputView를 연결하는 클래스
- **`BridgeMaker.js`**  
    - 다리를 만드는 클래스
- **`BridgeRandomNumberGenerator.js`**  
    - 다리를 만드는 데 사용되는 랜덤 숫자를 생성하는 클래스
- **`InputView.js`**  
    - 사용자의 입력을 받는 클래스
- **`OutputView.js`**  
    - 출력을 담당하는 클래스
