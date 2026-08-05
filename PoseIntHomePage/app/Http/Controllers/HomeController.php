<?php

namespace App\Http\Controllers;

use App\Models\Awards;
use App\Models\PageVisit;
use App\Models\Projects;
use Illuminate\Http\Request;

class HomeController extends Controller
{


    public function index()
    {

        $userIp = request()->ip();

        $currentTime = date('Y-m-d H:i:s');
        $timeLimit = date('Y-m-d H:i:s', strtotime($currentTime . ' - 5 minutes'));


        $existingVisit = PageVisit::where('ip_address', $userIp)
            ->where('created_at', '>', $timeLimit)
            ->first();

        if (!$existingVisit) {
            $visit = new PageVisit;
            $visit->ip_address = $userIp;
            $visit->save();
        }
        $this->about();

        $projects = Projects::where('status', 'Active')->get();
        $awards = Awards::where('status', 'Active')->get();    

        return view('HomePageV2.index', compact(
            'projects',
            'awards',
        ));
    }

    public function about()
    {
        $projects = Projects::get();
        return view('HomePage.project.index', compact('projects'));
    }

    public function awards()
    {
        $projects = Projects::get();
        return view('HomePage.project.index', compact('projects'));
    }

    public function contact()
    {
        $projects = Projects::get();
        return view('HomePage.project.index', compact('projects'));
    }


    public function projects()
    {
        $projects = Projects::get();
        return view('HomePage.project.index', compact('projects'));
    }

    public function projectView(Projects $project)
    {
        return view('HomePageV2.project.index', compact(
            'project',
        ));
    }
}
