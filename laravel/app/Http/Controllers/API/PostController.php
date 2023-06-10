<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\StorePostAPIRequest;
use App\Http\Resources\PostResource;
class PostController extends Controller
{
    function __construct(){
        $this->middleware('auth:sanctum')->except('index');
}
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
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        // dd("asd");
        //
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
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
        $old_image=  $post->image;
        $post->update($request->all());
        $this->save_image($request->image, $post);
        if($request->image){
            $this->delete_image($old_image);
        }

//        return new Response($article, '200');
        return new PostResource($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
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
