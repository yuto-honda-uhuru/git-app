const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'トップページ' });
});

app.listen(3000, () => {
    console.log("Listening on localhost port 3000");
});