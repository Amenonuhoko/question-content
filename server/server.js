// server.js
const express = require('express');
const connection = require('./db_connect'); // Import your database connection
const cors = require('cors');
const app = express();
const port = 3000; // HTTP server port, different from MySQL port

// Endpoint to get data from the database
app.use(cors());
app.get('/api/data/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM content WHERE content_id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    // If results array is empty, no entry was found
    if (results.length === 0) {
      res.status(404).send('Entry not found');
      return;
    }
    res.json(results[0]); // Send back the first (and should be only) entry
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
