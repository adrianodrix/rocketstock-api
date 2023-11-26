const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersValidatedController {
  async index(request, response) {
    const { id } = request.user;

    const checkUserExists = await knex("users").where({ id });

    if (checkUserExists.length == 0) {
      throw new AppError("Não está autorizado", 401);
    }

    return response.json();
  }
}

module.exports = UsersValidatedController;