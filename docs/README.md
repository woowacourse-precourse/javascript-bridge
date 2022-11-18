# 👉 Github commit convention

> Message format : <br>`type of commit : commit message`

<br>

**Type of commit**

* feat : new feature implementation
* settings : set initial state
* fix : bug fix
* style : style fix (formatting, ...)
* refactor : code refactoring
* test : add or modify test case
* docs : add or modify documentations

---

# 👉 Feature Implementation list

## Domain Logic
- [x] Implement class that returns random number
- [x] Implement class that makes bridge depending on received random number
- [x] Implement class that controls the game depending on user input
 - [x] Function that moves user
 - [x] Function that restarts the game
- [ ] Write test case for each function

## UI Logic
- [x] Implement class that receives input from user
  - [x] Function that receives size of bridge
    - [ ] Throw error when input is NaN
    - [ ] Throw error when input is less than 1
  - [x] Function that receives which cell to move to
    - [ ] Throw error when input isn't 'U' or 'D'
  - [x] Function that receives whether game should restart or not
    - [ ] Throw error when input isn't 'Q' or 'R'

- [x] Implement class that print output to user
  - [x] Function that prints current position of user
  - [x] Function that prints total result of the game