import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DetalleVenta from 'App/Models/DetalleVenta'
import Venta from 'App/Models/Venta'
import Carrito from 'App/Models/carrito'
import mongoose, { Schema } from 'mongoose'
export default class DetalleventasController {
  private mongo = mongoose
  private carrito = new Carrito()
  private s: any = []
  async conexcion() {
    try {
      await this.mongo
        .connect('mongodb+srv://root:admin@sandbox1.1jic6.mongodb.net/practicas_web', {
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
    const preb = con.model('detalleventa', DetalleVenta)
    const buscar = preb
      .find({})
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    return buscar
    /*
        const v = new Venta();
        this.mongo.model('venta', v);
        return v.findOne({})
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })*/
  }
  async insertar({ request }: HttpContextContract) {
    const datos = request.all()
    const con = mongoose.createConnection(
      'mongodb+srv://root:AWDSawds8713@sandbox1.1jic6.mongodb.net/practicas_web'
    )
    const preb = con.model('detalleventa', DetalleVenta)
    await preb
      .insertMany({
        idventa: datos.idventa,
        nombre: datos.nombre,
        empleado: datos.empleado,
        marca: datos.marca,
        categoria: datos.categoria,
        talla: datos.talla,
        color: datos.color,
        precio_u: datos.precio_u,
        cantidad: datos.cantidad,
        subtotal: datos.precio_u * datos.cantidad,
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  private c: Array<object> = []
  async insertar_carrito({ request }: HttpContextContract) {
    let datos = request.all()
    this.c.unshift(datos)
    return { xd: this.c, a: datos }
  }
  async mostrar_carrito() {
    console.log()
  }
  async total() {
    try {
      const con = mongoose.createConnection(
        'mongodb+srv://root:AWDSawds8713@sandbox1.1jic6.mongodb.net/practicas_web'
      )
      const preb = con.model('detalleventa', DetalleVenta)
      let s = await preb.aggregate([
        {
          $group: {
            _id: '$idventa',
            total: {
              $sum: '$subtotal',
            },
          },
        },
        {
          $project: {
            total: 1,
          },
        },
        {
          $match: {
            _id: 2,
          },
        },
      ])
      let res
      s.forEach((element) => {
        res = element.total
      })
      return res
    } catch (error) {
      return error
    }
  }
}
