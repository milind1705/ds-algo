function fibonacci(n){
    var fibo = [0, 1];
    if (n < 2) return 1;
    for(let i = 2; i <= n; i++ ){
        fibo[i]= fibo[i-1]+fibo[i-2];
    } 
    console.log (fibo[n])
    return fibo[n]
};

fibonacci(12);

//the series in which the number is addition of previce two number.

//second try

// function fibonacci(n){
    
// }