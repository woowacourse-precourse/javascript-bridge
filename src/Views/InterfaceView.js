class InterfaceView {
  readLine(query, callback) {
    throw new Error('메서드 구현 요망');
  }

  print(message) {
    throw new Error('메서드 구현 요망');
  }

  close() {
    throw new Error('메서드 구현 요망');
  }
}

module.exports = InterfaceView;
