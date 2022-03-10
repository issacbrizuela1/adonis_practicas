// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Talla from "App/Models/Talla";
export default class TallasController {
    async store ({ request, response }) {
        let input = request.all();
        await Talla.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
