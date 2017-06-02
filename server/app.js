const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const vendors = [{
  name: 'Farmers Unlimited',
  items: [{item:'Tomatoe cherry on vine', price:'$4.35 each', organic:true, img:'http://www.specialtyproduce.com/produce/sppics/1421.png'},
  {item:'Yuca', price:'$0.67 per pound', organic:false, img:'https://pioneerwoman.files.wordpress.com/2016/06/cassava-yuca-101-03.jpg'},
  {item:'Sweet potato-jewel', price:'$1.56 per pound', organic:true, img:'https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/227-2T.jpg?1395758880'}],
  origin: 'Idaho Springs, CO',
  farm_img: 'https://cdn-co.milespartnership.com/sites/default/master/files/Zapata-Stephen-weaver.jpg'
}, {
  name: 'Farm, Farm, Farm',
  items: [{item:'Spinach-bunch', price:'$2.63 each', organic:true, img:'http://eliasmarket.com/wp-content/uploads/2016/06/SpinachBunch.jpg'},
  {item:'Shallots', price:'$1.26 per pound', organic:false, img:'https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/360-2.jpg?1395758880'},
  {item:'Pesto', price:'$4.24 each', organic:false, img:'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/27/1/BW2C06_Basil-Pesto_s4x3.jpg.rend.hgtvcom.616.462.jpeg'}],
  origin: 'Evergreen, CO',
  farm_img:'http://www.coloradofarmfood.org/wp-content/uploads/2014/05/barn-400x362.jpg'
}, {
  name: 'I Farm U Eat',
  items: [{item:'Peppers-red', price:'$4.33 per pound', organic:true, img:'https://img.tesco.com/Groceries/pi/000/0200360000000/IDShot_540x540.jpg'},
  {item:'Spinach-bunch', price:'$1.26 each', organic:false, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1OZm8xwcRyZ5cflohj-bdH7P3bsB5YGFpflymLSI1edtbl5Hlk1SfQA'},
  {item:'Mushrooms-white 8oz cup', price:'$1.76 each', organic:true, img:'http://9197o87sqvuzd7a5jzujo9i.wpengine.netdna-cdn.com/wp-content/uploads/7711.jpg'}],
  origin: 'Nedarland, CO',
  farm_img: 'http://www.ranchland.com/files/pluginfiles/item_2937/field_104/SkyeFarm_field.jpg'
}];

app.get('/vendors', (request,response)=>{
  response.json(vendors);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port 3000');
});
