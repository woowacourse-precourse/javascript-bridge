## 1. 숫자를 넣으면 그에 알맞은 무작의 다리가 두 개 생성됨

- [Error] 숫자가 아닌 문자가 입력되면 에러를 반환
- 무작위 다리는 배열로 생성
- 다리는 O 또는 ' '으로만 이루어져 있음
- O와 ' ' 의 갯수 === 입력한 숫자
- 각각의 다리의 length === 입력한 숫자
- 두 다리의 같은 index는 서로 같을 수 없음
  - ex) randomUpperBridge[0] !== randomLowerBridge[0]

<!-- 예시 : 정답인 다리
randomUpperBridge : [ O , O ,   ] => U
randomLowerBridge : [   ,   , O ] => D
-->

## 2. 게임이 시작된 후 이동할 칸을 선택

- [Error] U or D가 아닌 문자가 입력되면 에러 반환
- 처음에 U를 눌렀을 때 randomUpperBridge[0] === 'O'가 일치하는지 확인하고 각각의 값 넣기
  - O가 일치한다면 upperBridge : [O], lowerBridge: ['']
  - 일치하지 않는다면 upperBridge:[X], lowerBridge: ['']
- 위에 넣은 값을 '[ O | O ]' 형식으로 바꾸는 함수 생성

## 3. 한 턴의 성공 여부 파악 후 해당하는 기능 수행

- 성공한다면 이동할 칸을 선택하라는 문구 출력
- 실패한다면 게임 다시 시도 여부 파악
  - [Error] R or Q가 아닌 문자가 입력되면 에러 반환
- randomUpperBridge와 upperBridge의 length가 같고, upperBridge와 lowerBridge에 X가 없을 때 게임 종료
