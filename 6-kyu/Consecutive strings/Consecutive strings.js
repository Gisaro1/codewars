const longestConsec = (strarr, k) => {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) return '';

  return strarr
    .map((_, i) => strarr.slice(i, i + k).join(''))
    .reduce((longest, current) => 
      current.length > longest.length ? current : longest, '');
};
    console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz", "waguan", "yooolaaa", "waverrrrr", "ogggfr"],4))