// console.log('higherFunc.js');




// HOW IT WORKS 

function sum(a,b){

    return a+b;
}
// sum()
function multiFunc(a,b,func){
    const c = a+b;
    const d =a-b;

        function finall(){
            const m = func(a,b);
                return c*d*m;    
        }
 
    return finall;
}
const forResult = multiFunc(4,2,sum);
console.log(forResult());