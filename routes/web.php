<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClothingItemController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('clothing', ClothingItemController::class);
    Route::get('/categories', [CategoryController::class, 'index']); // Added this
});
