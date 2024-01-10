// const arr = [3,6,4,37,8,43,6,2];

// const filter = arr.filter(function(value){
//     return value % 2 === 0;
// })

// console.log(filter)


const arr = [3,6,4,37,8,43,6,2];

function filterImplement(arrVar,Cb){

let InFor = [];
    for(i=0;i<arrVar.length;i++){
        const theArr = arrVar[i];
    // ---Cb(...,...,...)
        if(Cb(theArr,i,arrVar)){
            InFor.push(theArr);
        } 
    }
    return InFor   
}

// console.log(filterImplement(arr))

const even = filterImplement(arr, function(value){
        return value % 2 ===0
})
console.log(even)

const odd = filterImplement(arr, function(value){
        return value % 2 ===1
})
console.log(odd)