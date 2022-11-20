## 결과물 다이어그램
![image](https://user-images.githubusercontent.com/78866590/202894017-b3d1a855-20fe-4f79-b2fd-3900a3401bed.png)

<br/>

## 기능 요구 사항
### 위 아래 두 칸으로 이루어진 다리를 건넌다.
- [x] 왼쪽에서 오른쪽으로 다리를 건넌다.
- [x] 위 아래 둘 중 하나의 칸 만 건널 수 있다. (예외처리)
### 다리 생성 
- [x] 각 다리의 칸은 0과 1로 상태 값이 정의된다.
- [x] 0인 경우 아래칸을 건널 수 있고, 1인 경우 위 칸으로 건널 수 있다.
- [x] 위 칸을 건널 수 있는 경우 U,  건널 수 없는 경우 D로 나타낸다.
### 플레이어 이동
- [x] 다리가 생성되면 플레이어가 이동할 칸을 선택한다.
- [x] 이동은 '대문자' U or D로 입력 받는다.
- [x] 이동 후 건널 수 있다면 O, 건널 수 없다면 X로 표시된다.
### 종료
- [x] 다리를 끝까지 건너면 게임이 종료된다.
- [x] 다리를 건너다 실패 시 재시작하거나 종료할 수 있다.
- [x] 종료 시, 총 시도한 횟수를 나타낸다.
### 재시작
- [x] 재시작시 다리를 재설정한다.
###  예외처리
- [x] U, D 외의 다른 커멘드를 입력하면 예외를 발생시킨다.
- [x] 재시작시 R or Q 외의 다른 커맨드를 입력하면 예외를 발생시킨다.

## 프로그래밍 요구 사항
- [x] 컨밴션 준수
- [x] process.exit() 호출 x
- [x] test 성공
- [x] indent 3 이내
- [x] 함수의 책임 분리
- [x] else 지양
- [x] 단위 테스트 확인
- [x] 함수의 길이가 10라인 이하
- [x] 메서드의 파라미터 개수 3개 이하
- [x] InputView에서만 readLine을 사용

## 객체관련
- [x] InputView 기능 구현
- [x] OutputView 기능 구현
- [x] BridgeGame 기능 구현
- [x] BridgeMaker 기능 구현
- [x] BridgeRandomNumberGenerator 사용

## 참고자료
- [expect.stringContaining](https://jestjs.io/docs/expect#expectstringcontainingstring)

