// Use Lo-Dash methods: _.filter, _.map, _.maxBy, _.includes
​
// 1. Which sets were released in 2003? Return the full set objects (not just names).
function getSetsReleasedIn2003(data) {
    return _.filter(data, { year: 2003 });
}
​
// 2. What set numbers belong to sets that contain a Luke Skywalker minifigure? Return an array of set numbers.
function getSetNumbersForLukeSkywalker(data) {
    return _.map(_.filter(data, function(set) {
        return _.includes(set.minifigs, "Luke Skywalker");
    }), 'set');
}
​
// 3. What is the name of the set with the most pieces? Return the name.
function getSetNameWithMostPieces(data) {
    var maxSet = _.maxBy(data, 'pieces');
    return maxSet ? maxSet.name : null;
}
​