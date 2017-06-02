const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const vendors = [{
  name: 'Farmers Unlimited',
  items: [{item:'Tomatoe cherry on vine', price:'$4.35 each', organic:true}, item:'Yuca', price:'$0.67 per pound', organic:false}, item:'Sweet potato-jewel', price:'$1.56 per pound', organic:true}],
  origin: ''

}];

app.get('/vendors', (request,response)=>{
  response.json(vendors);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port 3000');
});
