
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Ola Party AI Bot API",
    status: "success",
    message: "Server is running!"
  });
});

app.get("/api/chat", (req, res) => {
  const message = req.query.message;

  if (!message || !message.trim()) {
    return res.status(400).json({
      status: "error",
      reply: "Kripya apna message likhein."
    });
  }

  res.json({
    bot: "Ola Party AI Bot",
    status: "success",
    reply: "Namaste! Aapne kaha: " + message
  });
});

app.post("/api/chat", (req, res) => {
  const message = req.body.message;

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      status: "error",
      reply: "Message bhejna zaroori hai."
    });
  }

  res.json({
    bot: "Ola Party AI Bot",
    status: "success",
    reply: "Namaste! Aapne kaha: " + message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Ola Party AI Bot API running on port " + PORT);
});
