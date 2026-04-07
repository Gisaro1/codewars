function calculateYears(principal, interest, tax, desired) {
    let y = 0
    for(let  i = principal; i < desired;y++){
      let income = i * interest
      let taxPaid = income * tax
      let netProfit = income - taxPaid
      i+= netProfit
    }
  return y
}