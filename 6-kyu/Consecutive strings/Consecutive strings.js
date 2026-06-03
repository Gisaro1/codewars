    const longestConsec =(strarr, k) =>{
        let n = strarr.length;
        let longest = '';
        if(n === 0 || k<=0 || k>n) return ''
        for(let i = 0; i < n-k;i++){
            let current = strarr.slice(i,i+k).join("");
            if(current.length > longest.length){
                longest = current
            }
        }
        return longest
    }
    console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz", "waguan", "yooolaaa", "waverrrrr", "ogggfr"],4))