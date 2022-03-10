// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encargo from "App/Models/Encargo";
export default class EncargosController {
    async store ({ request, response }) {
        let input = request.all();
        await Encargo.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
