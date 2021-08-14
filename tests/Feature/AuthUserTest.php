<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthUserTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @group login
     * @return [types] [description]
     */
    public function test_login_user_auth()
    {
        $this->withoutExceptionHandling();
        $user = User::factory()->create(['email' => 'segope44@gmail.com']);

        $userdetails = ['email' => $user->email, 'password' => 'password'];

        $this->json('post', 'api/login', $userdetails)
             ->assertStatus(200)
             ->assertJsonStructure([
                 'access_token', 'token_type', 'expires_in'
         ]);
    }

    /**
     * @group auth-user
     * return [types] [description]
    */
    public function test_if_user_auth ()
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->create(['email' => 'segope44@gmail.com']);

        $userdetails = ['email' => $user->email, 'password' => 'password'];

        $userToken = $this->json('post', 'api/login', $userdetails);

        $header = [
            'Authorization' => 'bearer ' . $userToken['access_token']
        ];

        $visit = $this->get('api/auth-user', $header);
        $visit->assertStatus(200)
            ->assertJsonStructure(['first_name', 'last_name', 'username', 'email']);
    }

    /**
     * @group logout
     * return [type] [description]
    */
    public function test_if_user_can_logout()
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->create(['email' => 'segope44@gmail.com']);

        $userdetails = ['email' => $user->email, 'password' => 'password'];

        $userToken = $this->json('post', 'api/login', $userdetails);

        $header = [
            'Authorization' => 'bearer ' . $userToken['access_token']
        ];

        $visit = $this->get('api/logout', $header);

        $visit->assertStatus(200);
    }
}
