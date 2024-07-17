//For each
player=["Sachin","Virat","Dhoni","Rohit"]
player.forEach((player)=>console.log(player))
//map creation
arr=[1,2,3,4,5,6]
cuberarr=arr.map(num=>num**3)
console.log(cuberarr)
console.log(arr)
//filter
arr1=[1,2,3,4,5,6,7,8,9,10]
let even=arr1.filter((num)=>num%2==0)
console.log(even)
//reduce
let sum=arr1.reduce((curr,next)=>curr+next)
console.log(sum)
