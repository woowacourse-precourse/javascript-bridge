# 기능 목록

# 상수 목록

- BRIDGE

  - MIN: 3
  - MAX: 20
  - UP: U
  - DOWN: D

- GAME

  - RESTART: R
  - QUIT: Q
  - CLEAR: 성공
  - FAIL: 실패

- SENTENCE

  - 다리 건너기 게임을 시작합니다.
  - 다리의 길이를 입력해주세요.
  - 이동할 칸을 선택해주세요. (위: ${BRIDGE.UP}, 아래: ${BRIDGE.DOWN})
  - 게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME.RESTART}, 아래: ${GAME.QUIT})
  - 최종 게임 결과
  - [
  - ]
  - |
  - 게임 성공 여부:
  - 총 시도한 횟수:

- ERROR
  - PREFIX: [ERROR]
  - LENGTH: 다리 길이는 ${BRIDGE.MIN}부터 ${BRIDGE.MAX} 사이의 숫자여야 합니다.
