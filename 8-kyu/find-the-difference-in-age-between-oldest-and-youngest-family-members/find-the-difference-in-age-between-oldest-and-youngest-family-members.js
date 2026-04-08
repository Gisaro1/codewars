function differenceInAges(ages){
let old = Math.max(...ages)
let young = Math.min(...ages)
let diff = old - young
return [young,old,diff]
}
​