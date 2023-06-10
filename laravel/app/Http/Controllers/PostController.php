<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\User;
use Carbon\Carbon;
use App\Jobs\PruneOldPostsJob;
class PostController extends Controller
{
    function __construct(){
                $this->middleware('auth')->except('index');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $posts = Post::paginate(10);
        return view('post.posts_index', ['posts'=>$posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $users = User::all();
        return view('post.createpost', ['users'=>$users]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
        //
        $data = $request->only(['title', 'description', 'image', 'user_id']);
        // $data = $request->validated();
        
        $post=Post::create($data);
        $this->save_image($request->image, $post);
        return redirect()->route('posts.index');    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
        return view('post.show', ['posts'=>$post]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
        $users = User::all();
        return view('post.edit', ["posts"=>$post, 'users'=>$users]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
        $old_image=  $post->image;
        $post->update($request->all());
        $this->save_image($request->image, $post);
        if($request->image){
            $this->delete_image($old_image);
        }
        return redirect()->route('posts.show', $post->id);

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
        $this->delete_image($post->image);
        $post->delete();
        return redirect()->route('posts.index');
    }
    public function search(Request $request)
    {
        $searchTerm = $request->input('searchTerm');
        // Perform your search logic based on the provided search term
        $results = Post::where('title', 'like', '%'.$searchTerm.'%')->get();
        
        return response()->json($results);
    }
    public function deletetwoYearsAgo()
    {
        //
        PruneOldPostsJob::dispatch();
        return redirect()->route('posts.index');
    }
    private  function  delete_image($image_name){
        //        dd($image_name !='article.png' and ! str_contains($image_name, '/tmp/'));
                if($image_name !='article.png' and ! str_contains($image_name, '/tmp/')){
                try{
                    unlink(public_path('images/posts/'.$image_name));
        
                }catch (\Exception $e){
                    echo $e;
                }
                }
            }
        
            private function save_image($image, $post){
                if ($image){
                    $image_name = time().'.'.$image->extension();
                    $image->move(public_path('images/posts'),$image_name);
                    $post->image = $image_name;
                    $post->save();
                }
            }
}
