// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venta from "App/Models/Venta";
export default class VentasController {
    async store ({ request, response }) {
        let input = request.all();
        await Venta.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
