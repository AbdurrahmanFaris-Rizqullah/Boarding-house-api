const { verifyToken } = require("../helper/jwt");
const { Tenant } = require("../models");

const authentication = async (req, res, next) => {
  try {
    let access_token = req.headers.authorization;
    if (!access_token) {
      throw { name: "Invalid Token" };
    }
    let [bearer, token] = access_token.split(" ");
    if (bearer !== "Bearer") {
      throw { name: "Invalid Token" };
    }

    let payload = verifyToken(token);
    let tenant = await Tenant.findByPk(payload.id);

    if (!tenant) {
      throw { name: "Invalid Token" };
    }

    req.tenant = {
      id: tenant.id,
      role: tenant.role, // Assuming tenant might have a 'role' field
    };
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = authentication;
