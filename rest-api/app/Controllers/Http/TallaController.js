'use strict'
const Talla = use('App/Models/Talla')

class TallaController {
  async store ({ request, response }) {
    let input = request.all();
    await Talla.create(input);
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

module.exports = TallaController
