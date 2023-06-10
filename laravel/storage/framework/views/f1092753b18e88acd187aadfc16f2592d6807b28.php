


<?php $__env->startSection('title'); ?>
    post Website
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>

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
<a href="<?php echo e(route('posts.create')); ?>" class="btn btn-success mt-3 ">Add Post</a>
</div>
<div class="text-center">
<a href="<?php echo e(route('posts.deletetwoYearsAgo')); ?>" class="btn btn-success mt-3 ">Delete Post2Years ago</a>
</div>

<table class="table">
<thead class="thead-dark">
    <tr>
    <td> Image</td><td> Title</td><td> Slug</td><td>postsby</td> <td> Description</td> <td> createdAT</td> <td>show </td> <td>Edit </td>
    <td>Delete </td>  
    </tr>
    </thead>
    <tbody>

    <?php $__currentLoopData = $posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
        <td> <img width="100" height="100" src="<?php echo e(asset('images/posts/'.$post->image)); ?>"></td>
            <td> <?php echo e($post->title); ?></td>
            <td> <?php echo e($post->slug); ?></td>

                <?php if($post->user): ?>

                <td><a href="<?php echo e(route('users.show',$post->user->id)); ?>"><?php echo e($post->user->name); ?> </a></td>

                <?php else: ?>

                <td>N/A</td>

                <?php endif; ?>




            <td> <?php echo e($post["description"]); ?></td>
            <td> <?php echo e(\Carbon\Carbon::parse($post->created_at)->format('Y-m-d')); ?></td>
            <td><a href="<?php echo e(route('posts.show',$post->id)); ?>"  class="btn btn-info">  View</a></td>
            <td>
            <a href="<?php echo e(route('posts.edit',$post->id)); ?>"  class="btn btn-warning">  Edit</a>
             </td>
             <td><form id="delete-form" method="post" action="<?php echo e(route('posts.destroy', $post->id)); ?>">
                    <?php echo method_field('delete'); ?>
                    <?php echo csrf_field(); ?>
                    <input type="hidden" name="post_id" value="<?php echo e($post->id); ?>">
                    <button type="button" class="btn btn-danger" onclick="showConfirmation()">Delete</button>
                </form>
</td>
        </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

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
            url: "<?php echo e(route('posts.search')); ?>",
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
    <?php echo e($posts->links()); ?>

</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\opensource\laravel\day3\lab3\resources\views/post/posts_index.blade.php ENDPATH**/ ?>