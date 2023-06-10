<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Carbon\Carbon;

class Comments extends Component
{
    public $postId;
    public $comment;
    public $comments = [];
    
  
    public function editcomment($index){
        
        $this->comments[$index]['body']=$this->comment ;
        $this->comments[$index]['created_at']=Carbon::parse(time())->format('Y-m-d H:i:s');

    }
    public function deleteComment($index){
        unset($this->comments[$index]);
    }
    public function addComment()
    {
    array_push($this->comments, [
    'body' => $this->comment,
    'user_id' => 1,
    'post_id' => $this->postId,
    'created_at' => Carbon::parse(time())->format('Y-m-d H:i:s')
    
    ]);
    
    $this->comment = '';
    }
    
    public function render()
    {
        return view('livewire.comments');
    }
}
