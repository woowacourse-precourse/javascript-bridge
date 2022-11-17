const Checking  = {
    // 다리의 길이가 숫자인가?
    bridgeNum (bridge) {
        if (isNaN(parseInt(bridge)) === true ) {
            throw new Error("[ERROR] 다리의 길이가 숫자가 아닙니다.")
        }
    },
    // 3 이상 20 이하의 수인가?
    bridgeNumCheck(bridge) {
        if (bridge <= 2  || bridge >= 21 ) {
            throw new ERROR("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.")
        }
    }
}

module.exports = Checking;