const path = require('path');
const express = require('express');

var app = express();
const address = path.join(__dirname, '../public');
const port = proccess.env.PORT || 3000;
app.use(express.static(address));


app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
