const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { connection } = require('./database');

const PORT = 8081;

// Art

app.get('/api/art', (req, res) => {

    let query = [
        "SELECT t1.ArtID, Name, CompletionDate, Width, Height, Price, Description, CASE WHEN t2.ArtID IS NOT NULL THEN TRUE ELSE FALSE END AS Purchased",
        "FROM `cs312-Art` t1",
        "LEFT JOIN `cs312-Order` t2 ON t2.ArtID = t1.ArtID",
        "ORDER BY CompletionDate ASC;"
    ]

    let params = [];

    if (req.query.id) {
        query.splice(3, 0, "WHERE t1.ArtID = ?"); // Insert WHERE clause
        params.push(req.query.id);
    }

    connection.query(query.join(' '), params, (err, data) => {
        if (err) res.json({ error: err })
        else res.json({ data })
    });

});

// Orders

app.post('/api/order', (req, res) => {
    connection.query("INSERT INTO `cs312-Order` (ArtID, CustomerName, CustomerNumber, CustomerEmail, CustomerAddress) VALUES (?, ?, ?, ?, ?);", [req.body.ArtID, req.body.CustomerName, req.body.CustomerNumber, req.body.CustomerEmail, req.body.CustomerAddress], (err, data) => {
        if (err) res.json({ error: err })
        else res.json({ data })
    });
});

// Root

app.get('/api', (req, res) => {
    res.redirect('/api/art');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});