// O(2^n)
function FibonacciRecursive(number){

    // num3 = num1 + num2
    if(number < 2){
        return number;
    }
    return FibonacciRecursive(number-1)+FibonacciRecursive(number-2);
    }



// O(n)
function FibonacciIterative(number){
    let num=[0,1];

    if(number===2){
        return num[0]+num[1];
    }

    for(let i=2;i<=number;i++){
        num.push(num[i-2]+num[i-1]);
    }

    return num[number];
}

console.log(FibonacciRecursive(1));
console.log(FibonacciIterative(1));