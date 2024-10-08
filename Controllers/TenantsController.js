const { Tenant } = require("../models");

class TenantsController {
  static async addTenant(req, res) {
    try {
      const { name, age, gender, roomId } = req.body;
      const newTenant = await Tenant.create({ name, age, gender, roomId });
      res.status(201).json(newTenant);
    } catch (error) {
      res.status(500).json({ message: "Failed to add tenant", error });
    }
  }

  static async getAllTenants(req, res) {
    try {
      const tenants = await Tenant.findAll();
      res.status(200).json(tenants);
    } catch (error) {
      res.status(500).json({ message: "Failed to get tenants", error });
    }
  }

  static async getTenantById(req, res) {
    try {
      const tenant = await Tenant.findByPk(req.params.id);
      if (tenant) {
        res.status(200).json(tenant);
      } else {
        res.status(404).json({ message: "Tenant not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to get tenant", error });
    }
  }
}

module.exports = TenantsController;
