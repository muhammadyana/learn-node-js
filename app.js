const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002

// app.use((req, res, next) => {
//   console.log(' In the middleware');
//   next();
// });
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  // console.log(' In the another middleware');
  res.send('<form action="/product" method="POST"> <input type="text" name="title"> <button type="submit" value="Submit"> Submit </button> </form> ');
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  // console.log(' In the another middleware');
  res.send('<h1> Hallo there </h1>');
});


app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
