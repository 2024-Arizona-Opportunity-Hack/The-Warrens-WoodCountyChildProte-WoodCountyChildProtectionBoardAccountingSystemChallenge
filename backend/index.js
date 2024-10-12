const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/grants', (req, res) => {
  const grants = [
    { id: 1, name: 'Grant A', amount: 1000 },
    { id: 2, name: 'Grant B', amount: 5000 }
  ];
  res.json(grants);
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
