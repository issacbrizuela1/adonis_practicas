import mongoose, { Schema, model } from 'mongoose';

const sch_VENTA=new Schema({
  "idventa": Number,
  "nombre": String,
  "empleado": Number,
  "marca": String,
  "categoria": String,
  "talla": Number,
  "color": String,
  "precio_u": Number,
  "cantidad": Number,
  "subtotal": Number
});
export default sch_VENTA;