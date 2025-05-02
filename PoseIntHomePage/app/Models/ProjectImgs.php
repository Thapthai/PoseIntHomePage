<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectImgs extends Model
{
    use HasFactory;
    protected $table = 'project_imgs';

    protected $fillable = [
        'project_id',
        'path',
        'status'
    ];
}
