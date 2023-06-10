<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Http\Response;
use App\Http\Requests\StorePostAPIRequest;
use App\Http\Resources\PostResource;
class PostAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return PostResource::collection(Post::all());

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostAPIRequest $request)
    {
        //
        $post = Post::create($request->all());
        $this->save_image($request->image, $post);
        return new PostResource($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        if ($post){
            //            return $article; # return article object
            return  new PostResource($post);  #
        }
        return  new Response('', 205);
            
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
        $post->delete();
        return new Response('', 204);
    }
    private function save_image($image, $article){
        if ($image){
            $image_name = time().'.'.$image->extension();
            $image->move(public_path('images/articles'),$image_name);
            $article->image = $image_name;
            $article->save();
        }
    }
    private  function  delete_image($image_name){
        if($image_name !='article.png' and ! str_contains($image_name, '/tmp/')){
            try{
                unlink(public_path('images/articles/'.$image_name));

            }catch (\Exception $e){
                echo $e;
            }
        }
    }
}
