import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(() => {
  Route.get('user', 'UserController.getUser');
  Route.post('logout', 'UserController.logout');
})
Route.post('login','UsersController.login')
Route.post('comp','UsersController.comp')



Route.post('insertUser','UserController.store');
Route.get('mostrarUser','UserController.index');
Route.put('editarUser/:id','UserController.update');
Route.delete('eliminarUser/:id','UserController.destroy');
//Route.get('mostrarbyidUser/:id','UserController.buscar');

Route.post('insertCategorias','CategoriasController.store');
Route.get('mostrarCategorias','CategoriasController.index');
Route.put('editarCategorias/:id','CategoriasController.update');
Route.delete('eliminarCategorias/:id','CategoriasController.destroy');
//Route.get('mostrarbyidCategorias/:id','CategoriasController.buscar');

Route.post('insertDetalleencargo','DetalleencargosController.store');
Route.get('mostrarDetalleencargo','DetalleencargosController.index');
Route.put('editarDetalleencargo/:id','DetalleencargosController.update');
Route.delete('eliminarDetalleencargo/:id','DetalleencargosController.destroy');
//Route.get('mostrarbyidDetalleencargo/:id','DetalleencargosController.buscar');

Route.post('insertEncargos','EncargosController.store');
Route.get('mostrarEncargos','EncargosController.index');
Route.put('editarEncargos/:id','EncargosController.update');
Route.delete('eliminarEncargos/:id','EncargosController.destroy');
//Route.get('mostrarbyidEncargos/:id','EncargosController.buscar');

Route.post('insertGeneros','GenerosController.store');
Route.get('mostrarGeneros','GenerosController.index');
Route.put('editarGeneros/:id','GenerosController.update');
Route.delete('eliminarGeneros/:id','GenerosController.destroy');
//Route.get('mostrarbyidGeneros/:id','GenerosController.buscar');

Route.post('insertProductos','ProductosController.store');
Route.get('mostrarProductos','ProductosController.index');
Route.put('editarProductos/:id','ProductosController.update');
Route.delete('eliminarProductos/:id','ProductosController.destroy');
//Route.get('mostrarbyidProductos/:id','ProductosController.buscar');

Route.post('insertProveedors','ProveedorsController.store');
Route.get('mostrarProveedors','ProveedorsController.index');
Route.put('editarProveedors/:id','ProveedorsController.update');
Route.delete('eliminarProveedors/:id','ProveedorsController.destroy');
//Route.get('mostrarbyidProveedors/:id','ProveedorsController.buscar');

Route.post('insertTallas','TallasController.store');
Route.get('mostrarTallas','TallasController.index');
Route.put('editarTallas/:id','TallasController.update');
Route.delete('eliminarTallas/:id','TallasController.destroy');
//Route.get('mostrarbyidTallas/:id','TallasController.buscar');

Route.get('mostrarVenta','VentaMongosController.mostar');
Route.post('insertarVenta','VentaMongosController.insertar');
Route.get('ultimoID','VentaMongosController.ultima_venta');

Route.get('mostrarDetalleVenta','DetalleventasController.mostar');
Route.post('insertarDetalleVenta','DetalleventasController.insertar');

Route.get('mostrarCarrito','DetalleventasController.mostrar_carrito');
Route.post('insertarCarrito','DetalleventasController.insertar_carrito');

Route.get('total','DetalleventasController.total');



Route.group(() => {

  Route.get('token', async ({ auth }) => {
    await auth.use('api').authenticate()
    console.log(auth.use('api').user!)
    return { resp: 'activo' }
  })
  /*
  Route.post('/usuario', 'UsuariosController.store')
  Route.delete('/usuario/:id', 'UsuariosController.destroy')
  Route.get('/usuario', 'UsuariosController.index')
  Route.patch('/usuario/:id', 'UsuariosController.update')
  Route.get('/usuario/:id', 'UsuariosController.show')
  */
}).middleware('auth')
/*
Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.register')
*/