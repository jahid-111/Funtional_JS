// console.log('reduce.js');



const arr = [2,53,64,25,62,5];

const sum = arr.reduce(function(valu, valueTwo){

    return valu +valueTwo;

})



const array = [1,2,3,45];

function implement(array,cb,acc){
    for(i=0; i<array.length; i++){
        acc = cb(acc,array[i])
    }
    return acc;
}

const sums = implement(array, function (prv,cur){
    return prv+cur;
},3)

const dvd = implement(array, function (prv,cur){
    return prv-cur;
},3)
const mul = implement(array, function (prv,cur){
    return prv*cur;
},3)

// console.log(sums)
// console.log(dvd)
// console.log(mul)


const product = [
    
    {item :"js course",
     price :5500
    },
    {item :"py course",
     price :4990
    },
    {item :"Mobile Dev course",
     price :7800
    },
    {item :"App course",
     price :13200
    },
]


const Total = product.reduce((acc,item)=>acc +item.price,0)
console.log(Total)