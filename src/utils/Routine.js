/**
 * 비동기 콜백 지옥에서 벗어나게 도와주는 클래스입니다.
 * Javascript Generator 문법을 응용하여 async/await 없이 입력을 가능케 합니다.
 *
 * @example
 * new Routine(function*(routine) {
 *   Console.print('반갑습니다! 나이가 어떻게 되시나요?')
 *   yield (resolve) => Console.readLine('당신의 입력 : ', resolve);
 *   prompt.print(`당신은 ${routine.withdrawReturn()}살 이군요!`);
 *   prompt.print('당신의 거주지가 어떻게 되시나요?');
 *   yield (resolve) => Console.readLine('당신의 입력 : ', resolve);
 *   prompt.print(`${routine.withdrawReturn()}! 좋은 곳이네요.`);
 * });
 */
class Routine {
  /**
   * Routine이 실행하는 제너레이터 함수 본체
   *
   * @type {Generator}
   */
  #func;

  /** @type {Generator} */
  #runState;

  /**
   * 콜백으로 전달받은 값들을 저장하는 곳
   *
   * @type {string[]}
   */
  #returns = [];

  /**
   * @param {(Routine) => Generator} func
   */
  constructor(func) {
    this.#func = func;
    this.#start();
  }

  /**
   * 제너레이터 함수 본체를 시작한다.
   */
  #start() {
    this.#runState = this.#run();
    this.#runState.next();
  }

  /**
   * 콜백으로부터 전달받은 값을 빼서 준다.
   *
   * @returns {any}
   */
  withdrawReturn() {
    return this.#returns.shift();
  }

  /**
   * 콜백으로부터 받은 값을 임시 저장한다.
   *
   * @param {any} value
   */
  #insertReturn(value) {
    this.#returns.push(value);
    try {
      this.#runState.next();
    } catch (error) {
      const isGeneratorError = error instanceof TypeError && error.message === 'Generator is already running';
      if (!isGeneratorError) throw error;
    }
  }

  /**
   * 콜백 방식의 비동기 함수를 실행한다.
   *
   * @param asyncFunc
   * @returns {boolean} 함수가 즉시 실행이 완료되었는지 여부
   */
  #runAsyncFunc(asyncFunc) {
    let executeDone = false;
    const resolve = (value) => {
      this.#insertReturn(value);
      executeDone = true;
    };
    asyncFunc(resolve);
    return executeDone;
  }

  /**
   * 제너레이터 함수 본체를 끝날 때 까지 실행한다.
   */
  * #run() {
    const funcState = this.#func(this);
    while (!funcState.done) {
      const asyncFunc = funcState.next().value;
      if (typeof asyncFunc !== 'function') break;
      if (!this.#runAsyncFunc(asyncFunc)) yield;
    }
  }
}

module.exports = Routine;
