<?php

    use Illuminate\Support\Facades\Route;


    Route::group(["namespace" => "App\Http\Controllers\Auth"], function ($route) {
        Route::post('/login', 'LoginController@login');
        Route::get('/getuser', 'LoginController@getUser')->middleware('jwt.verify');
        Route::get('/logout', 'LoginController@logout')->middleware('jwt.verify');
        Route::post('/register-user', "RegisterController@register");
    });

    Route::group(['middleware' => 'jwt.verify', "prefix" => "project", "namespace" => "App\Http\Controllers"], function () {
        Route::get('/delete', 'ProjectController@delete');
        Route::post('/edit', 'ProjectController@edit');
        Route::post('/create', "ProjectController@create");
        Route::get('/{id}', "ProjectController@show");
        Route::get('/', "ProjectController@index");
    });

    Route::group(['middleware' => 'jwt.verify', "prefix" => "project/issue", "namespace" => "App\Http\Controllers"], function () {
        Route::get('/delete/{id}', "IssueController@delete");
        Route::post('/update', "IssueController@update");
        Route::post('/create', "IssueController@store");
        Route::get('/{id}', 'IssueController@show');
    });
