// console.log('firstClassFunc.js')



function add(x,y){
    return x * y;
}

const sum = add;
const dStore = add(3,4)
// console.log(dStore)


// FUNCTION STORE IN ARRAY  
const arrStore = [];
arrStore.push(add);

// console.log(arrStore[0](3,5));

const obj = {
    functionOne : add
}
// console.log(obj, "In object");


setTimeout( function inTime(){

        console.log("hello")
},100)