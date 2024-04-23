//Q1 create two constants, add them assign to a new constants
const x = 40
const y = 20
const z = (x + y)
console.log(z)


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'

console.log(a===b)


// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"
const randomNum = Math.random()*6
const wholeNum = Math.floor(randomNum)
console.log(wholeNum)

if (wholeNum<3){
console.log("Number is less than 3.")
}
else if(wholeNum === 3){
    console.log("Number is equal to 3.")
}
else{
    console.log("Number is greater than 3.")
}
