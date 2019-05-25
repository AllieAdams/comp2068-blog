const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
    response.send(`Welcome to our very boring site.`);
});

app.get(`/about`, (req, res) => {
    res.send(`It was a rainy day in pizzaville.`);
});


app.listen(4000, () => console.log(`Listening on port 4000`));