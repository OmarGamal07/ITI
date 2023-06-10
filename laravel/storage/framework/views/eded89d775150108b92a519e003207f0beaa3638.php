
<?php $__env->startSection('title'); ?>
    Post Details
<?php $__env->stopSection(); ?>




<?php $__env->startSection('content'); ?>
    <h1> <?php echo e($posts->title); ?> Info</h1>
    <div class="card" style="width: 18rem;">
        <img src="<?php echo e(asset('images/posts/'.$posts->image)); ?>" class="card-img-top" alt="...">
        <div class="card-body">
           <h2>Title:</h2> <h5 class="card-title"><?php echo e($posts->title); ?></h5>
            <h2>description:</h2><p class="card-text"><?php echo e($posts->description); ?></p>
            <h2>created_at</h2><h6><?php echo e(\Carbon\Carbon::parse($posts->created_at)->format('Y-m-d')); ?></h6>
            <a href="<?php echo e(route('posts.index')); ?>" class="btn btn-primary">back to all posts</a>
        </div>
    </div>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('comments',['postId' => $posts->id])->html();
} elseif ($_instance->childHasBeenRendered('JSxWIl7')) {
    $componentId = $_instance->getRenderedChildComponentId('JSxWIl7');
    $componentTag = $_instance->getRenderedChildComponentTagName('JSxWIl7');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('JSxWIl7');
} else {
    $response = \Livewire\Livewire::mount('comments',['postId' => $posts->id]);
    $html = $response->html();
    $_instance->logRenderedChild('JSxWIl7', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>





<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\opensource\laravel\day3\lab3\resources\views/post/show.blade.php ENDPATH**/ ?>