const animals = ["Dog", "Cat", "Sheep", "Cow"];
let animalList = "";
for(animal of animals){
  animalList += `${animal}, `;
}
console.log(animalList);
