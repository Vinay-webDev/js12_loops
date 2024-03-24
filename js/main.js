// intro to loop

let myNumber = 0;
 while (myNumber < 10) {
    console.log(myNumber);
    myNumber = myNumber + 1;
 }

// infinite while loop!!
/*
while (true) {
    console.log("bro what is this?");
}
*/
//////////////////////////////////////////////////////////////////////////////////////
/* Do not create endless loop or infinite loop 
it will use all the memory until it's finished***/ 
///////////////////////////////////////////////////////

let myNumber = 0;
while (myNumber <= 50) {
    console.log(myNumber);
    myNumber += 10;
} 
// incriment by 10
////////////////////////////////////////////////////
// do while loop (these loops will execute atleast once!)

let myNumber = 0;
do {
    myNumber +=5;
    console.log(myNumber);
} while (myNumber < 50);

////////////////////////////////////////////////////////
// what's the difference between do while loop and while loop?

let myNumber = 50;

while (myNumber < 50) {
    console.log(myNumber);
    myNumber += 2;
}


do {
    console.log(myNumber);
    myNumber += 2;
} while (myNumber < 50);

// do while loop atleast executes the condition once!
////////////////////////////////////////////////////////////////////
// for loops

for (let i = 0; i <=10; i++  ) {
    console.log(i);
}

////////////////////////////////////////////////////////
// for loops are handy they can be used for several things
// so let's use for loop to display the characters in the name

let name = "Dude";

for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}

////////////////////////////////////////////////////////
// using while loop

let name = "Dude";
let counter = 0;
let myLetter;
while (true) {
    myLetter = name[counter];
    console.log(myLetter);
    if (myLetter === "d") break;
    counter++;
}

///////////////////////////////////////////////////////////
// we've learnt break statement or keyword
// now let's learn ' continue ' statement

let name = "Dude";
let counter = 0;
let myLetter;
while (counter <=3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter +=2;
        continue; // it skips to the next iteration!!!****
    }
    if (myLetter === "d") break;
    counter++;
}
console.log(counter);

////////////////////////////////////////////////////////////////////////////
let name = "Xian";
let counter = 0;
let myCharacter;

while (counter <=3) {
    myCharacter = name[counter];
    console.log(myCharacter);
    if (counter === 1) {
        counter +=2;
        continue;
    }
    if (counter === 3) break;
    counter++;
}
console.log(counter);
/////////////////////////////////////////////////////////



















































