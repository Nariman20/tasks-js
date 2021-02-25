let a;
function descendingOrder(n){
    a = +(String(n).split('').sort((a,b)=> b-a).join(''))
   return a
}

descendingOrder(123456789)
console.log(a)