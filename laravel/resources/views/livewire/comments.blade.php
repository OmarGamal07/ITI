<div class="mt-5">
<h2 class="text-center">Comments</h2>
<form wire:submit.prevent="addComment" class="mt-4">
<div class="d-flex justify-content-around">

<input type="text" class="form-control w-50" wire:model="comment" placeholder="Type Your Comment">
<button class="btn btn-primary" type="submit">Add Comment</button>

</div>

</form>
@foreach ($comments as $index=>$comment)
<div class="card mt-3" xmlns:livewire="http://www.w3.org/1999/html">
<div class="card-body">
<h5 class="card-title"> Comment: {{$comment['body']}}</h5>
<p class="card-text"> By: {{$comment['user_id']}}</p>
<p class="card-text"> Created At : {{$comment['created_at']}}</p>
<button class="btn btn-danger" wire:click="deleteComment({{ $index }})">Delete</button>
<button class="btn btn-warning" wire:click="editcomment({{ $index }})">Edit</button>
</div>
</div>
@endforeach
</div>