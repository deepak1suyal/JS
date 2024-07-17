//First oder function pass primitive object return object primitive
//Higher oder function is a function in which we can pass a function or return a function

function opratorion(oprator,a,b){
    return oprator(a,b);
}
function add(a,b){
    return a+b
}
let result=opratorion(add,5,7);
console.log(result);