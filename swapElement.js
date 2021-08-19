//swap element using third or temp element

// function swapElement(a, b){
//     var a = a;
//     var b = b;
//   var temp = a,
//          a = b,
//          b =temp;

//          console.log(`a: ${a}, b: ${b}`)
// }

// swap element without using third element
function swapElement(a, b) {
    var [a, b] = [b, a]
    console.log(`a: ${a}, b: ${b}`)
}

swapElement(5, 3)