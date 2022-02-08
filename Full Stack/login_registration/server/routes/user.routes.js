const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function (app) {
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users/:id", authenticate, UserController.getOne);
    app.get("/api/logout", authenticate, UserController.logout);
}