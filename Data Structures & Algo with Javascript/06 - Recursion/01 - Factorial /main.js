// O(n)
function findFacotrialRecursive(number){
    let answer = 1
    if(number <= 2){
        return number;
    }
    else{
        answer *= number*findFacotrialRecursive(number-1);

    }
    return answer;
}

// O(n)
function findFacotrialIterative(number){
    if(number<=2){
        return number;
    }
    let answer = 1;
    for (let i=0;i<number;i++){
        answer *= (number-i);
    }
    return answer
}

console.log(findFacotrialIterative(12));
console.log(findFacotrialRecursive(12));