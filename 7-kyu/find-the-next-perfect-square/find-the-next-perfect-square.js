function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    if (root % 1 === 0) {          // root is integer if no decimal remainder
        const nextRoot = root + 1;
        return nextRoot * nextRoot;
    }
    return -1;
}