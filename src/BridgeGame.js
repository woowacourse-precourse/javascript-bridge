/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
    #bridge;
    #position; // 현재 index.
    #tryCount;
    #length;

    /**
     * 필드를 새로 생성한 다리 정보로 업데이트한다.
     * @param {string[]} newBridge
     */
    constructor(newBridge) {
        this.#bridge = newBridge;
        this.#position = 0;
        this.#tryCount = 1;
        this.#length = newBridge.length;
    }

    /** getter */
    getPosition() {
        return this.#position;
    }

    getTryCount() {
        return this.#tryCount;
    }

    getLength() {
        return this.#length;
    }

    getBridge() {
        return this.#bridge;
    }

    /**
     * 현재 입력한 방향의 다리를 건널 수 있는지에 대한 정보를 리턴한다.
     * @param {string} choice
     */
    isCrossable(choice) {
        if (this.#bridge[this.#position] === choice) {
            return true;
        }
        return false;
    }

    /**
     * 사용자가 칸을 이동할 때 사용하는 메서드
     * <p>
     * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     * @param {string} choice
     */
    move(choice) {
        const cross = this.isCrossable(choice);
        this.#position += 1;
        return cross;
    }

    /**
     * 사용자가 게임을 다시 시도할 때 사용하는 메서드
     * <p>
     * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
     */
    retry() {
        this.#position = 0;
        this.#tryCount += 1;
    }
}

module.exports = BridgeGame;
