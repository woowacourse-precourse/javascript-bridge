/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
    BRIDGE = [];
    index = 0;

    /**
     * 게임 시작 후 다리 상태를 받아 저장하는 메서드
     * @param {string[]} bridge
     */
    set(bridge) {
        this.BRIDGE = bridge;
    }
    /**
     * 사용자가 칸을 이동할 때 사용하는 메서드
     * <p>
     * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * @param {number} direction
     * @returns {string[]}
     */
    move(direction) {
        let now = direction === 0 ? "U" : "D";
        if (this.BRIDGE[this.index] === now) {
            this.index++;
            return this.BRIDGE.slice(0, this.index);
        } else {
            let result = this.BRIDGE.slice(0, this.index);
            result.push(now + "X");
            this.index = 0;
            return result;
        }
    }

    /**
     * 사용자가 게임을 다시 시도할 때 사용하는 메서드
     * <p>
     * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * @param {number} input
     * @returns {boolean}
     */
    retry(input) {
        this.index = 0;
        if (input === 0) return true;
        return false;
    }
}

module.exports = BridgeGame;
