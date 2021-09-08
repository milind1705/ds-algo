// function palindrome (n){
// let newstr = n.length;
// for(let i=0; i< newstr/2; i++){
//     if (n[i] !== n[newstr - 1 - i]) {  
//         console.log( 'It is not a palindrome');  
// }}}

// palindrome(121);

// function palindrome(n){
//     var newString = "";
//    for(let i= n.length-1; i>= 0; i--){
//        newString += n[i]
//        console.log(newString)
//        return newString;
//    }
//    if(n === newString){
//        return true;
//    } else {
//        return false
//    }
// };

// console.log(palindrome("love"))

function palindrome(str){
    const length = str.length;
    for(let i = 0; i < length/2; i++ ){
       //  console.log(str[ length-1 - i])
        //console.log(str[i])
        if(str[i] != str[length -1 -i]){
            return "this is not palindrome"
        } else return "this is palindrome"
    }
}

console.log(palindrome("12345678987654321"))