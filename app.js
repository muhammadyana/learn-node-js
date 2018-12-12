const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use((req, res, next) => {
//   console.log(' In the middleware');
//   next();
// });
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

// handling not found route
app.use((req, res, next) => {
  res.status(404).send('<h1> Oppsss... page not found </h1>');
});

app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
