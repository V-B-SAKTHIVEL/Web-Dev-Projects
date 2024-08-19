//Array Methods
//1. length
let array = [1, 2, 3, 4, 5, [6, 7, 8]];
console.log(array.length); //returns the array1 's length
console.log(array[2].length); //return the subarray's length

//2. indexOf()
console.log(array.indexOf(2)); //1
console.log(array.indexOf(0)); //returns -1 as there is no such element.

//Pushing elements
//3.1 push()
array.push(5); 
console.log(array);
//3.2 unshift()
array.unshift(0);
console.log(array);

//Popping elements
//4.1 pop()
array.pop();
console.log(array);
//4.2 shift()
array.shift();
console.log(array);
//4.3 splice()
array.splice(array.length - 1, 1);
console.log(array);

//5. iteration through an array using for...of loop
console.log("\nThe array values are: ")
for(const arrVal of array){
  console.log(arrVal);
}

//6. map()
function double(value){
  return value * 2;
}
let arrMap = array.map(double);
console.log("The doubled values of array are: \n",arrMap);

//7. filter()
function isLong(value){
  return value.length > 8;
}

let array2 = ["India", "United States", "Switzerland", "Russia", "South Korea"];
let arrFilter = array2.filter(isLong);
console.log("Array values that are more than has more than 8 characters: \n", arrFilter);

//string to array
//8. split()
const string = "India,United States,Switzerland,Russia,South Korea";
let array3 = string.split(',');
console.log("String to array: \n", array3);
console.log(array3.toString());
