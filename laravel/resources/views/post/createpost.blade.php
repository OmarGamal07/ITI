@extends('layouts.app')

@section('title')
    post Website
@endsection
@section('content')
<h1> Create Post </h1>

<!-- @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif -->
@error('user_id')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
<form method="POST" action="{{route('posts.store')}}" enctype="multipart/form-data">
    @method('post')
    @csrf

    <div class="mb-3">
        <label class="form-label">Post Title</label>
        <input type="text" class="form-control"
               value="{{ old('title') }}"
               name="title"  aria-describedby="emailHelp">
    </div>

    @error('title')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <div class="mb-3">
        <label class="form-label">Description</label>
        <input type="text" class="form-control"
               value="{{ old('description') }}"
               name="description"  aria-describedby="emailHelp">
    </div>

    @error('description')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">post Image</label>
        <input type="file"
                name='image' class="form-control" aria-describedby="emailHelp">
    </div>
    @error('image')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Users</label>
        <select class="form-select" name="user_id" aria-label="Default select example">
            <option selected disabled>Select User</option>
            @foreach($users as  $user)
                <option value="{{$user->id}}"> {{$user->name}}</option>
            @endforeach
        </select>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>
@endsection
