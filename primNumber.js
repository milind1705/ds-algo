function primeNumber(n){
    let divisor = 2;

    while(n > divisor){
        if(n % divisor == 0){
            console.log(false);
        } else divisor++
        
    } console.log(true);
}

primeNumber(8)