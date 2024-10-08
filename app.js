const express = require('express');
const app = express();
const tenantRoutes = require('./Routers/tenantRoutes'); // Pastikan path ini benar

app.use(express.json()); // Untuk parsing application/json
app.use('/api', tenantRoutes); // Mengarahkan semua request ke /api ke tenantRoutes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
