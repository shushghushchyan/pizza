
let menu = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"]

let divMenu = document.getElementById("typs")

menu.forEach((element,) => {
    const li = document.createElement('li')
    li.innerHTML = element
    divMenu.appendChild(li);
});

let pizza = [];

async function fetchData() {
  try {
    const response = await fetch("https://657d48c2853beeefdb9a7dfd.mockapi.io/datatest");
    const data = await response.json();
    const newData = data.map((element) =>{
      let newObj = {
        ...element,
        count: 0
      }
      return newObj
    })
   
    pizza = newData;
    tpel(pizza);
    savePizzaDataToLocalStorage();

  } catch (error) {
    console.log(error);
  }
}

let localData = JSON.parse(localStorage.getItem("pizzaStorage"))

if(localData){
  pizza = localData
  // lll(pizza)()
   tpel(localData)
 

}
else{
  fetchData();
}

function savePizzaDataToLocalStorage() {
  console.log('ok');
  localStorage.setItem("pizzaStorage", JSON.stringify(pizza));
}


const parentPizzas = document.getElementById('containerForAllPizza')

let typesArray = ["тонкое","традиционное"]

let size = ["26","30","40"]




function lll(ppp){
  ppp.map((el) => {
    console.log("ellllllllll",el);
  })
  }







function tpel(x) {
  console.log("jkhjhjhjhj",x);
  x.map((item,index) => {
// console.log("item",item.id);
    const inerTxt = `
     <div class="pizaBlock">
         <img class="pizaImg" src=${item.imageUrl} alt="">
         <h2 class="minBlTitle">${item.title}</h2>
         <div class="blockConfigPizza">
             <ul class="confTyps" id='${item.id}s'>
             </ul>
             <ul class="confSize" id='${item.id}k'>
             
             </ul>
         </div>
         <div class="footerPizaBlock">
             <p class="price"> от ${item.price} ₽</p>
             <button class="addpizza" id='btn${index}'>
              + Добавить 
              ${item.count > 0 ? `<span>${item.count}</span>` : ''}
             </button>
         </div>
       </div>
    `
  

  
  

    // parentPizzas.insertAdjacentHTML('beforebegin', inerTxt)

    parentPizzas.innerHTML += inerTxt
    const ul = document.getElementById(`${item.id}s`)

    typesArray.forEach((el, idx)=> {
      const li = document.createElement('li')
      li.innerHTML = el
      li.setAttribute('class', item.types.includes(idx) ? '' : 'disabled')
      ul.appendChild(li)
    })

    const ulSize = document.getElementById(`${item.id}k`)

    size.forEach((l, idx)=> {
      const li = document.createElement('li');
      li.innerHTML = l
      li.setAttribute("class", item.types.includes(idx) ? "" : "disabled")
      ulSize.appendChild(li)
    })

    const btnAddPizza = document.getElementById(`btn${index}`);

    btnAddPizza.addEventListener("click", (event) => {
      item.count += 1;
      console.log("yfgjfjfjfjfj",...pizza);
      

      const spanElement = btnAddPizza.querySelector("span");
      if (spanElement) {
        spanElement.textContent = item.count;
      } else {
        btnAddPizza.innerHTML += `<span>${item.count}</span>`;
      }
    });
  });
  
}

function lll(ppp){
  ppp.map((el) => {
    console.log("ellllllllll",el);
  })
  }




let popular = document.getElementById("popular")
let ulHide = document.getElementById("ulHide");

popular.addEventListener("click", () => {

  
  if (ulHide.style.display === "none" || ulHide.style.display === "") {
    ulHide.style.display = "block";
  } else if (ulHide.style.display === "block") {
    ulHide.style.display = "none";
  }
});


console.log(ulHide.style.display );