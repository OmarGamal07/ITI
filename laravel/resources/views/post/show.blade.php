@extends('layouts.app')
@section('title')
    Post Details
@endsection

{{--@dd($posts)  --}}

{{--@dump($posts)--}}
@section('content')
    <h1> {{$posts->title}} Info</h1>
    <div class="card" style="width: 18rem;">
        <img src="{{asset('images/posts/'.$posts->image)}}" class="card-img-top" alt="...">
        <div class="card-body">
           <h2>Title:</h2> <h5 class="card-title">{{$posts->title}}</h5>
            <h2>description:</h2><p class="card-text">{{$posts->description}}</p>
            <h2>created_at</h2><h6>{{ \Carbon\Carbon::parse($posts->created_at)->format('Y-m-d') }}</h6>
            <a href="{{ route('posts.index') }}" class="btn btn-primary">back to all posts</a>
        </div>
    </div>
    @livewire('comments',['postId' => $posts->id])
@endsection




