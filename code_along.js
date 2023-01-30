let string = "Hello'"
let boolean = true
let number = 42
let zero = 0
let falseString = ""

console.log(string + number)
console.log("====================")
console.log(number, 'Line 7')
console.log(String(number))
console.log(boolean, typeof boolean)
console.log(number, typeof number)
console.log(typeof [3,4,5])
console.log("=======================")

if(zero === 0){
    console.log("Zero is false")
}

if(!zero){
    console.log("Zero is true")
} else {
    console.log("Zero is false")
}

if(falseString){
    console.log("This string contains", falseString)
} else {
    console.log("This string is empty")
}
console.log("===========================")
console.log(!false)

console.log(Boolean(!zero))

console.log(Boolean(zero))
console.log("========================")

let helloWorld = "Hello, World!"

if (helloWorld.toLowerCase().includes("hello")){
    console.log("Hello, World! contains hello")
} else {
    console.log("Hello, World! doesn't contain hello")
}

let fruits = ["Apples, Bananas, Cherries"]

let abcString = `the ABC's of fruit are ${fruits.join(', ').toLowerCase()}`

let noMoreCherries = abcString.split(',')
noMoreCherries.pop()
noMoreCherries = noMoreCherries.join(', and').replace("C", "")
console.log(noMoreCherries)

console.log("=============")

const madLib = (str,arr) => {
    for(let i=0; i < arr.length; i++){
        let randInt = Math.floor(Math.random() * arr.length)
        str = str.replace("X", arr[randInt])
        if (!str.includes('X')){
            break;
        }
    }
    return str
}

let sampleOne = "The X, X fox jumped over the X, X fence."
let arrayOne = ['quick', 'brown', 'tall', 'black', 'slow', 'green', 'stinky', 'intrepid', 'silly', 'nondescript', 'red', 'dumb']

let newSentence = madLib(sampleOne, arrayOne)
console.log(newSentence)

console.log("======================")

const addition = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2))
    return "You have to enter a valid number"

    return num1 + num2
}
console.log(addition(5,7))
console.log(addition("Damien", 278))//returns a string