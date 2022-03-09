'use strict'
const Detallecargo = use('App/Models/Detalleencargo')

class CategoriaController {
  async store ({ request, response }) {
    let input = request.all();
    await Detallecargo.create(input);
    return response.status(200).send({
      res: true,
      message: "categoria creada correctamente"
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

module.exports = DetallecargoController
