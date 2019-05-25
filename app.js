const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
    response.send(`Welcome to our very boring site.`);
});

app.get(`/about`, (req, res) => {
    res.send(`It was a rainy day in pizzaville.`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));