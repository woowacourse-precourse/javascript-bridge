/** @abstract */
class StateTemplate {
	/** @abstract */
	inputHandler;
	constructor(game) {
		this.game = game;
	}
	
	/** @abstract */
	run(command) {}

	next() {
		if (!this.inputHandler) {
			
		}
		this.inputHandler((command) => {
			const isNext = this.run(command);
			if (isNext)
				this.game.next();
		})
	}
}

module.exports = StateTemplate;