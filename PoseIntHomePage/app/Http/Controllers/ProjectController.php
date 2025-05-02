<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Projects::paginate('20');

        return view('Admin.manages.project.index', compact('projects'));
    }

    public function store(Request $request)
    {

        // บันทึกข้อมูลลงฐานข้อมูล
        Projects::create([
            'user_id' => auth()->id(),
            'category_id' => 1,
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
        ]);

        // Redirect กลับพร้อมแจ้งเตือน
        return redirect()->back()->with('success', 'Project ถูกบันทึกเรียบร้อย!');
    }
}
