<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Concerns\UseUuid as Uuid;

class Issue extends Model
{
    use HasFactory, Uuid;

    protected $fillable = [
        'project_id', 'title', 'description', 'status', 'assign_user_id', 'tester_id'
    ];

    public function project ()
    {
        return $this->hasOne(Project::class, 'id', 'project_id');
    }

    public function issue_status ()
    {
        return $this->hasOne(Status::class, 'id', 'status');
    }
}
