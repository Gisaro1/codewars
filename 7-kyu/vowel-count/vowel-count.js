function getCount(str) {
 return str.split('').filter(op => "aeiouAEIOU".includes(op)).length;}