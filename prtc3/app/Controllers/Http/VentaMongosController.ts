import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venta from 'App/Models/Venta'
import mongoose, { Schema } from 'mongoose'

export default class VentaMongosController {
  private mongo = mongoose
  async conexcion() {
    try {
      await this.mongo
        .connect('mongodb+srv://root:AWDSawds8713@sandbox1.1jic6.mongodb.net/practicas_web', {
          maxIdleTimeMS: 6000,
        })
        .then((db) => console.log('conectado a' + this.mongo.connection.name))
        .catch((er) => console.log(er))
    } catch (error) {
      return error
    }
  }
  async mostar() {
    const con = mongoose.createConnection(
      'mongodb+srv://root:AWDSawds8713@sandbox1.1jic6.mongodb.net/practicas_web'
    )
    const preb = con.model('venta', Venta)
    const buscar = preb
      .find({})
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    return buscar
  }
  async insertar({ request }: HttpContextContract) {
    const datos = request.all()
    const con = mongoose.createConnection(
      'mongodb+srv://root:AWDSawds8713@sandbox1.1jic6.mongodb.net/practicas_web',
      {
        maxIdleTimeMS: 6000,
      }
    )
    const preb = con.model('venta', Venta)
    let idventa= await this.ultima_venta();
    const id=await idventa+1;
    preb
      .insertMany({
        idventa: id,
        total: datos.total,
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  async ultima_venta() {
    try {
      const con = mongoose.createConnection(
        'mongodb+srv://root:AWDSawds8713@sandbox1.1jic6.mongodb.net/practicas_web'
      )
      const preb = con.model('venta', Venta)
      let s= await preb.aggregate(
        [
          {
            $project: {
              idventa: 1,
            },
          },
          {
            $sort: {
              idventa: -1,
            },
          },
          { $limit: 1 },
        ])
        let res;
        s.forEach(element => {
          res=element.idventa
        });
        return res
    } catch (error) {
      return error
    }
  }
}
