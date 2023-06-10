<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StorePostAPIRequest extends FormRequest
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
            'title' => 'required|unique:posts|min:3',
            'description' => 'required|min:10',
            'image' => 'nullable|image|mimes:jpg,png',
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

//     function messages()
//     {
// //        return parent::messages(); // TODO: Change the autogenerated stub
//         return ["title"=>"shouldn't be empty"];
//     }
}