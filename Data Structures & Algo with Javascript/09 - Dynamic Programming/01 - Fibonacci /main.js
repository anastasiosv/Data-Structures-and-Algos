let calc_simple=0;
let calc=0;
function fibonacci(n){
    calc_simple++;
    if (n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}


function fibonacciMaster(){
    let cache = {};
    return function fib(n){
        calc++;
       if(n in cache){
           return cache[n];
       }else{
           if (n < 2){
               return n;
           } else {
            cache[n] = fib(n-1) + fib(n-2);
            return cache[n];
            }
    }
}
}

function fibonacciMaster2(n){
    let answer = [0,1];
    for (let i=2; i<=n; i++){
        answer.push(answer[i-2]+answer[i-1]);
    }
    return answer.pop();
}

//

console.log('O(2^n)',fibonacci(10));


const fasterFib = fibonacciMaster();
console.log('DP with O(n) : ',fasterFib(10));

console.log('DP "Bottom up" approach with O(n) : ',fibonacciMaster2(10));

console.log('O(2^n) with : ', calc_simple,'VS O(n) with:',calc);