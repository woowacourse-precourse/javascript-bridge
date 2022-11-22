class ArraySize {
  #arr;

  constructor(size) {
    this.#arr = Array.from({ length: size });
  }
  // size 길이의 배열 반환
  getArr() {
    return this.#arr;
  }
  //다리 배열 생성
  changeRandomArray(randomArr) {
    const arrUp = randomArr.map((element) => (element === "U" ? "U" : " "));
    const arrDown = randomArr.map((element) => (element === "D" ? "D" : " "));
    return [arrUp, arrDown];
  }
}

module.exports = ArraySize;
