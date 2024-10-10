const { Tenant } = require("../models");

class TenantController {
  // Menampilkan semua tenants
  static async getAll(req, res, next) {
    try {
      const tenants = await Tenant.findAll();
      res.status(200).json(tenants);
    } catch (err) {
      next(err); // Kirim error ke middleware
    }
  }

  // Menambahkan Tenant
  static async create(req, res, next) {
    try {
      const { name, email, phone } = req.body;

      // Validasi input
      if (!name || !email || !phone) {
        throw { name: "invalid input" };
      }

      // Validasi format email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw { name: "invalid email" };
      }

      // Cek apakah email sudah ada
      const existingEmail = await Tenant.findOne({ where: { email } });
      if (existingEmail) {
        throw { name: "email exists"};
      }

      // Validasi nomor telepon (harus angka dan 14 digit)
      if (!/^\d+$/.test(phone) || phone.length > 14) {
        throw { name: "invalid format number" };
      }

      // Cek apakah nomor telepon sudah ada
      const existingPhone = await Tenant.findOne({ where: { phone } });
      if (existingPhone) {
        throw { name: "phone exists", message: "Phone number already in use!" };
      }

      const tenant = await Tenant.create({ name, email, phone });
      res.status(201).json(tenant);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  // Update tenant berdasarkan id
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, email, phone } = req.body;

      const tenant = await Tenant.findByPk(id);
      if (!tenant) {
        throw { name: "NotFoundTenant"};
      }

      // Validasi format email jika ada perubahan
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw { name: "invalid email" };
        }
      }

       // Cek apakah email sudah ada
       const existingEmail = await Tenant.findOne({ where: { email } });
       if (existingEmail) {
         throw { name: "email exists"};
       }
 

      // Validasi nomor telepon jika ada perubahan
      if (phone) {
        if (!/^\d+$/.test(phone) || phone.length > 14) {
          throw { name: "invalid format number" };
        }
      }

      // Cek apakah nomor telepon sudah ada
      const existingPhone = await Tenant.findOne({ where: { phone } });
      if (existingPhone) {
        throw { name: "phone exists", message: "Phone number already in use!" };
      }


      tenant.name = name || tenant.name;
      tenant.email = email || tenant.email;
      tenant.phone = phone || tenant.phone;

      await tenant.save();
      res.status(200).json(tenant);
    } catch (err) {
      next(err);
    }
  }

  // Menghapus tenant berdasarkan id
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const tenant = await Tenant.findByPk(id);

      if (!tenant) {
        throw { name: "NotFoundTenant"}; // Custom error jika tenant tidak ditemukan
      }

      await tenant.destroy();
      res.status(200).json({ message: "Tenant deleted successfully" });
    } catch (err) {
      next(err); // Kirim error ke middleware
    }
  }
}

module.exports = TenantController;
