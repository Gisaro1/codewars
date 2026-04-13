function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0;
    let dogYears = 0;
​
    for (let year = 1; year <= humanYears; year++) {
        if (year === 1) {
            catYears += 15;
            dogYears += 15;
        } else if (year === 2) {
            catYears += 9;
            dogYears += 9;
        } else {
            catYears += 4;
            dogYears += 5;
        }
    }
​
    return [humanYears, catYears, dogYears];
}