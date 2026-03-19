const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
    res.render('templates/index')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});