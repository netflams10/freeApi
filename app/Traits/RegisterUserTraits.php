<?php

    namespace App\Traits;

    use Illuminate\Support\Facades\Hash;
    use App\Notifications\RegisterUserNotification;
    use App\Models\User;

    trait RegisterUserTraits {

        private function notifyNewUser ($user)
        {
            $user->notify(new RegisterUserNotification($user));
            return response()->json(["message" => "We will confirm and send an Activation Mail later"], 200);
        }

        private function create ($request)
        {
            $password = Hash::make($request['password']);

            $user = User::create([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'username' => $request['username'],
                'email' => $request['email'],
                'password' => $password
            ]);

            if (empty($user->id)) {
                return response()->json(["message" => "Something Happened!"])->status(406);
            }
            return $this->notifyNewUser($user);
        }


        private function registerUser ($request)
        {
            return $this->create($request);
        }

    }
