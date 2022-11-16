class TryCatch {
  check(methodForExcute, methodForException) {
    try {
      methodForExcute();
    } catch {
      methodForException();
    }
  }
}
