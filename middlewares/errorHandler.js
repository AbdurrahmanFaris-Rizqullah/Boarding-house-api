function errorHandler(err, req, res, next) {
    let status = err.status;
    let message = err.message;
    switch (err.name) {
      case "invalid input":
        status = 400;
        message = "Username/ email/ phone number cannot be empty";
        break;
      case "invalid email":
        status = 400;
        message = "Invalid format email";
        break;
      case "email exists":
        status = 400;
        message = "Email address already in use!";
        break;
      case "phone exists":
        status = 400;
        message = "phone number already in use!";
        break;
      case "invalid format number":
        status = 400;
        message = "Invalid phone format number or number is too long";
      case "invalid user":
        status = 401;
        message = "Error login user not found / password not matched";
        break;
      case "NotFoundTenant":
        status = 404;
        message = "Error not found";
        break;
      case "NotFound":
        status = 404;
        message = "Error not found";
        break;
      case "Invalid Token":
        status = 401;
        message = "Error Authentication";
        break;
      case "JsonWebTokenError":
        status = 401;
        message = "Error Authentication";
        break;
      case "Forbidden":
        status = 403;
        message = "Forbidden error authorization";
        break;
      case "SequelizeValidationError":
        status = 400;
        message = err.errors.map((err) => err.message);
        break;
      case "ValidationErrorItem":
        status = 400;
        message = err.errors.map((err) => err.message);
        break;
      case "SequelizeUniqueConstraintError":
        status = 400;
        message = err.errors.map((err) => err.message);
        break;
      case "FileRequired":
        status = 400;
        message = "File is required";
        break;
      default:
        status = 500;
        message = "Internal Server Error";
        break;
    }
    console.log(err.name);
    res.status(status).json({ message });
  }
  
  module.exports = errorHandler;
  