# **🌁 다리 게임 미션 🌉**

<br/>

## **🏁 미션 설명**
![bridge](https://images.fineartamerica.com/images-medium-large-5/crescent-city-connection-twin-bridges-evgeny-vasenev.jpg)

요약: 다리의 길이를 입력받고 위아래 두 칸으로 이루어진 다리를 건넌다. 위아래 둘 중 하나의 칸만 건널 수 있게 설정되어 있는데, 플레이어는 이동할 칸을 선택한다. 다리를 끝까지 건너면 게임이 종료되며, 실패하면 게임을 재시작하거나 종료한다.

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
- [ ] get game command input from user
    - [ ] check if input is valid (e.g., "R" or "Q")
- [ ] retry game (if user input is "R")

<br/>
<br/>

## **🗂️ 파일 구성**
