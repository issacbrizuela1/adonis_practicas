// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Proveedor from "App/Models/Proveedor";
export default class ProveedorsController {
    async store ({ request, response }) {
        let input = request.all();
        await Proveedor.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
