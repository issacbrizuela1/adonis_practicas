interface ICarrito {
  idventa: Number
  nombre: String
  marca: String
  categoria: String
  talla: Number
  color: String
  precio_u: Number
  cantidad: Number
  subtotal: Number
}
export default class Carrito {
  private listaCarrito: Array<ICarrito> = []
  Carrito() {}
  agregar(objeto) {
    try {
      this.listaCarrito.push(objeto)
    } catch (error) {
      return error
    }
    return this.listaCarrito
  }
  mostrar() {
    try {
      return this.listaCarrito.values();
    } catch (error) {
      return error
    }
  }
}
