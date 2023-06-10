<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\MaxPostsPerUser;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $userId = $this->input('user_id');
        return [
            'title' => 'required|unique:posts|min:3',
            'description' => 'required|min:10',
            'user_id' => [new MaxPostsPerUser($userId)],
            'image' => 'nullable|image|mimes:jpg,png',
        ];
    }
}