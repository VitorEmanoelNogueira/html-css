let flower1 = 4
let flower2 = 7

function lovefunc(flower1, flower2){
 return (flower1 % 2 === 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower1 % 2 === 0) ? true:false
}