// Add the coffee to local storage with key "coffee"

// const { json } = require("express/lib/response");




async function fetchdata(){

  let url = ` https://masai-mock-api.herokuapp.com/coffee/menu`
  try{

    let res = await fetch (url);
    let data =await res.json();
    // console.log(data.menu.data[0]);

    append(data.menu.data)
  }
  catch(err){
    console.log(err)
  }

}

fetchdata ();




function append (data){

console.log(data)

data.map (function(elem){


  let div = document.createElement("div");

  let image = document.createElement("img");
  image.src=elem.image;

  let title =document.createElement("p");
  title.innerText=elem.title;

  let price =document.createElement("p");
  price.innerText=elem.price;


  let add =document.createElement("button");
  add.setAttribute("id","add_to_bucket");
  add.innerText ="add to bucket";

  add.addEventListener("click",function(){
    cart(elem);
  })

  div.append(image,title,price,add);

  document.querySelector("#menu").append(div);
})

}

let countvalue = 0;
var setcart = JSON.parse(localStorage.getItem("coffee"))||[];


function cart(elem){

  countvalue++;

  document.querySelector("#coffee_count").innerHTML=null;

  var obj ={

    image :elem.image,
    title :elem.title,
    price:elem.price,
  }

  let count =document.createElement("p");
  count.innerText =countvalue;
  document.querySelector("#coffee_count").append(count);
  setcart.push(obj)
 console.log(setcart);

 localStorage.setItem("coffee",JSON.stringify(setcart));
}

