//for loop
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//while loop

let d =1;
while(d<=10)
    {
    if(d%2==0)
    {
    console.log(d);
    }
    d++;
}

//do while loop

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

//switch statement

let a=10;
let b=5;
let operator ="div";
switch(operator)
{
    case "sum":
        console.log(a+b);
        break;
        
    case "sub":
        console.log(a-b);
        break;
        
    case "mul":
        console.log(a*b);
        break;
        
    case "div":
        console.log(a/b);
        break;

    default:
        console.log("Invalid condition");   
}
*/

let c=1;
while(c<=10)
    {
    if(c%2!=0)
    {
    console.log(c);
    }
    c++;
}

//function without parameter
function greet()
{
    console.log("Hello");
    console.log("Fsb course")
}
greet();

//function with parameter
function arthimetic(a,b)
{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
arthimetic(10,5)

console.log("Hello World");
let restaurantName = "BiteBox";
console.log("Welcome to" + restaurantName);
//let customerName = prompt("Welcome to" + restaurantName + "!\n\n what is your name?");


let age=25;
if(age>=18)
    {
      console.log("Eligible");
      
    }
    else
    {
        console.log( "Not Eligible");
    }

// if else statement
    let marks=75;
if(marks>=75)
    {
      console.log("Destintion");
      
    }
    else
    {
        console.log( "Fail");
    }
//switch statement
    let day = 2 ;

    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default:
            console.log("Invalid day")
    }


    // while loop
    let j =1;
    while(i<=5)
    {
        console.log(j);
        j++;
    }
// do while loop
    let i=1;
    do{
        console.log(i);
        i++;
    }while(i<=5);

// for loop
    for(let k =  1;k <= 5; k++ )
    {
        console.log(k);
        
    }
