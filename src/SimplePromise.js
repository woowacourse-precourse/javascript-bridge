class SimplePromise {
  #isPending = false;
  #value = null;
  #functionQueue = [];

  then(nextFunction) {
    this.#functionQueue.push(nextFunction);
    this.#execute();

    return this;
  }

  #execute() {
    if (this.#isPending) return;

    const nextFunction = this.#functionQueue.shift();
    if (nextFunction === undefined) return;

    this.#isPending = true;
    nextFunction(this.#resolve.bind(this), this.#value);
  }

  #resolve(value) {
    if (typeof value === 'function') value();
    this.#value = value;
    this.#isPending = false;

    this.#execute();
  }
}

module.exports = SimplePromise;
