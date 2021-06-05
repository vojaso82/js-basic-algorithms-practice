// ### Iteration 1: Names and Input

// 	1.1 Create a variable `hacker1` with the driver's name.

// 	1.2 Print `"The driver's name is XXXX"`.

//   	1.3 Create a variable `hacker2` with the navigator's name.

//   	1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = "Vojislav";

console.log(`The driver's name is ${hacker1}`)


let hacker2 = "Aida";

console.log(`The navighator's name is ${hacker2}`)


// ### Iteration 2: Conditionals
//   2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//   <br>
// 	  - `The driver has the longest name, it has XX characters.` or <br>
// 	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
// 	  - `Wow, you both have equally long names, XX characters!`.

function names(){
  if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
}

names(hacker1, hacker2)

// ### Iteration 3: Loops
//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`

function printName(){
   return hacker1.toUpperCase().split("").join(" ")
}

printName()

// 3.2 Print all the characters of the navigator's name, in reverse order. 
//   i.e. `"nhoJ"`

function reverseName(){
  return hacker1.split("").reverse().join("")
}

reverseName()

// 3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//     - `The driver's name goes first.` <br>
//     - `Yo, the navigator goes first definitely.` <br>
//     - `What?! You both have the same name?`

function lexOrder(){
  // console.log(hacker1.localeCompare(hacker2),hacker2.localeCompare(hacker1))
  if (hacker1.localeCompare(hacker2)===-1){
    return `The driver's name goes first.`
  } else if (hacker2.localeCompare(hacker1)===-1){
    return `Yo, the navigator goes first definitely.`
  } else {
    return `What?! You both have the same name`
  }
}

lexOrder()

// #### Bonus 1:
// Go to [lorem ipsum generator](http://www.lipsum.com/) and:
//   - Generate 3 paragraphs. Store the text in a variable type of string.


let loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Latin has been the industry's standard dummy Latin text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but LATIN also the leap into electronic LATIN typesetting, remaining essentially unchanged. It was popularised in the 1960s with Latin the release of Letraset sheets containing Latin Lorem Ipsum passages, and more recently Latin with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//   - Make your program count the number of words in the string.

function lorem(){
  return loremIpsum.split(" ").length
}


lorem()

//   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.


function latinWords(){
 let newArray = loremIpsum.split(" ");
 let repeatWord = 0;
 //console.log(newArray)
 for (let word of newArray){
   //console.log(word) 
   if (word.toLowerCase() === "Latin".toLowerCase()){
     repeatWord ++
   }
 } return repeatWord
 }


latinWords()

// #### Bonus 2:
// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
//   - "A man, a plan, a canal, Panama!"
//   - "Amor, Roma"
//   - "race car"
//   - "stack cats"
//   - "step on no pets"
//   - "taco cat"
//   - "put it up"
//   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
  
//   __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 


let phraseToCheck = "A man, a plan, a canal, Panama!";

function palWords(){
  let reverse = phraseToCheck.split("").reverse().join("");
  console.log(reverse)
  if (phraseToCheck.toLowerCase() === reverse.toLowerCase()){
    return "word is palindrome"
  }
 return "word is not palindrome"
}

palWords()
