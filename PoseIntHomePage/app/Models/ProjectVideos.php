<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

class ProjectVideos extends Model
{
    use HasFactory;
    protected $table = 'project_videos';

    protected $fillable = [
        'project_id',
        'name',
        'link',
        'status'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }
}
