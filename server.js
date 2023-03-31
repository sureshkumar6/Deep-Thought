// server.js

import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const port = 6060;

// Endpoint to fetch data from API
app.get('/api/data', async (req, res) => {
  try {
    // Make API request to retrieve data
    const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
    const data = await response.json();
    // Return data as JSON response
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
