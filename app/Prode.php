<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Prode extends Model
{
    protected $table = 'prode';
    public $primaryKey = 'id';

    protected $fillable = [
        'cuartos1','cuartos2','cuartos3','cuartos4','cuartos5','cuartos6','cuartos7','cuartos8',
        'semi1','semi2','semi3','semi4',
        'final1','final2','campeon'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

}
