/** @abstract */
class StateTemplate {
	constructor(game) {
		this.game = game;
	}
	
	/** @abstract */
	run(command) {}

	next() {
		this.inputHandler((command) => {
			const isNext = this.run(command);
			if (isNext)
				this.game.next();
		})
	}
}

module.exports = StateTemplate;