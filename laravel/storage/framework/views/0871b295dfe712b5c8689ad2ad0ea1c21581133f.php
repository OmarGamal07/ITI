<div class="mt-5">
<h2 class="text-center">Comments</h2>
<form wire:submit.prevent="addComment" class="mt-4">
<div class="d-flex justify-content-around">

<input type="text" class="form-control w-50" wire:model="comment" placeholder="Type Your Comment">
<button class="btn btn-primary" type="submit">Add Comment</button>

</div>

</form>
<?php $__currentLoopData = $comments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index=>$comment): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<div class="card mt-3" xmlns:livewire="http://www.w3.org/1999/html">
<div class="card-body">
<h5 class="card-title"> Comment: <?php echo e($comment['body']); ?></h5>
<p class="card-text"> By: <?php echo e($comment['user_id']); ?></p>
<p class="card-text"> Created At : <?php echo e($comment['created_at']); ?></p>
<button class="btn btn-danger" wire:click="deleteComment(<?php echo e($index); ?>)">Delete</button>
<button class="btn btn-warning" wire:click="editcomment(<?php echo e($index); ?>)">Edit</button>
</div>
</div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div><?php /**PATH E:\opensource\laravel\day3\lab3\resources\views/livewire/comments.blade.php ENDPATH**/ ?>