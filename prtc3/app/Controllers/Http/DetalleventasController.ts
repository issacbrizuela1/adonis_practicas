// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Detalleventa from "App/Models/Detalleventa";
export default class DetalleventasController {
    async store ({ request, response }) {
        let input = request.all();
        await Detalleventa.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
