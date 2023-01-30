// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let addToZero = false

for (i = 0; i < array.length; i++){
    for (let j = i; j < array.length; j++){
        if (array[i] + array[j + 1] === 0){
            addToZero = true
        }
    }
}
console.log(addToZero)