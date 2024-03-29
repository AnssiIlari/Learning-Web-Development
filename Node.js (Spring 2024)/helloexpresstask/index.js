const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Open exercises");
})

// Welcome web server
// app.get("/home/user/:name/:age", (req, res) => {
//     res.send(`Welcome ${req.params.name}, you're ${req.params.age} years old`);
//   })


// Conditional response
app.get("/home/user/:name/:age", (req, res) => {
    if (req.params.age < 18) {
      res.send(`Hello ${req.params.name}, you're too young`);
    } else {
      res.send(`Welcome ${req.params.name}, you're ${req.params.age} years old`);
    }
  })

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

