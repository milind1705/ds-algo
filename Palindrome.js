function palindrome (n){
let newstr = n.length;
for(let i=0; i< newstr/2; i++){
    if (n[i] !== n[newstr - 1 - i]) {  
        console.log( 'It is not a palindrome');  
}}}

palindrome(121);