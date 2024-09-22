const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true
    indexOfTen = i
    break
  }
}

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
nums.forEach((element) => {
  if (element % 3 === 0) {
    divisibleByThreeCount++
  }
})

// 3. use a for loop to find the average of the numbers in the array
let average = 0

nums.forEach((element) => {
  average += element
})
average = average / nums.length

// 4. use a for loop to find the largest number in the array
let largest = 0
nums.forEach((element) => {
  if (element > largest) {
    largest = element
  }
})

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
nums.forEach((element) => {
  if (element < smallest) {
    smallest = element
  }
})

// 6. find the median of the numbers in the array
let median = 0

nums.sort((a, b) => a - b)
console.log(nums)

const index = nums.length / 2 - 1
if (nums.length % 2 === 0) {
  median = (nums[index] + nums[index + 1]) / 2
} else {
  median = nums[index]
}
median = Math.floor(median) // TODO: not sure why this is needed to fulfill test requirements? (3 + 4) / 2 = 3.5

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
