// function prime (n){
   
//    for(let i=n; i>=1; i--){
// if(n % i==0) {

//     console.log(i)
// }
//    }
// }

// prime(100);

function primeFactors(n){
   let divisor = 2;
   let factors = [];


   while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    console.log (factors);
  
};

primeFactors(625);