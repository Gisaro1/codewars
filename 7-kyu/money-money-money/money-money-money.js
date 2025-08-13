function calculateYears(principal, interest, tax, desired) {
    let y = 0
    while (principal < desired){
      let income = principal * interest
      let taxPaid = income * tax
      let netprofit = income - taxPaid
      principal += netprofit
      y++
    }
  return y
}