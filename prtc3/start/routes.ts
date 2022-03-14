/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(() => {
  Route.get('user', 'UserController.getUser');
  Route.post('logout', 'UserController.logout');
})
Route.post('login','UsersController.logins')
Route.post('comp','UsersController.comp')

Route.get('Categorias/:id','CategoriasController.buscar');
Route.resource('Generos','GenerosController').apiOnly();
Route.resource('Users','UsersController').apiOnly();
Route.post('Proveedores','ProveedorsController.store');
Route.get('Productos','ProductosController.index');
Route.resource('tallas','TallasController').apiOnly();

Route.post('insertCategorias','CategoriasController.store');
Route.get('mostrarCategorias','CategoriasController.index');
Route.put('editarCategorias/:id','CategoriasController.update');
Route.delete('eliminarCategorias/:id','CategoriasController.destroy');
Route.get('mostrarbyidCategorias/:id','CategoriasController.buscar');

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