<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @group createUser
     * @return void
     */
    public function test_if_user_can_register()
    {
        $this->withoutExceptionHandling();
        $payload = [
            'first_name' => 'Opeyemi',
            'last_name' => 'Jegede',
            'email' => 'segope44@gmail.com',
            'password' => 'johnson10',
            'username' => 'netflams10',
        ];

        $resp = $this->json('post','api/registerUser', $payload);

        $resp->assertStatus(200)
            ->assertJson(['status' => "We are verifying you!"]);
    }
}
