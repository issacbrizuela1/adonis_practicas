import mongoose, { Schema, model } from 'mongoose';

const sch_VENTA=new Schema({
  idventa: Number,
  total: Number
});
export default sch_VENTA;