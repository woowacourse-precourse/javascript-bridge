const Text = {
    INPUT : {
        bridgeSize: '다리의 길이를 입력해주세요.\n',
        moving: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
        retry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
    },

    OUTPUT : {
        start: '다리 건너기 게임을 시작합니다.\n',
        resultText: '최종 게임 결과',
        resultSuccess: (successFlag) => `게임 성공 여부: ${successFlag? '성공':'실패'}`,
        resultTryCount: (tryCnt) => `총 시도한 횟수: ${tryCnt}`
    }
}

module.exports = Text;