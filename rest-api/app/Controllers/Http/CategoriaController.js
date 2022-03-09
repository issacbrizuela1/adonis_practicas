'use strict'
const Categoria = use('App/Models/Categoria')

class CategoriaController {
  async store ({ request, response }) {
    let input = request.all();
    await Categoria.create(input);
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

module.exports = CategoriaController
