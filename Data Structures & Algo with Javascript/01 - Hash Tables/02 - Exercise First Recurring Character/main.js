/* Google Question

// Given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// Give an array = [2,3,4,5]
// it should return undefined

 */
function FirstRecurrent(input) {
    for (let i =0; i < input.length ; i++){
        for (let j=i+i; j< input.length-1; j++){
            if (input[i]===input[j]){
                return input[i];
            }

        }
    }
    return undefined

} // O(N^2)

function FirstRecurrentv2(input) {
    let map = {}
    for (let i=0; i< input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        } else{
            map[input[i]]=i;
        }
    }
    return undefined
} // O(N)


const myArray = [2,5,1,2,3,5,1,2,4];
console.log(FirstRecurrent(myArray));
console.log(FirstRecurrentv2(myArray));
