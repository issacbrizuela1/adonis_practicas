import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema,rules} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
export default class UsersController {
    public async register({request,response,auth}: HttpContextContract)
    {
        try {
            const userschema=schema.create(
                {
                    username:schema.string({trim:true},[rules.unique({table:'users',column:'username',caseInsensitive:true})]),
                    email:schema.string({trim:true},[rules.email(),rules.unique({table:'users',column:'username',caseInsensitive:true})]),
                    password:schema.string({},[rules.minLength(8)])
                }
            )
            const data=await request.validate({schema:userschema})
            const user=await User.create(data)
            await auth.login(user)
            //return response.redirect("/")
            return console.log("usuario registrado")
        } catch (error) {
            console.log(error)
        }
        
    }
    async store ({ request, response }) {
        let input = request.all();
        await User.create(input);
    
        return response.status(200).send({
          res: true,
          message: "Usuario registrado correctamente"
        });
      }
    public async login({request,response,auth}:HttpContextContract)
    {
        const {uid,password}=request.only(['uid','password'])
        try {
            await auth.attempt(uid,password)
        } catch (error) {
            console.log('form',"username or email is incorrect")
            return response.redirect().back()
        }
        
        return response.json({
            res: true,
            token: auth,
            message: 'Bienvenido al sistema'
        })
    }
    async logins({request, response, auth}){
        let input = request.all();
        let token = await auth.attempt(input.email, input.password);
        return response.json({
            res: true,
            token: token,
            message: 'Bienvenido al sistema'
        })
    }
}
