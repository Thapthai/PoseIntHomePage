<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AwardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ManageController;
use App\Http\Controllers\ProjectController;
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


Route::get('/', [HomeController::class, 'index'])->name('homepage');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/awards', [HomeController::class, 'awards'])->name('awards');
Route::get('/projects', [HomeController::class, 'projects'])->name('projects');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/projects/{project}', [HomeController::class, 'projectView'])->name('homepage.project');


Route::prefix('/admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.index')->middleware('auth');

    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('admin.login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->name('admin.logout')->middleware('auth');



    Route::prefix('/manage')->group(function () {

        Route::get('/awards', [AwardController::class, 'index'])->name('admin.manage.award');
        Route::post('/awards/store', [AwardController::class, 'store'])->name('admin.manage.award.store');

        Route::get('/projects', [ProjectController::class, 'index'])->name('admin.manage.project');
        Route::post('/projects/store', [ProjectController::class, 'store'])->name('admin.manage.project.store');
    });


    Route::get('/api/page-visit-data/{year}/{month}', [AdminController::class, 'pageVisitData'])->name('admin.pageVisitData')->middleware('auth');
});
