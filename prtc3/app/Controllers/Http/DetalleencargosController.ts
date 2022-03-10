// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Detalleencargo from "App/Models/Detalleencargo";

export default class DetalleencargosController {
    async store ({ request, response }) {
        let input = request.all();
        await Detalleencargo.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
