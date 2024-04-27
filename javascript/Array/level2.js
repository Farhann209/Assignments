//Q1. console.log the maximum number of an array
//expectedd output 5
const arr =  [3,5,2]
const maxNum = Math.max(...arr)
console.log(maxNum)

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]
const removeArr = arr.slice(0,2)
console.log(removeArr)



//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
arr.splice(1,1)
const multipliedArr = arr.map((item)=>{
    return item * 5
})
console.log(multipliedArr)

//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32]