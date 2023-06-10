<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdatePostRequest extends FormRequest
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
        return [
            //
            'id'=> ['required', Rule::unique('posts')->ignore($this->post)],
            'title'=> ['required','min:3', Rule::unique('posts')->ignore($this->post)],
            'description'=>['required','min:10'],
            'image' => 'nullable|image|mimes:jpg,png',
            'user_id' => 'required|exists:users,id',
        ];
    }
}
