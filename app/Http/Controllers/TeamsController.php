<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Teams;

class TeamsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $octavosToRet = [];
        $octavos = Teams::select('name')->get();
        
        for ($i = 0; $i < 16; $i++) {
            $octavosToRet[$i] = $octavos[$i]->name;    
        }   
        return response()->json($octavosToRet);
    }

}
