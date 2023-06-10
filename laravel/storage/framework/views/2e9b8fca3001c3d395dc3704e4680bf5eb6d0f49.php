

<?php $__env->startSection('title'); ?> User Posts <?php $__env->stopSection(); ?>

<?php $__env->startSection('body'); ?>
<h1> <?php echo e($user->name); ?> Info </h1>
<?php if(count($user->posts)): ?>

<h1> Posts wirtten by this user </h1>
<?php $__currentLoopData = $user->posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<li> <a href="<?php echo e(route('posts.show', $post->id)); ?>"> <?php echo e($post->title); ?></a></li>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\opensource\laravel\day3\lab3\resources\views/user/show.blade.php ENDPATH**/ ?>