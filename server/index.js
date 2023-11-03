const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const { connection } = require('./database');

const PORT = 8081;

// Art

app.get('/api/art', (req, res) => {

    if (req.query.id) {
        connection.query('SELECT * FROM `cs312-Art` WHERE ArtID = ? ORDER BY CompletionDate ASC', [req.query.id], (err, data) => {
            if (err) res.json({ error: err })
            else res.json({ data })
        });
    } else {
        connection.query('SELECT * FROM `cs312-Art` ORDER BY CompletionDate ASC', (err, data) => {
            if (err) res.json({ error: err })
            else res.json({ data })
        });
    }

});

// Root

app.get('/api', (req, res) => {
    res.redirect('/api/art');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});