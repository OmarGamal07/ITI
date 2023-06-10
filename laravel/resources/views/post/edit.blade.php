@extends('layouts.app')

@section('title')
    post Website
@endsection
@section('content')
<h1> Edit Post </h1>

    <!-- @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif -->

    <form method="POST" action="{{route('posts.update', $posts->id)}}" enctype="multipart/form-data">
        @csrf
        @method('put')

        <div class="mb-3">
            <label class="form-label">post ID</label>
            <input type="text" class="form-control"
                   value="{{$posts->id}}"
                   name="id"  aria-describedby="emailHelp" >
        </div>

        @error('id')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <div class="mb-3">
            <label class="form-label">post Title</label>
            <input type="text" class="form-control"
                   value="{{$posts->title}}"
                   name="title"  aria-describedby="emailHelp">
        </div>

        @error('title')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror

        <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="text" class="form-control"
                   value="{{ $posts->description }}"
                   name="description"  aria-describedby="emailHelp">
        </div>
        @error('description')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror

        @if($posts->image)
        <div class="mb-3">
            <label class="form-label">old image</label>
            <img src="{{asset('images/posts/'.$posts->image)}}" height="100">
        </div>
        @endif

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">post Image</label>
            <input type="file"
                    name='image' class="form-control" aria-describedby="emailHelp">
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Users</label>
            <select class="form-select" name="user_id" aria-label="Default select example">
                <option selected disabled>Select User</option>
                @foreach($users as  $user)
                    @if($user->id == $posts->user_id)
                        <option value="{{$user->id}}" selected> {{$user->name}}</option>
                    @else
                        <option value="{{$user->id}}" > {{$user->name}}</option>
                    @endif
                @endforeach
            </select>
        </div>
        @error('user_id')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
