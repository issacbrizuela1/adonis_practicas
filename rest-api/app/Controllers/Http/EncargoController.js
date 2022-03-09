'use strict'
const Encargo = use('App/Models/Encargo')

class EncargoController {
  async store ({ request, response }) {
    let input = request.all();
    await Encargo.create(input);
    return response.status(200).send({
      res: true,
      message: "detalles creados correctamente"
    });
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = EncargoController
