<?php

namespace App\Http\Controllers;

use App\Models\Awards;
use Illuminate\Http\Request;

class ManageController extends Controller
{
    public function manageAward()
    {
        $awards = Awards::paginate('20');

        return view('Admin.manages.award.index', compact('awards'));
    }
    public function manageProject()
    {


        return view('Admin.manages.project.index');
    }
}
