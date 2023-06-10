
@extends('layouts.app')

@section('title')
    post Website
@endsection
@section('content')

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
<div class="text-center">
<input type="text" id="searchInput" placeholder="Search...">
<div id="searchResults"></div>
</div>
<div class="text-center">
<a href="{{ route('posts.create') }}" class="btn btn-success mt-3 ">Add Post</a>
</div>
<div class="text-center">
<a href="{{ route('posts.deletetwoYearsAgo') }}" class="btn btn-success mt-3 ">Delete Post2Years ago</a>
</div>

<table class="table">
<thead class="thead-dark">
    <tr>
    <td> Image</td><td> Title</td><td> Slug</td><td>postsby</td> <td> Description</td> <td> createdAT</td> <td>show </td> <td>Edit </td>
    <td>Delete </td>  
    </tr>
    </thead>
    <tbody>

    @foreach($posts as $post)
        <tr>
        <td> <img width="100" height="100" src="{{asset('images/posts/'.$post->image)}}"></td>
            <td> {{$post->title}}</td>
            <td> {{$post->slug}}</td>

                @if($post->user)

                <td><a href="{{route('users.show',$post->user->id)}}">{{$post->user->name}} </a></td>

                @else

                <td>N/A</td>

                @endif




            <td> {{$post["description"]}}</td>
            <td> {{ \Carbon\Carbon::parse($post->created_at)->format('Y-m-d') }}</td>
            <td><a href="{{route('posts.show',$post->id)}}"  class="btn btn-info">  View</a></td>
            <td>
            <a href="{{route('posts.edit',$post->id)}}"  class="btn btn-warning">  Edit</a>
             </td>
             <td><form id="delete-form" method="post" action="{{ route('posts.destroy', $post->id) }}">
                    @method('delete')
                    @csrf
                    <input type="hidden" name="post_id" value="{{ $post->id }}">
                    <button type="button" class="btn btn-danger" onclick="showConfirmation()">Delete</button>
                </form>
</td>
        </tr>
    @endforeach

    </tbody>

</table>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Add this JavaScript code at the end of your Blade view -->
<script>
    // Handle input change event
    $('#searchInput').on('input', function() {
        var searchTerm = $(this).val();

        // Send AJAX request to the search route
        $.ajax({
            url: "{{ route('posts.search') }}",
            type: "GET",
            data: {
                searchTerm: searchTerm
            },
            success: function(response) {
                // Update searchResults div with the search results
                var searchResults = $('#searchResults');
                searchResults.empty();

                if (response.length > 0) {
                    // Loop through the search results and display them
                    $.each(response, function(index, result) {
                        var resultItem = $('<div>').text(result.title);
                        searchResults.append(resultItem);
                    });
                } else {
                    // Display a message if no search results found
                    var noResultsMessage = $('<div>').text('No results found.');
                    searchResults.append(noResultsMessage);
                }
            },
            error: function(xhr, status, error) {
                // Handle error if AJAX request fails
                // console.error(error);
            }
        });
    });
</script>
</body>
</html>
<div class="pagination-container d-flex justify-content-center">
    {{ $posts->links() }}
</div>

@endsection
