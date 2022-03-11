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
Route.post('login','UsersController.login')
//insert
Route.post('register','UsersController.store')
Route.post('categoria','CategoriasController.store')
Route.post('genero','GenerosController.store')
Route.post('tallas','TallasController.store')

Route.post('producto','ProductosController.store')
Route.post('proveedor','ProveedorsController.store')
//update
Route.put('categoria','CategoriasController.store')

//mostrar
Route.get('tallass/:producto','TallasController.indexbyid')
Route.get('tallasss','TallasController.all')