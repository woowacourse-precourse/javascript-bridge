## 구현할 기능 목록

1. 시작 안내멘트 기능 

2. 다리길이를 물어보는 기능 

3. 다리길이에 맞게 랜덤배열을 생성하는 기능 

4. 사용자에게 이동할 칸 입력을 받는 기능 

5. 이동한 칸을 맵에 그리는 기능 

6. 이동한 칸과 랜덤으로 반환된 배열을 비교하는 기능 

7. 결과에 따른 결과 값 입력

8. 성공 혹은 실패시에 최종 결과 출력하는 기능 

9. 게임 재시작 혹은 종료하는 기능. 

10. 재시작 시 초기화하는 기능

<br>

## 예외처리

1. 다리길이 입력 값에 대한 예외 처리 

2. 이동할 칸 입력 값에 대한 예외 처리

3. 재시작 여부에 따른 입력 값에 대한 예외 처리

<br>

## 플로우차트

<div align="center" w="300px">


  [![](https://mermaid.ink/img/pako:eNp1ktFuwiAUhl-FcK0v0IslKlPn5pLpsqh0F6QcW5ICDdAlpvjuoxQzG7NekOb7Tz849HS40BxwhkvDmgp9klyh8Myodcy4bzSdPvm5EbwE9AaqdJVH8-6L1YIzJ7S6DuXzvg75M6st-Nu3o8iZFvyCSv0DKVgMQZITYaDojR6RRz-5948s5E5_pI0RyqEta1J6jOmhE3Ynysqh2TtBwhKtIIkP_4oPd-Il3YFt61tLyxit6L4tCrB2RNd0yUSd0HpwFFpKprg_PTZ2ihUb-tGKm31AL2FLZy6JvUQ2Ot8molf6rHgiqwfyt-IJlmAkEzz86q4nOXYVSMhxFl45nFnoL8e5uoZS1jq9v6gCZ337E9w24dBABAtDInEWb2uCgQunzXYYnzhF119n8bev?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1ktFuwiAUhl-FcK0v0IslKlPn5pLpsqh0F6QcW5ICDdAlpvjuoxQzG7NekOb7Tz849HS40BxwhkvDmgp9klyh8Myodcy4bzSdPvm5EbwE9AaqdJVH8-6L1YIzJ7S6DuXzvg75M6st-Nu3o8iZFvyCSv0DKVgMQZITYaDojR6RRz-5948s5E5_pI0RyqEta1J6jOmhE3Ynysqh2TtBwhKtIIkP_4oPd-Il3YFt61tLyxit6L4tCrB2RNd0yUSd0HpwFFpKprg_PTZ2ihUb-tGKm31AL2FLZy6JvUQ2Ot8molf6rHgiqwfyt-IJlmAkEzz86q4nOXYVSMhxFl45nFnoL8e5uoZS1jq9v6gCZ337E9w24dBABAtDInEWb2uCgQunzXYYnzhF119n8bev)

</div>

## 기능 요구사항 

- [x] : 위아래 두 칸으로 이루어진 다리를 건너야 한다.
- [x] : 다리는 왼쪽에서 오른쪽으로 건너야 한다.
- [x] : 위아래 둘 중 하나의 칸만 건널 수 있다.
- [x] : 다리의 길이를 숫자로 입력받고 생성한다.
- [x] : 다리를 생성할 때 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정한다.
- [x] : 위 칸을 건널 수 있는 경우 U, 아래 칸을 건널 수 있는 경우 D값으로 나타낸다.
- [x] : 무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.
- [x] : 다리가 생성되면 플레이어가 이동할 칸을 선택한다.
- [x] : 이동할 때 위 칸은 대문자 U, 아래 칸은 대문자 D를 입력한다.
- [x] : 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시한다.
- [x] : 다리를 끝까지 건너면 게임이 종료된다.
- [x] : 다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있다.
- [x] : 재시작해도 처음에 만든 다리로 재사용한다.
- [x] : 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.
- [x] : 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]" 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

## 입출력 요구사항 

- [x] : 자동으로 생성할 다리 길이를 입력 받는다. 3이상 20 이하의 숫자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.
- [x] : 라운드마다 플레이어가 이동할 칸을 입력 받는다. U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.
- [x] : 게임 재시작/종료 여부를 입력 받는다. R(재시작)과 Q(종료) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.
- [x] : 게임 시작 문구
- [x] : 게임 종료 문구
- [x] : 이동할 수 있는 칸을 선택한 경우 O 표시
- [x] : 이동할 수 없는 칸을 선택한 경우 X 표시
- [x] : 선택하지 않은 칸은 공백 한 칸으로 표시
- [x] : 다리의 시작은 [, 다리의 끝은 ]으로 표시
- [x] : 다리 칸의 구분은 |(앞뒤 공백 포함) 문자열로 구분
- [x] : 현재까지 건넌 다리를 모두 출력
- [x] : 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

## 추가된 요구 사항

- [x] : 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
- [x] : 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
- [x] : 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
- [x] : 아래 있는 InputView, OutputView, BridgeGame, BridgeMaker 클래스(또는 객체)의 요구사항을 참고하여 구현한다.
- [x] : 각 클래스(또는 객체)의 제약 사항은 아래 클래스별 세부 설명을 참고한다.
- [x] : 이외 필요한 클래스(또는 객체)와 메서드는 자유롭게 구현할 수 있다.
- [x] : InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
- [x] : BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.

## InputView 객체
- [x] : 제공된 InputView 객체를 활용해 구현해야 한다.
- [x] : InputView의 파일 경로는 변경할 수 있다.
- [x] : InputView의 메서드의 인자는 변경할 수 있다.
- [x] : 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

## OutputView 객체
- [x] : 제공된 OutputView 객체를 활용해 구현해야 한다.
- [x] : OutputView의 파일 경로는 변경할 수 있다.
- [x] : OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- [x] : 값 출력을 위해 필요한 메서드를 추가할 수 있다.

## BridgeGame 클래스
- [x] : 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
- [x] : BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
- [x] : BridgeGame의 파일 경로는 변경할 수 있다.
- [x] : BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- [x] : 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

## BridgeMaker 객체
- [x] : 제공된 BridgeMaker 객체를 활용해 구현해야 한다.
- [x] : BridgeMaker에 프로퍼티를 추가할 수 없다.
- [x] : BridgeMaker의 파일 경로는 변경할 수 없다.
- [x] : BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

## BridgeRandomNumberGenerator 객체
- [x] : Random 값 추출은 제공된 BridgeRandomNumberGenerator의 generate()를 활용한다.
- [x] : BridgeRandomNumberGenerator의 코드는 변경할 수 없다.