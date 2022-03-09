'use strict'
const Proveedor = use('App/Models/Proveedor')

class ProveedorController {
  async store ({ request, response }) {
    let input = request.all();
    await Proveedor.create(input);
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

module.exports = ProveedorController
