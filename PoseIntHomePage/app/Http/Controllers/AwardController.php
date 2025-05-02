<?php

namespace App\Http\Controllers;

use App\Models\Awards;
use Illuminate\Http\Request;

class AwardController extends Controller
{

    public function index()
    {
        $awards = Awards::paginate('20');
        return view('Admin.manages.award.index', compact('awards'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // บันทึกข้อมูลลงฐานข้อมูล
        Awards::create([
            'user_id' => auth()->id(),
            'category_id' => 1,
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
        ]);

        // Redirect กลับพร้อมแจ้งเตือน
        return redirect()->back()->with('success', 'Project ถูกบันทึกเรียบร้อย!');
    }


    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
