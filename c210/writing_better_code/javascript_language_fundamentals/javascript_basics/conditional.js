if (condition1) {
  some code
    if (condition2) {
      // some code
    } else {
      // some code
    }
} else {
  // some code
  if (condition4) {
    // some code
    if (condition5) {
      // some code
    }
  }
}

//Path1: condition1 - condition2
//Path2: condition1 - not condition2
//Path3: not condition1
//Path4: not condition1 - condition4
//Path5: not condition1 - condition4 - condition5
