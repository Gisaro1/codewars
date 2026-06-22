function* demo(){
    console.log('Start')
    yield 1;
    console.log('ready?')
    yield 2;
    console.log('we done')
    yield 3
}

const g = demo();
console.log('before .next()')
g.next()

console.log('calling')
g.next()
g.next()