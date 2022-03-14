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

Route.post('insertCategorias','CategoriasController.store');
Route.get('mostrarCategorias','CategoriasController.index');
Route.put('editarCategorias/:id','CategoriasController.update');
Route.delete('eliminarCategorias/:id','CategoriasController.destroy');
//Route.get('mostrarbyidCategorias/:id','CategoriasController.buscar');