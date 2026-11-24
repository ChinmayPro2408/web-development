document.getElementById("heading").textContent= "Hello to my Website "
let heading =document.getElementById("title");
console.log(heading);

let result = document.querySelector(".message");
console.log(result);


let result1 = document.querySelectorAll(".message");
console.log(result1);

document.getElementById("box").innerHTML="<b> Welcome Students </b>";

let name=document.getElementById("username").value;
console.log(name);
document.getElementById("username").value="Chinmay";

function showMessage()
{
    alert("Welcome to html");
}

document.getElementById("mybutton").addEventListener("click",function()
{
    alert("button clicked")
})

let name1=["Rahul","Priya","Amit"];
name1.forEach(function(i)
{
    console.log(i);
});

let str="Welcome to JS";
console.log(str.length);
console.log(str.replace("JS","CSS"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(6));


let fooditem=["Pizza","Burger","Pasta"];
fooditem.push("Fries")
fooditem.splice(2,0,); //spice add -->(index,0,item_name)  //spice remove -->(index,1)
console.log(fooditem[2]);

let cart=
[
    {
        name:"Pizza",
        Price:249,
        Quantity:1
    },
    {
        name:"Burger",
        Price:150,
        Quantity:1
    }
];
let r=cart.find(function(item)
{
    return item.name==="Burger"
})
console.log(r);

let cart1 =["Pizza","Burger","Pasta"];
let cartlist=document.getElementById("cart-list");
cart1.forEach(function(item)
{
    let li=document.createElement("li");
    li.textContent=item;
    cartlist.appendChild(li);
})

let food="";
function addFood()
{
    food="Pizza";
    document.getEl
}

function changeMode()
{
    document.body.classList.toggle("dark");
}


let students=["Chinmay","Parth","Yuvraj","Tushar","Saniya"];
console.log(students);


//Create an array of food items and add one new item using push().
let fooditems=["sandwich","Noodles","Pasta"];
fooditems.push("Fries")
fooditems.splice(2,1);
console.log(fooditems);



let student = {
    name: "Chinmay",
    age: 20,
    course: "FSB"
};
console.log(" Name: " + student.name);
console.log(" Age: " + student.age);
console.log(" Course: " + student.course);


let product = {
   productName:"Mobile",
    price:45000,
    quantity:1
};
console.log(" productName: " + product.productName);
console.log(" price: " + product.price);
console.log(" quantity: " + product.quantity);



 function changeText()
        {
            document.getElementById("heading").innerHTML = "Hello, Welcome FSB Course!";
        }

 function changeColor()
 {
    document.getElementById("paragraph").style.color = "blue";
 }       

  function showAlert1()
        {
            alert("Registered Successfully!");
        }

  function showWelcome()
        {
            document.getElementById("message").innerHTML = "Welcome Student to FSB Course!";
        }      

   function addFood()
        {
            let foodName = document.getElementById("food").value;

            document.getElementById("result").innerHTML = foodName;
        }