<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Str;
class Post extends Model
{
    public $table = "posts";
    protected $fillable = ['title', 'description', 'image', 'user_id'];

    use Sluggable;

    /**
     * Return the sluggable configuration for the model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
                'unique' => true,
                'onUpdate' => true,
                'slugifier' => function ($value) {
                    return Str::slug($value, '-');
                },
            ]
        ];
    }

    
    use HasFactory;
    function  user(){
        return $this->belongsTo(User::class);
    }
    
}
