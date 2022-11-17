# 미션 - 💵 로또 게임

## 기능목록

### 기능목록 1 유저에게 다리길이를 입력받는다
* [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 사용해서 3~20에 해당하는 숫자를 입력받는다. 예외를 검사하고 문제가 없다면 해당 길이만큼의 다리를 랜덤으로 생성한다.
* 예외 : 범위 내 숫자인지, 자연수인지, 숫자를 제외한 다른문자인지

### 기능목록 2 유저에게 Move Space(U,D)를 입력받는다.
* 플레이어에게 [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 사용해서 U(위))로 갈지 D(아래)로 갈지 입력을 받는다.
* 올바른 값이라면 O(맞춤)를 출력하고 계속 입력을 받으며,잘못된 값이라면 x(틀림)를 출력하며 게임 성공 여부와 총 시도횟수를 출력한다.
* 잘못된 값이라면 총 시도횟수를 1 추가한다.

### 기능목록 3 기능목록2의 잘못된 값을 받는다면 재시작 여부를 묻는다.
* 플레이어에게 [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 사용해서 R(재시작) Q(종료)을 입력받고 R이라면 게임 재시작 Q라면 어플리케이션이 종료된다.

### 기능목록 4 만약 다리를 끝까지 건너면 어플리케이션이 종료된다.
* 다리를 모두 건넜다면 총 시도횟수를 1 추가한다.
* 게임 성공 여부와 함께 총 시도횟수가 출력되고 어플리케이션이 종료된다.