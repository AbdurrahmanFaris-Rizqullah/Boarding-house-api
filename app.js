const express = require('express');
const app = express();
const tenantRoutes = require('./Routers/TenantRoutes'); // Pastikan path ini benar
const roomRoutes = require('./Routers/roomRoutes');

app.use(express.json()); // Untuk parsing application/json
app.use('/api', tenantRoutes); // Mengarahkan semua request ke /api ke tenantRoutes
app.use('/api', roomRoutes);  // Mengarahkan semua request ke /api ke roomRoutes


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
