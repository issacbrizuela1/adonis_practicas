// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Producto from "App/Models/Producto";
export default class ProductosController {
    async store ({ request, response }) {
        let input = request.all();
        await Producto.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
}
