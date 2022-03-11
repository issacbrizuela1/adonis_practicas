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
    async index ({ request, response }) 
    {
        const input = await request.all();
        if(input.txtBuscar !== undefined){
        return await Talla.query()
                                .where('nombre', input.txtBuscar)
                                .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%');
        }
        else{
        return await Talla.all();
        }    
    }
    async update ({ params, request, response }) {
        //validar
        
        await Talla.query().where('id_categoria', params.id).update(request.all());
        return {
        res: true,
        message: "Registro modificado correctamente"
        }
    }
    async destroy ({ params, request, response }) {
        const categoria = await Talla.findOrFail(params.id);
        await categoria.delete();
        return {
        res: true,
        message: "Registro eliminado correctamente"
        }
    }
    async indexbyid({params,request,response})
    {
        try {
            if (request.producto!="") {
                return await Talla.query()
                                .where('nombre', request.producto);
            }
            else{
                return "no jala"
            }
        } catch (error) {
            return error
        }
    }
    async all()
    {
        const tallas=Talla.query().where('producto',1)
        return tallas
    }
}
