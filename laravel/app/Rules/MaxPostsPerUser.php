<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class MaxPostsPerUser implements Rule
{
    
    protected $userId;
    public function __construct($userId)
    {
        $this->userId = $userId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //
        $userPostsCount = Post::where('user_id', $this->userId)->count();

        return $userPostsCount <= 3;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Cant create more than 3 posts';
    }
}
