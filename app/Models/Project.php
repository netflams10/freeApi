<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Concerns\UseUuid as Uuid;

class Project extends Model
{
    use HasFactory, Uuid;

    protected $fillable = ["user_id", "project_name", "description", "project_awarder", "status"];

    protected $with = ['created_by'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo User::class
     */
    public function created_by ()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany Issue::class
     */
    public function issue ()
    {
        return $this->hasMany(Issue::class, 'project_id', 'id');
    }
}
