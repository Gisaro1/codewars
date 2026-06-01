const calculateHypotenuse = (a, b)  =>{
 
        if((a <= 0 || b <= 0 )|| (typeof a !== 'number' || typeof b!== 'number') || ((isNaN(a)||isNaN(b)))) {
          throw new Error('Error')
        } else{
            return Number(Math.hypot(a,b).toFixed(3))
        }
}