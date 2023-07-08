<?php

namespace App\Http\Controllers;

use App\Models\Datarecord;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DatarecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $data = Datarecord::all();
        return view('pages.datarecord',['data' => $data]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'  => 'required',
            'address'  => 'required',
            'city'  => 'required',
            'state'  => 'required',
            'zip'  => 'required',
            'phone'  => 'required',
            'email'  => 'required|unique:data_records',
        ]);
        
        $data = new Datarecord($request->all());
        $data->save();

        return response()->json();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Datarecord  $datarecord
     * @return \Illuminate\Http\Response
     */
    public function edit(request $request)
    {
        $data = Datarecord::find($request);

        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Datarecord  $datarecord
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Datarecord $datarecord)
    {
        $validated = $request->validate([
            'name'  => 'required',
            'address'  => 'required',
            'city'  => 'required',
            'state'  => 'required',
            'zip'  => 'required',
            'phone'  => 'required',
            'email'  => [
                'required',
                Rule::unique('data_records')->ignore($request->id),
            ],
        ]);

        $data = Datarecord::find($request->id);
        $data->name = $request->name;
        $data->address = $request->address;
        $data->city = $request->city;
        $data->state = $request->state;
        $data->zip = $request->zip;
        $data->phone = $request->phone;
        $data->email = $request->email;
        $data->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Datarecord  $datarecord
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $dataaaa = Datarecord::find($request->id)->delete();
        
        return response()->json($dataaaa);
    }
}
