const express = require("express");
const router = express.Router();
const cors = require("cors");


const database = [];

const app = express();

app.use(express.json());
app.use(cors())


// CREATE
app.post("/", async (req, res) => {
    database.push(req.body)
    return res.status(201).json(req.body);
});

// READ ALL
app.get("/", async (req, res) => {
    return res.json(database);
});

// READ ONE
app.get("/:id", async (req, res) => { });

// UPDATE
router.patch("/:id", async (req, res) => { });

// DELETE
router.delete("/:id", async (req, res) => { });

app.listen(3000, () => {
    console.log("Server running on port:3000")
});