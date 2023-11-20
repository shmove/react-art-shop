const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { connection } = require('./database');

const PASSWORD = "WeKnowTheGame23";
const PORT = 8081;

// Art

function timestamp() { return "[" + new Date().toLocaleTimeString() + "]"; }

app.get('/api/art/images', (req, res) => {
   console.log(timestamp() + " GET /api/art/images... " + (req.query.id ? `id=${req.query.id}` : "No id specified"));

   if (!req.query.id) {
       res.json({ error: "No id specified" });
       return;
   }

    connection.query("SELECT Image FROM `cs312-Art` WHERE ArtID = ?;", [req.query.id], (err, data) => {
         if (err) res.json({ error: err })
         else res.json({ data })
    });
});

app.get('/api/art', (req, res) => {
    console.log(timestamp() + " GET /api/art... " + ((req.query.id) ? `id=${req.query.id}` : (req.query.page) ? `page=${req.query.page}` : "No id or page specified"));

    let query = [
        "SELECT t1.ArtID, Name, CompletionDate, Width, Height, Price, Description, CASE WHEN t2.ArtID IS NOT NULL THEN TRUE ELSE FALSE END AS Purchased",
        "FROM `cs312-Art` t1",
        "LEFT JOIN `cs312-Order` t2 ON t2.ArtID = t1.ArtID",
        "ORDER BY t1.ArtID DESC",
        "LIMIT 12;"
    ]

    let page = 1;
    let params = [];

    if (req.query.id) {
        query.splice(3, 0, "WHERE t1.ArtID = ?"); // Insert WHERE clause
        params.push(req.query.id);
    } else if (req.query.page) {
        if (req.query.page > 0) page = req.query.page;
    }

    if (page > 1) query[4] = `LIMIT ${(page - 1) * 12}, 12;`; // Set offset

    connection.query(query.join(' '), params, (err, data) => {
        if (err) res.json({ error: err })
        else res.json({ data })
    });

});

// Orders

app.get('/api/orders', (req, res) => {

    // Require password
    // https://benborgers.com/posts/express-password-protect
    const reject = () => {
        console.log(timestamp() + " GET /api/orders... Failed authentication");
        res.set('WWW-Authenticate', 'Basic realm="401"');
        res.status(401).send('Authentication required.');
    };

    const authorization = req.headers.authorization;

    if (!authorization) return reject();

    const password = Buffer.from(authorization.replace("Basic ", ""),"base64").toString();

    if (password !== PASSWORD) return reject();

    console.log(timestamp() + " GET /api/orders... Success");
    connection.query("SELECT * FROM `cs312-Order`;", (err, data) => {
        if (err) res.json({ error: err })
        else res.json({ data })
    });

});

app.post('/api/orders', (req, res) => {
    console.log(timestamp() + " POST /api/orders...");
    console.log(JSON.stringify(req.body));
    connection.query("INSERT INTO `cs312-Order` (ArtID, CustomerName, CustomerNumber, CustomerEmail, CustomerAddress) VALUES (?, ?, ?, ?, ?);", [req.body.ArtID, req.body.CustomerName, req.body.CustomerNumber, req.body.CustomerEmail, req.body.CustomerAddress], (err, data) => {
        if (err) { console.log(err); res.json({ error: err }); }
        else res.json({ data })
    });
});

// Root

app.get('/api', (req, res) => {
    console.log(timestamp() + " GET /api...");
    connection.query("SELECT COUNT(*) AS NumberOfArtworks FROM `cs312-Art`;", (err, data) => {
        if (err) res.json({ error: err })
        else res.json({ data:data[0] })
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});