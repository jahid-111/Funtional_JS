console.log("foreach.js");


const arr = [1,2,3,4,5,5,6,7,4,3,35,23,5,3,64,33,6,23,2,1,65,68,7];

// let sum = 0;
// arr.forEach(function(element,value,index){

//     console.log(element,value,index)
// })


function myMethood(value,ind){

    for(i=0;i<value.length;i++){
        ind(value[i],i, value)
    }
}
let sum = 0;
const main = function (value,index,array){

    sum += array

    console.log(value,index,sum)
}

myMethood(arr,main)














// Array.prototype.forEachTwo = function(callback,thiscontext){

//     if(typeof callback !== "function"){
//         throw `not a function`
//     }
     
//     const length = this.length;
//     let i = 0;
//     while(i<length){
//         if(this.hasOwnProperty){
//             callback.call(thiscontext,this[i],this)
//         }
//     i++
//     }

// }