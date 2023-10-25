const express = require("express");
const db = require("../../API-cardapio-virtual/src/firebase/firebaseConnect");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("<h3>Rotas no Express</h3><p>Rota '/'"));

app.post("/salvarPizza", (req, res) => {
  const pizzaData = {
    nome: "Pizza",
    ingredientes: [
      { name: "Calabresa", quantidade: 2 },
      { name: "Molho de tomate ", quantidade: 2 },
    ],
    preco: 40.0,
  };

  const pizzasCollection = db.collection("PRODUCTS");

  pizzasCollection
    .add(pizzaData)
    .then((docRef) => {
      console.log("Pizza salva com sucesso, ID do documento:", docRef.id);
      res
        .status(201)
        .json({ message: "Pizza salva com sucesso", docId: docRef.id });
    })
    .catch((error) => {
      console.error("Erro ao salvar a pizza:", error);
      res.status(500).json({ error: "Erro ao salvar a pizza" });
    });
});

app.listen(port, () => {
  console.log(` 🚀 Servidor rodando na porta ${port} 🔥`);
});
