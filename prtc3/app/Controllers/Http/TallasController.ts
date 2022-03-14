import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Talla from "App/Models/Talla";
import {schema,rules} from '@ioc:Adonis/Core/Validator'
export default class TallasController {
    async store ({ request, response }:HttpContextContract) {
        const tallaschema=schema.create({producto:schema.number(),numero:schema.number()})
        try {
            const data=await request.validate({schema:tallaschema})
            await Talla.create(data);
            return response.status(200).send({
            res: true,
            message: "categoria creada correctamente"
            });
        } catch (error) {
            return response.status(404).send({error});
        }
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
    async show({params,request,response})
    {
        //tiene que ser el id del producto
        const tallas=Talla.query().where('producto',params.id)
        return tallas
    }
}
