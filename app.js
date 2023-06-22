// // chapter 17 to 20
// //Q1)Declare and initialize an empty multidimensional array.(Array of arrays)

// let multiDimensionalArr = [[]];
// //Q2)Declare and initialize a multidimensional array representing the following matrix:


//  let multiDimensionalArr =[
//      [1,0,1,2]
//      [0,1,2,3]
//      [2,1,0,1]
// ]

// //Q3)Write a program to print numeric counting from 1 to 10.
// for(let i=1;i<=10;i++){
// console.log(i)
// }
// //Q4)Write a program to print multiplication table of any number using for loop. Table number & length should betaken as an input from user.
// let tableNumber=+prompt("enter table number")
// let lengthOfTable=+prompt("enter the length od table")
// document.write("Multiplication table of ",tableNumber,"<br>" ,"Lenghth ", lengthOfTable)
// for(let i=1;i<=lengthOfTable;i++){
//     document.write("<br>")
//     document.write(tableNumber + " X " + i + " = " + tableNumber*i)
// }

// //Q5) Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// fruits = ["apple","banana","mango","orange","strawberry"]
// for(let i=0;i<fruits.length;i++){
//     document.write("<br>",fruits[i])
// } 
// document.write("<br><br><br>")
// for(let j=0;j<fruits.length;j++){
//     document.write("<br>")
//     document.write("Element at index " ,j , " is " ,fruits[j])
// }

// //Q6)Generate the following series in your browser. See example output.
// //a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<b>Counting</b><br>")
// let arr1=[]
// for(let i=1;i<=15;i++){
//     arr1.push(i)
// }
// let result1= arr1.join(", ")
// document.write(result1,"<br>")

// //b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<b>Reverse Counting</b><br>")
// let arr2=[]
// for(let i=10;i>=1;i--){
//     arr2.push(i)
// }
// let result2= arr2.join(", ")
// document.write(result2,"<br>")
// //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<b>Even</b><br>")
// let arr3=[]
// for(let i=0;i<=20;i++){
//     if(i%2===0){
//         arr3.push(i)
//     }
// }
// let result3= arr3.join(", ")
// document.write(result3,"<br>")
// //d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<b>Odd</b><br>")
// let arr4=[]
// for(let i=0;i<=20;i++){
//     if(i%2!==0){
//         arr4.push(i +'')
//     }
// }
// document.write(arr4+"<br>")
// //e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<b>Series</b><br>")
// let arr5=[]
// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         arr5.push(i+"k ")
//     }
// }
// document.write(arr5+"<br>")

// //Q7)You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
let array = ["cake","apple pie","cookies","patties"]
let userOutput= prompt("Welcome to Deline Cakes🎂.What you want to order")
let output=false
for (let i = 0; i < array.length; i++) {
    if(userOutput===array[i]){
        output=true
    }
}
   
if(output){
document.write(userOutput + " is available in our bakery")
}
else   
document.write(userOutput + " is not available in our bakery")

// //Q8)Write a program to identify the largest number in the given array.
//  let arr = [24, 53, 78, 91, 12]

// let largestNum= arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNum) {
//       largestNum = arr[i];
//     }
//   }
  
//   document.write("The largest number is: " + largestNum);

// //Q9)Write a program to identify the smallest number in the given array.
// let arr = [24, 53, 78, 91, 12]
// let smallNum= arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallNum) {
//       smallNum = arr[i];
//     }
//   }
  
//   document.write("The smallest number is: " + smallNum);

// //Q)10Write a program to print multiples of 5 ranging 1 to 100.
// for(i=1;i<=100;i++){
//     if(i%5===0){
//         document.write(i, ",")
//     }
// }