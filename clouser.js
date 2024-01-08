console.log("clouser.js");




function helloMain(){

  const name = "ParentFunction";

    function childOne(){
        console.log(name);

    }
  return childOne;

}
console.log(helloMain())