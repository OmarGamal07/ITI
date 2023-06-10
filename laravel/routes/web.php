<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\PostController ;
use App\Http\Controllers\UserController;
Route::get('/posts/delete', [PostController::class, 'deletetwoYearsAgo'])->name('posts.deletetwoYearsAgo');

Route::get('/posts/search', [PostController::class, 'search'])->name('posts.search');

Route::resource('/posts',PostController::class );

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
