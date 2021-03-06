const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

// app.use((req, res, next) => {
//   console.log(' In the middleware');
//   next();
// });
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// handling not found route
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
