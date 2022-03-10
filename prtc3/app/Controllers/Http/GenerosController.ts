// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Genero from "App/Models/Genero";
export default class GenerosController {
    async store ({ request, response }) {
        let input = request.all();
        await Genero.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
