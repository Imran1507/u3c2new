// On clicking remove button the item should be removed from DOM as well as localstorage.


var getcart= JSON.parse(localStorage.getItem("coffee"));

// console.log(getcart)
display(getcart)

function display(getcart,total){


  document.querySelector("#bucket").innerHTML=null;

  getcart.map(function(elem,index){

    let div = document.createElement("div")


  let image = document.createElement("img");
  image.src=elem.image;

  let title =document.createElement("p");
  title.innerText=elem.title;

  let price =document.createElement("p");
  price.innerText=elem.price;


  let remove =document.createElement("button");
  remove.setAttribute("id","remove_coffee");
  remove.innerText ="remove";

  remove.addEventListener("click",function(){
    removeItem(elem,index);
  })

  div.append(image,title,price,remove);

  document.querySelector("#bucket").append(div);

  })


}

function removeItem(elem,index){

  
    getcart.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(getcart))
    display(getcart)
  }


