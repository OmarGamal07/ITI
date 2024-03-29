<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
class UpdatePostAPIRequest extends FormRequest
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
     ## add new function failed validation
     public  function  failedValidation(Validator $validator)
     {
 //        parent::failedValidation($validator); // TODO: Change the autogenerated stub
         throw  new HttpResponseException(
             response()->json([
             'success'=>false,
             "message"=>"validation errors",
             "data"=> $validator->errors()
             ],
             400
 
         ));
     }
 
}
