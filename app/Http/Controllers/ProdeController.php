<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Prode;

class ProdeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prodes = Prode::where('user_id', auth('api')->user()->id)->select('created_at', 'id')->get();
        return response()->json($prodes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prode = new Prode();

        $prode->cuartos1 = $request->input('data.cuartos1');
        $prode->cuartos2 = $request->input('data.cuartos2');
        $prode->cuartos3 = $request->input('data.cuartos3');
        $prode->cuartos4 = $request->input('data.cuartos4');
        $prode->cuartos5 = $request->input('data.cuartos5');
        $prode->cuartos6 = $request->input('data.cuartos6');
        $prode->cuartos7 = $request->input('data.cuartos7');
        $prode->cuartos8 = $request->input('data.cuartos8');
        $prode->semi1 = $request->input('data.semi1');
        $prode->semi2 = $request->input('data.semi2');
        $prode->semi3 = $request->input('data.semi3');
        $prode->semi4 = $request->input('data.semi4');
        $prode->final1 = $request->input('data.final1');
        $prode->final2 = $request->input('data.final2');
        $prode->campeon = $request->input('data.campeon');
        $prode->user_id = auth('api')->user()->id;
        $prode->save();

        $prodes = Prode::where('user_id', auth('api')->user()->id)->select('created_at', 'id')->get();
        return response()->json($prodes);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prode = Prode::where('id', $id)->get(['cuartos1', 'cuartos2', 'cuartos3', 'cuartos4', 'cuartos5', 'cuartos6', 'cuartos7', 'cuartos8', 'semi1', 'semi2', 'semi3', 'semi4', 'final1', 'final2', 'campeon']);
        return response()->json($prode);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $prode = Prode::find($id);
        $prode->cuartos1 = $request->input('data.cuartos1');
        $prode->cuartos2 = $request->input('data.cuartos2');
        $prode->cuartos3 = $request->input('data.cuartos3');
        $prode->cuartos4 = $request->input('data.cuartos4');
        $prode->cuartos5 = $request->input('data.cuartos5');
        $prode->cuartos6 = $request->input('data.cuartos6');
        $prode->cuartos7 = $request->input('data.cuartos7');
        $prode->cuartos8 = $request->input('data.cuartos8');
        $prode->semi1 = $request->input('data.semi1');
        $prode->semi2 = $request->input('data.semi2');
        $prode->semi3 = $request->input('data.semi3');
        $prode->semi4 = $request->input('data.semi4');
        $prode->final1 = $request->input('data.final1');
        $prode->final2 = $request->input('data.final2');
        $prode->campeon = $request->input('data.campeon');
        $prode->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $prode = Prode::find($id);
        $prode->delete();

        $prodes = Prode::where('user_id', auth('api')->user()->id)->select('created_at', 'id')->get();
        return response()->json($prodes);
    }
}
