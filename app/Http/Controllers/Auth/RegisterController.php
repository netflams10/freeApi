<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use App\Traits\RegisterUserTraits;


class RegisterController extends Controller
{
    use RegisterUserTraits;

    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function register (RegisterUserRequest $request)
    {
        return $this->registerUser($request);
    }
}
