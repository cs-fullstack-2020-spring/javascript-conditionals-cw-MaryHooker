// # Javascript Conditionals Classwork
// ### Problem 1 :
// Create two variables
// ```
// let anyWord = [WORD]
// let theSameWord = [WORD]
// ```
// create an if statement comparing the two variables. If they are the same print
// ```
// THAT IS...
// CORRECT!!!
// ```
// Else print
// ```
// THAT IS...
// NOT CORRECT
// ```

// 1. 
// let anyWord = "Blue";
// let theSameWord = "Purple";
// if(anyWord==theSameWord){
//     console.log("That is... CORRECT!!!");
// } else{
//     console.log("That is...NOT CORRECT!!!");
// }



// ### Problem 2 :
// Ask the user to enter a number. If the number is positive print 
// ```
// [NUMBER] is positive.
// ```
// Oherwise print
// ```
// [NUMBER] is negative.
// ```

// 2.
// let number=prompt("Enter a number");
// if(number >=1){
//     console.log(number + " is positive");
// } else if(number<=-1){
//     console.log(number + " is negative");
// }



// ### Problem 3 :
// Ask the user to enter a number. Ask the user to enter another number. If the sum of those two numbers is even alert the user 
// ```
// The sum of [FIRST NUMBER] and [SECOND NUMBER] is even.
// ```
// Oherwise alert the user
// ```
// The sum of [FIRST NUMBER] and [SECOND NUMBER] is odd.
// ```

// 3.
// let number=prompt("Enter a number");
// let anotherNumber=prompt("Enter another number");
// if(parseInt(number + anotherNumber) % 2==0){
//     alert("The sum of " + number + " and " + anotherNumber + " is even.");
// } else{
//     alert("The sum of " + number + " and " + anotherNumber + " is odd.")
// }





// ### Problem 4 :
// Define a variable called `secretWord` with the string value "secret". Ask the user to enter a word. Ask the user to enter another word. If the words are the same OR one of the words matches `secretWord` print 
// ```
// You got in...but we don't know how
// ```
// If both words are the same but DO NOT match `secretWord` print
// ```
// You got in...but only because your words matched
// ```
// If only one of the words matched `secretWord` print
// ```
// You got in..but only because one of your words matched the secret word
// ```
// If both words are the same AND they match `secretWord` print
// ```
// You got in!
// ```
// Otherwise print
// ```
// Locked Out
// ```

// 4.
let secretWord="secret";
let secret=prompt("Enter a word");
let another=prompt("Enter another word");

if(secret==another&&secret!=secretWord && another==secretWord){
    console.log("You got in...but we dont know how")
} else if(secret==another&&secret==secretWord && another!=secretWord){
    console.log("You got in...but we dont know how")
}  else if(secret==another && secret != secretWord && another != secretWord){
    console.log("You got in...but only because your words matched")
} else if(secret==secretWord && another !=secretWord){
    console.log("You got in...but only because one of your words matched the secret word")
} else if(secret != secretWord && another==secretWord){
    console.log("You got in...but only because one of your words matched the secret word")
} else if(secret==another && secret==secretWord && another==secretWord){
    console.log("You got in!")
} else{
    console.log("Locked out")
}
// let anotherWord="secret"
// let anotherWord=prompt("Enter another word");
// // let secret=prompt("Enter a word");
// // let another=prompt("Enter another word");
// if(secretWord==anotherWord || secretWord==secretWord || anotherWord==secretWord){
//     console.log("You got in..but we don't know how");
// } else if(secretWord=anotherWord && secretWord != secretWord && anotherWord != secretWord){
//     console.log("You got in...but only because your words matched")
// }





// ### Challenge:
// Ask the user to enter a day of the week. Print the corresponding Spanish word. If they do not input a day of the week print "That is not a day of the week in English."

// lunes. Monday.
// martes. Tuesday.
// miércoles. Wednesday.
// jueves. Thursday.
// viernes. Friday.
// sábado. Saturday.
// domingo. Sunday.
