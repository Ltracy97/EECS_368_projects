/*
Name: Louis Tracy
student id: 3007878
class: EECS 368

The program will run through three seperate task and will begin each task by printing the title of the task

the first taks will print a triangle consisting of the character "X" with the top triangle having a single "X" and increasing by
one for each row.

the second task will print out numbers from 1 - 100 with the exception of numbers that fall into one of three camps:
numbers divisible by 4 
numbers divisible by 7 and not 4 
numbers divisible by 7 and 4 
if they fall into one of the camps then the cooresponding statement will print instead of the value.

the last taks will print out a n by n chess board using empty characters of the charcter "*"
after the first chess board is printed it will print out another chess board of a different n size
*/



// stores a character "X"
var character = "X";

// stores a number eight
var size = 8;

//prints the title of the programming exercise 
console.log("looping a triangle");

/* this loop will print the character "X" go to the next line then it will add another "X" to the character variable 
then it will repeat*/
for(var i = 0 ;i<10;i++)
{
    // print the value in the charcter variable
    console.log(character);

    // the variable character will add another "X" to the variable
    character +="X";
}

// this will start a newline
console.log("\n");
// this will print "FizzBuzz"
console.log("FizzBuzz");
// this will start a newline
console.log("\n");

// this will create a new variable called nums that will store a string
var nums ="";

/* this for loop will go through each value of length and check with each if statement
it will then store either the value inside the variable j or a statement in the if statements
then print the entire string*/
for(var j = 1; j<=100;j++)
{
    /* the statement will check if the value in j is divisible by 4 and not divisible by 7
    after if the check is correct it will add the statement "Divisible by 4" and ", " to nums*/
    if(j%4==0 && j%7!=0)
{
    // the statement "Divisble by 4" and ",  will be summed to nums"
    nums+="Divisible by 4, ";

}

/* the else if statement will check if j is divisible by 7 and not divisible by 4
after if the check is successful it will add the statement "Divisible by 7,but not 4" and ", "
to nums
*/
else if(j%7==0 && j%4!=0)
{
    //the statement "Divisible by 7,but not 4" and ", " will be summed with nums
    nums+="Divisible by 7,but not 4, ";
}

/* the if statement will check if j is divisible by 7 and by 4
if the check succeeds the statement "Divisible by 7 and Divisible by 4" and ", " 
will be summed with nums
*/
else if(j%7==0 && j%4==0)
{
    // the statement "Divisible by 7 and Divisible by 4" and ", " will be summed with nums
    nums+="Divisible by 7 and Divisible by 4, ";
}

/* the if statement will check if j is not divisible by 7 and by 4
if the check is sucessful will add j to the nums and ", "
*/
else
{
    // will print the value inside the variable j
    nums = nums+j+", ";
}

}
//this will print everything in the variable nums
console.log(nums);

// this will a newline
console.log("\n");
//this will print "Chess Board"
console.log("Chess Board");
// this will make a newline
console.log("\n");

/* 
the do-while loop will first create a variable called string that will be empty
next it will print "size = " then the value inside the variable size

the inner for loop will check the sum of varables a and b the do modulo division using 2 and see if the value equals zero
if it does then a empty space will be added into the string variable, else it will add the * character to string
the process will be done till b is equal to the variable size

the outer for loop will add a newline to the variable string and then return to the inner loop
the outer loop will continue the process till a is equal to size

once the two loops are complete the variable string will be printed
and the value inside the variable size will be changed to fourteen where the do-while loop wil perform a check
the loop will run again until a is equal to 14
*/
 
do{
// stores an empty string
var string = "";

//print out the statement "size  = " then the value inside the variable size
console.log("size = " +size);
 
// will add a newline
console.log("\n");

/*
the inner for loop will take the empty variable string and depending on the sum of a+b the character " " or "*" will be added
the outer for loop will the take the variable and add a newline to the value */

// the outer loop will cycle through the inner loop and add a newline to the variable string
for(var a=0;a<size;a++)
    {
        // the inner loop that will add a charcter to the string variable
        for(var b=0;b<size;b++)
        {
            // will check if the sum of variables a and b divided by a modulo 2 equals zero 
            if((b+a)%2==0)
            {
                //an empty character will be added to the variable string
                string +=" ";
            }
            
            // if the previous if statement wasn't successful this else statement will run
            else
            {
                // the character "*" will be added to the string
                string+="*";
            }

    
        }

        // the variable string will have a newline added
        string+="\n";
    }
    
    // the value inside the variable string will be printed
    console.log(string);

    //the variable size will take a new value of fourteen
    size = 14;

} 
while(a<14);
//the code will check if the variable a is less than 14 and will stop if it isn't