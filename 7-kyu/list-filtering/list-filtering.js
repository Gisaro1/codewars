function filter_list(l) {
return l.filter(n => {
  return typeof n == 'number'
})
}