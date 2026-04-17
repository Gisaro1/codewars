function feast(beast, dish) {
const beastFirst = beast[0]
const beastLast = beast[beast.length - 1]
const dishFirst = dish[0]
const dishLast = dish[dish.length - 1]
return beastFirst === dishFirst && beastLast === dishLast
}