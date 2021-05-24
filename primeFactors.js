function prime (n){
   
   for(let i=n; i>=1; i--){
if(n % i==0) {

    console.log(i)
}
   }
}

prime(100);