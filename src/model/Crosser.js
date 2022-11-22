class Crosser {
    state;

    constructor() {
        this.state = {
            attempts: 1,
            location: 0,
            upState: [],
            downState: [],
        }
    }

    updateState(moving, result) {
        const mark = result === 'success' ? 'O' : 'X';
        const [update, empty] = moving === 'U' ? ['upState', 'downState'] : ['downState', 'upState'];
        this.state = {
            ...this.state,
            location: this.state.location + 1,
            [update]: [...this.state[update], mark],
            [empty]: [...this.state[empty], ' ']
        }
    }

    resetState() {
        this.state = {
            attempts: this.state.attempts + 1,
            location: 0,
            upState: [],
            downState: [],
        };
    }
}

module.exports = Crosser;
