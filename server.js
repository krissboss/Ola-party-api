const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
res.json({
message: "Ola Party AI Bot API is running!",
status: "success"
});
});

app.get("/api/chat", (req, res) => {
const message = req.query.message || "Hello";
res.json({
bot: "Ola Party AI Bot",
reply: "Namaste! Aapne kaha: " + message
});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log("API running on port " + PORT);
});
