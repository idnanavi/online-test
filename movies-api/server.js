const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const HomeRoutes = require('./routes/home.routes')
const SearchRoutes = require('./routes/search.routes')
const DetailRoutes = require('./routes/detail.routes')
const db = require("./config/sequelize.config");
db.sequelize.sync();

app.use(HomeRoutes);
app.use(SearchRoutes);
app.use(DetailRoutes);

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`)
})