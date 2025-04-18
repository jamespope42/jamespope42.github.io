const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');

// PostgreSQL connection
const connectionString = `postgres://postgres:CTI_110_WakeTech@localhost/Gradebook`;
const pool = new Pool({ connectionString });

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'gradebook.html'));
});

// Route to get detailed grade data (per student per assignment)
app.get('/grades', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        s.first_name, 
        s.last_name, 
        a.title AS assignment_title, 
        a.grade
      FROM Students s
      JOIN Assignments a ON s.student_id = a.student_id
      ORDER BY s.last_name, s.first_name, a.title
    `);

    // Combine names for easier rendering
    const rows = result.rows.map(row => ({
      student_name: `${row.first_name} ${row.last_name}`,
      assignment_title: row.assignment_title,
      grade: row.grade
    }));

    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching grades:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("App Server via Express is listening on port 3000");
  console.log("Visit: http://localhost:3000");
});
