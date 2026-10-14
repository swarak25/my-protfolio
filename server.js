const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Contact Message:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.send(`
        <h2>Thank you, ${name}!</h2>
        <p>Your message has been received.</p>
        <a href="/">Back to Portfolio</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});