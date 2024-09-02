const animals = ["Dog", "Cat", "Sheep", "Cow"];
let myString = "";
for(let i = 0; i < animals.length; i++){
  if(i === animals.length - 1){
    myString += `and ${animals[i]}.`;
  }else{
    myString += `${animals[i]}, `;
  }
}

console.log(myString);
