# 시나리오

- 게임 시작 문구
- 다리 길이 입력 문구
- 다리 길이 입력
- 이동할 칸 입력 문구
- 이동할 칸 입력
- bridge 상황 출력
- 게임 재 시도 여부 입력 문구
- 게임 재 시도 여부 입력
- 최종 게임 결과 문구
- 최종 게임 결과
- 게임 성공 여부 문구
- 총 시도한 횟수 문구

# Class

- App : 아래 4개 클래스를 사용하여 게임 진행
- BridgeGame : Bridge Game 관리
  - move : 사용자 입력까지 확인
  - retry : 게임 재실행
  - setBridge : bridge 생성하여 관리
  - getCount : count 반환
  - pushInput : 사용자 입력 관리
  - makeMap : 사용자 입력 결과 반환
- BridgeMaker : Bridge 생성
  - BridgeRandomNumberGenerator 객체 사용해서 다리 위치 선택
- InputView : 사용자 입력 받기
  - 다리 길이 입력 => 3 이상 20 이하
  - 이동할 칸 입력 => U,D
  - 게임 재 시도 여부 입력 => R,Q
- OutputView : 출력하기
  - 게임 시작 문구 => printStart
  - 다리 길이 입력 문구 => printRequestBridgeLength
  - 이동할 칸 입력 문구 => printRequestUserMove
  - 게임 재 시도 여부 입력 문구 => printRequestReplay
  - 최종 게임 결과 문구 => printResult
  - 최종 게임 결과 => printMap
  - 게임 성공 여부 문구 => printGameResult
  - 총 시도한 횟수 문구 => printTryGame

# Util

- makeMapObj (answer,input) => { [index] : true | flase }
- makeMap (input,obj) =>
