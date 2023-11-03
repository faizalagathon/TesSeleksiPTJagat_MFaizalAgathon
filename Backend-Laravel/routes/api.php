<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BarangController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Route::get("barang", [BarangController::class, 'index']);
// Route::get("barang/{id}", [BarangController::class, 'show']);
// Route::post("barang", [BarangController::class, 'store']);
// Route::put("barang/{id}", [BarangController::class, 'update']);
// Route::delete("barang/{id}", [BarangController::class, 'destroy']);

Route::apiResource('barang', BarangController::class);
