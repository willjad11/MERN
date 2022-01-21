const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8000;

let users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

app.post("/api/users", (req, res) => {

  console.log(req.body);

  users.push(req.body);

  res.json({ status: "ok" });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {

  console.log(req.params.id);

  res.json(users[req.params.id]);
});

app.put("/api/users/:id", (req, res) => {

  const id = req.params.id;

  users[id] = req.body;

  res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {

  const id = req.params.id;

  users.splice(id, 1);

  res.json({ status: "ok" });
});



app.listen(port, () => console.log(`Listening on port: ${port}`));
