const express = require("express");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;
const appPost = [
  {
    title: "Torta al cioccolato rustica fatta in casa",
    content:
      "Una torta dal sapore intenso e dalla consistenza morbida, perfetta per la colazione o per una pausa dolce. L’aggiunta di agrumi dona un tocco fresco che bilancia il cioccolato.",
    image: "/images/torta_paesana.jpeg",
    tags: ["dolci", "cioccolato", "ricette", "homemade", "dessert"],
  },
  {
    title: "Ciambellone soffice classico",
    content:
      "Il classico dei classici: soffice, semplice e perfetto per ogni momento della giornata. Ottimo da inzuppare nel latte o accompagnare con un caffè.",
    image: "/images/ciambellone.jpeg",
    tags: ["colazione", "dolci", "ciambellone", "ricette", "soffice"],
  },
  {
    title: "Crackers alla barbabietola",
    content:
      "Uno snack originale e colorato, croccante e leggero. Perfetto da servire con salse o formaggi, ideale per un aperitivo diverso dal solito.",
    image: "/images/cracker_barbabietola.jpeg",
    tags: ["snack", "healthy", "aperitivo", "barbabietola", "ricette"],
  },
  {
    title: "Pane fritto dolce",
    content:
      "Un dolce semplice e veloce, croccante fuori e morbido dentro. Perfetto per recuperare il pane avanzato e trasformarlo in qualcosa di goloso.",
    image: "/images/pane_fritto_dolce.jpeg",
    tags: ["dolci", "tradizione", "ricette", "pane", "veloce"],
  },
  {
    title: "Pasta alla barbabietola",
    content:
      "Un primo piatto dal colore intenso e dal sapore delicato. La barbabietola rende la pasta cremosa e visivamente originale, perfetta per stupire.",
    image: "/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "primi", "ricette", "barbabietola", "cucina"],
  },
];

//* Middlewave Assets
app.use(express.static("public"));

//* Routes
app.get("/", (req, res) => {
  res.json("Server del mio blog");
});
app.get("/bacheca", (req, res) => {
  const responseData = {
    result: appPost,
  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server listenting on ${appURL}`);
});
