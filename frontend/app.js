$(document).ready(function(){
  callAPI().then(appendResults);

function callAPI(){
  const query = 'http://localhost:3000/vendors';
  return $.get(query);
}

function appendResults(response) {
  let farms = response;
  for (var i = 0; i < farms.length; i++) {
    let farmURL = farms[i].farm_img;
    let farmTitle = farms[i].name;
    let origin = farms[i].origin;
    let items = farms[i].items;
    generateCard(farmURL, farmTitle,items, origin);
  }
}

function generateCard(farmURL, farmTitle, items, farmOrigin) {
  let produce = generateItems(items);
  console.log(produce[0]);
  let cardTemplate = `
    <div class="card col s6 offset-s3">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${farmURL}">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${farmTitle} - ${farmOrigin}<i class="material-icons right">Items for Sale</i></span>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">This week's fresh produce:<i class="material-icons right">X</i></span>
        ${produce[0]}
        ${produce[1]}
        ${produce[2]}
      </div>
    </div>
    `;
    //end on card click
    $('.vendors').append(cardTemplate);
}

function generateItems(items){
  let item_info = [];
  for (var i = 0; i < items.length; i++) {
    let img = items[i].img;
    let item = items[i].item;
    let organic = items[i].organic;
    let price = items[i].price;
    let itemTemplate = `
    <div class="row">
      <div class="col s12">
        <h4>${item}</h4>
      </div>
      <div class="col s12">
        <span><img src="${img}" height=80px width=80px></span>
        <p>Organic: ${organic}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
    `;
    item_info.push(itemTemplate);
  }
  return item_info;
}


});
