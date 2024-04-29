//given array, calculate sum of odd numbers using reduce method
const arr = [4, 2, 3, 5]

const sumOdd = arr.reduce((sum, item)=>{
    if(item%2 != 0){
        sum = sum + item
    }
    return sum
}, 0)
console.log(sumOdd)