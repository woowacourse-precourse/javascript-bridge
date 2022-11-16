class TryCatch {
  check(methodForExcute, methodForException) {
    try {
      return methodForExcute();
    } catch {
      methodForException();
    }
  }
}
