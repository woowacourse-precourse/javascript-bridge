class Component {
  #OVERIDING_ERROR = '[ERROR] YOU SHOULD DECLARE "render" method';

  render() {
    throw new Error(this.#OVERIDING_ERROR);
  }
}

module.exports = Component;
