// console.log("map.js");


const arr = [2,4,2,5,7];

const Add =arr.map((value)=>{
    return value += 5

})
console.log(arr)
// console.log(Add)



 function Manual(arr, adding){
    let arrNew = [];
    for(i=0; i<arr.length; i++){
        const names = adding(arr[i]);
        arrNew.push(names)
    }
    return arrNew;
 }
// console.log(Manual(arr))

Manual(arr, function(sum){
    console.log(sum+2)
})