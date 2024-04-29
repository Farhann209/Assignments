//given array, calculate sum of odd numbers using reduce method
const arr = [4, 2, 3, 5]

arr.reduce((sum, item)=>{
    if(item%2 in arr != 0){
        sum = sum + item
    }
    return sum
}, 0)
console.log()