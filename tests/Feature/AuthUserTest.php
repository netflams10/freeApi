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
     *
     * @return void
     */
    public function test_login_user_auth()
    {
        User::factory()->create([
            'first_name' => 'Opeyemi',
            'last_name' => 'Jegede',
            'email' => 'segope44@gmail.com',
            'password' => 'johnson10',
            'username' => 'netflams10',
            'status' => 'active'
        ]);
    }
}
