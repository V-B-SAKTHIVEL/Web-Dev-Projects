//String Methods
//1. length
const str1 = "String";
console.log(str1.length); //31

//2. includes()
if(str1.includes("ring")){
    console.log("Found the ring!");
}else{
    console.log("No ring!");
}

//3. startsWith() and endsWith()
if(str1.startsWith("ring")){
    console.log("Starts with ring");
}else{
    console.log("Doesn\'t start with ring");
}

if(str1.endsWith("ring")){
    console.log("Ends with ring");
}else{
    console.log("Doesn\'t end with ring");
}

//4. indexOf()
const str2 = "JavaScript is a Scripting Language";
const firstOccur = str2.indexOf("Script");
const secondOccur = str2.indexOf("Script", firstOccur + 1);
console.log(firstOccur, " is the index of first occurence of the word Script");
console.log(secondOccur, " is the index of second occurence of the word Script");

//5. slice()
const str3 = "JavaScript";
console.log(str3.slice(0, 4)); //Java
console.log(str3.slice(4)); //Script

//6. toLowerCase() and toUpperCase()
console.log(str3.toLowerCase());
console.log(str3.toUpperCase());

//7. replace()
const str4 = "Mozilla";
console.log(str4)
const updated = str4.replace("Moz", "Van");
console.log(updated);

//8. replaceAll()
const sentence = "To be or not to be";
console.log(sentence);
console.log(sentence.replaceAll("be", "code"));
