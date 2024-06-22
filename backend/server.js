const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001; // Port untuk backend

app.use(cors());
app.use(express.json());

// Konfigurasi koneksi MariaDB
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'samuel123',
  database: 'massive'
});

db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MariaDB database.');
  });
  
  // API endpoint untuk pencarian rute
  app.get('/api/search', (req, res) => {
    const { halte, tujuan } = req.query;
    const query = 'SELECT * FROM routes WHERE halte = ? AND tujuan = ?';
    db.query(query, [halte, tujuan], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  
  // Jalankan server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      throw err; // Melemparkan kesalahan agar aplikasi berhenti jika koneksi gagal
    }
    console.log('Connected to the MariaDB database.');
  });
  
  // Penanganan kesalahan pada query database
  app.get('/api/search', (req, res) => {
    const { halte, tujuan } = req.query;
    const query = 'SELECT * FROM routes WHERE halte = ? AND tujuan = ?';
    db.query(query, [halte, tujuan], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json(results);
    });
  });
  