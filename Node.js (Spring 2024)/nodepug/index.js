const express = require('express');
const helmet = require('helmet');

app.use(helmet());

const app = express();

const port = 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

let movies = [
    { id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams' },
    { id: '1588323390624', title: 'The Irishman', year: 2019, director: 'Martin Scorsese' },
    { id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', year: 2001, director: 'Chris Columbus' }
];

app.set('view engine', 'pug');

app.get("/hello", (req, res) => {
    res.render("hello", { firstname: 'John', lastname: 'Johnson' });
})

app.get("/", (req, res) => {
    res.render("movielist", { movies: movies });
})

app.get("/addmovie", (req, res) => {
    res.render("addmovie");
  })

  app.post("/addmovie", (req, res) => {
    const newMovie = {id: new Date().now, title: req.body.title, director: req.body.director, year: req.body.year};
    movies = [...movies, newMovie];
    res.redirect("/");
  })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}.`);
// });

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}.`);
  });

