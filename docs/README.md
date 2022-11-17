### 기능 목록

1. 다리 길이 입력받기 (InputView.readBridgeSize())

   - 3 이상 20 이하의 숫자 이외의 입력은 오류 발생(InputView.isValidBridgeSize())

2. 다리 만들기 (BridgeMaker.makeBridge())

3. 이동할 칸 입력받기 (InputView.readMoving())

   - U,D 이외의 입력은 오류 발생 (InputView.isValidMoving())

4. 만든 다리의 0,1값을 확인하기

5. 출력 만들기

   - 출력 템플릿 만들기
   - 이동 가능하다면(U-1, D-0) "O" 출력하기
   - 이동 불가능하다면 "X" 출력하기

6. 이동 불가시, 게임 재시도 여부 입력받기
   - R 입력시, 재시도 -> 시도한 횟수 누적하기
   - Q 입력시, 게임 종료
7. 이동 가능시, 다음 이동할 칸 입력받기

8. 성공, 게임 종료할시 '최종 게임 결과' 출력하기
   - 게임 성공 여부 출력하기
   - 시도한 횟수 출력하기
