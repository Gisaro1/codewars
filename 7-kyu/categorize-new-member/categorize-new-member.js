function openOrSenior(data){
  let result = []
for(let i = 0 ; i < data.length; i++){
  let age = data[i][0]
  let hand = data[i][1]
  if(age >= 55 && hand > 7){
    result.push('Senior')
  } else{
    result.push('Open')
  }
}
  return result
  }