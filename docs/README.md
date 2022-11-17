### 기능 목록

1. [x] 다리 길이 입력받기 (InputView.readBridgeSize())

   - [★] 3 이상 20 이하의 숫자 이외의 입력은 오류 발생(InputView.isValidBridgeSize())
     -> BridgeMaker.isValidBridgeSize()로 수정할지 고민 필요

2. [x] 다리 만들기 (BridgeMaker.makeBridge())

3. [x] 이동할 칸 입력받기 (InputView.readMoving())

   - [] U,D 이외의 입력은 오류 발생 (InputView.isValidMoving())

4. [x]이동할 칸의 상태(U, D)와 입력값 비교하기

   - [x] "U" -> 1 , "D" -> 0 으로 변환하기 (BridgeGame.transInputtoPosition)
   - [x] 동일하면, "O" 동일하지 않으면, "X" 반환하기
   - [x] 맵 채우기

5. 움직임의 결과(O,X)와 다리의 위치값(0,1)를 활용해 출력만들기

   - [] 배열 형태로 결과값 저장하기
   - .join(" | ")으로 묶어 string 처리해주기

6. 출력 만들기

   - 출력 템플릿 만들기
   - 이동 가능하다면(U-1, D-0) "O" 출력하기
   - 이동 불가능하다면 "X" 출력하기

7. 이동 불가시, 게임 재시도 여부 입력받기
   - R 입력시, 재시도 -> 시도한 횟수 누적하기
   - Q 입력시, 게임 종료
8. 이동 가능시, 다음 이동할 칸 입력받기

9. 성공, 게임 종료할시 '최종 게임 결과' 출력하기
   - 게임 성공 여부 출력하기
   - 시도한 횟수 출력하기
