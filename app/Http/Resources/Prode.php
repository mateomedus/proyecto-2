<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Prode extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
        'cuartos1' => $this->cuartos1,
        'cuartos2' => $this->cuartos2,
        'cuartos3' => $this->cuartos3,
        'cuartos4' => $this->cuartos4,
        'cuartos5' => $this->cuartos5,
        'cuartos6' => $this->cuartos6,
        'cuartos7' => $this->cuartos7,
        'cuartos8' => $this->cuartos8,
        'semi1' => $this->semi1,
        'semi2' => $this->semi2,
        'semi3' => $this->semi3,
        'semi4' => $this->semi4,
        'final1' => $this->final1,
        'final2' => $this->final2,
        'campeon' => $this->campeon
        ];
    }
}
