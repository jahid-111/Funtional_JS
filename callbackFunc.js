// console.log('callbackFunc.js');


    function mainFunction(a,b,c,d){

        const one = a + b;
        const two = a - b;
        const three = one + two;
        const four = three /2
        const multi =  c(one,four)
        // const devid = d(multi,one)


        return multi;
    }

  const multiPly = mainFunction(100,5400, function(x,y){        
        return x*y;
    })

  const devided = mainFunction(100,400, function(x,y){
        return x-y;
    })



        // HOW CAN ADD 3 functional value ??? ( Pracctise Loading... )
    const other = mainFunction(100,400, function(x,y,z){

        const one = x+y;
        const two = one + z;
        return two


    })


    // console.log(multiPly)
    // console.log(devided)
    console.log(other)