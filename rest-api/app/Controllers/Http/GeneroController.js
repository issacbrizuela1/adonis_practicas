'use strict'

const Genero = use('App/Models/Genero')

class CategoriaController {
  async store ({ request, response }) {
    let input = request.all();
    await Genero.create(input);
    return response.status(200).send({
      res: true,
      message: "genero creado correctamente"
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

module.exports = GeneroController
