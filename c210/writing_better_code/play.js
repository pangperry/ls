function calculate_total(subtotal, tax, tip) {
  return (subtotal * (1 + tax)) + (subtotal * tip);
}

console.log(calculate_total(4.55, .2, .2))
