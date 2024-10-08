const { Tenant } = require('../models');

class TenantController {
  static async getAll(req, res) {
    try {
      const tenants = await Tenant.findAll();
      res.status(200).json(tenants);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tenants" });
    }
  }
  


// Menambahkan Tenant
  static async create(req, res) {
    try {
      const { name, email, phone } = req.body;
      const tenant = await Tenant.create({ name, email, phone });
      res.status(201).json(tenant);
    } catch (error) {
      res.status(500).json({ message: "Error creating tenant" });
    }
  }

// Update tenant berdasarkan id
static async update(req, res) {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const tenant = await Tenant.findByPk(id);

    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }

    tenant.name = name || tenant.name;
    tenant.email = email || tenant.email;
    tenant.phone = phone || tenant.phone;

    await tenant.save();

    res.status(200).json(tenant);
  } catch (error) {
    res.status(500).json({ message: "Error updating tenant" });
  }
}

// Menghapus tenant berdasarkan id
static async delete(req, res) {
  try {
    const { id } = req.params;
    const tenant = await Tenant.findByPk(id);

    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }

    await tenant.destroy();
    res.status(200).json({ message: "Tenant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting tenant" });
  }
}
}

module.exports = TenantController;
