

<?php $__env->startSection('title'); ?>
    post Website
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
<h1> Edit Post </h1>

    <!-- <?php if($errors->any()): ?>
        <div class="alert alert-danger">
            <ul>
                <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li><?php echo e($error); ?></li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div>
    <?php endif; ?> -->

    <form method="POST" action="<?php echo e(route('posts.update', $posts->id)); ?>" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <?php echo method_field('put'); ?>

        <div class="mb-3">
            <label class="form-label">post ID</label>
            <input type="text" class="form-control"
                   value="<?php echo e($posts->id); ?>"
                   name="id"  aria-describedby="emailHelp" >
        </div>

        <?php $__errorArgs = ['id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
            <div class="alert alert-danger"><?php echo e($message); ?></div>
        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
        <div class="mb-3">
            <label class="form-label">post Title</label>
            <input type="text" class="form-control"
                   value="<?php echo e($posts->title); ?>"
                   name="title"  aria-describedby="emailHelp">
        </div>

        <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
            <div class="alert alert-danger"><?php echo e($message); ?></div>
        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

        <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="text" class="form-control"
                   value="<?php echo e($posts->description); ?>"
                   name="description"  aria-describedby="emailHelp">
        </div>
        <?php $__errorArgs = ['description'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
            <div class="alert alert-danger"><?php echo e($message); ?></div>
        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

        <?php if($posts->image): ?>
        <div class="mb-3">
            <label class="form-label">old image</label>
            <img src="<?php echo e(asset('images/posts/'.$posts->image)); ?>" height="100">
        </div>
        <?php endif; ?>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">post Image</label>
            <input type="file"
                    name='image' class="form-control" aria-describedby="emailHelp">
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Users</label>
            <select class="form-select" name="user_id" aria-label="Default select example">
                <option selected disabled>Select User</option>
                <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if($user->id == $posts->user_id): ?>
                        <option value="<?php echo e($user->id); ?>" selected> <?php echo e($user->name); ?></option>
                    <?php else: ?>
                        <option value="<?php echo e($user->id); ?>" > <?php echo e($user->name); ?></option>
                    <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </select>
        </div>
        <?php $__errorArgs = ['user_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
            <div class="alert alert-danger"><?php echo e($message); ?></div>
        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\opensource\laravel\day3\lab3\resources\views/post/edit.blade.php ENDPATH**/ ?>