let bagItems = [];
onLoad();
function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
  diaplayItemsOnHomePage();
  displayBagIcon();
}

function addtobag(itemID){
bagItems.push(itemID);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElemet = document.querySelector('.bag-item-count');
  if(bagItems.length > 0){
    bagItemCountElemet.style.visibility='visible';
    bagItemCountElemet.innerText=bagItems.length;
  }
  else{
    bagItemCountElemet.style.visibility='hidden';
  }
}
function diaplayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector(".items-container");
  if(itemsContainerElement === undefined){
    return;
  }
  // let item = {
//  item_image:`assets/1.jpg`,
//  rating:{
//   stars:4.5,
//   noOfReviews:1400,
//  },
//  company_name:'Carlton London',
//  item_name:'Rhodium-Plated CZ Floral Studs',
//  current_price:606,
//  original_price:1045,
//  discount_percentage:42,
// }
let innerHTML='';
items.forEach(item =>{
 innerHTML += `
 <div class="item-container">
  <img src="${item.image}" alt="item image" class="item-image">
  <div class="rating">
  ${item.rating.stars} ⭐ | ${item.rating.count}
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
  <span class="current-price">Rs ${item.current_price}</span>
  <span class="original-Price">Rs ${item.original_price}</span>
  <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick="addtobag(${item.id})">Add to Bag</button>
  </div>`
})
  itemsContainerElement.innerHTML = innerHTML;
}

