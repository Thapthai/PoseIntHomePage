<?php

namespace App\Http\Controllers;

use App\Models\PageVisit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function index()
    {

        $user = Auth::user();
        return view('Admin.dashboard.index', compact('user'));
    }

    public function pageVisitData($year, $month)
    {

        // 🔹 คำนวณจำนวนเข้าชมรายวันของเดือนนี้
        $dailyVisits = PageVisit::select(
            DB::raw('DAY(created_at) as day'),
            DB::raw('COUNT(*) as count')
        )
            ->whereMonth('created_at', date('m')) // เฉพาะเดือนปัจจุบัน
            ->whereYear('created_at', date('Y'))  // เฉพาะปีปัจจุบัน
            ->groupBy(DB::raw('DAY(created_at)'))
            ->orderBy('day', 'ASC')
            ->get();

        // 🔹 คำนวณจำนวนเข้าชมรายชั่วโมงของวันนี้
        $hourlyVisits = PageVisit::select(
            DB::raw('HOUR(created_at) as hour'),
            DB::raw('COUNT(*) as count')
        )
            ->whereDate('created_at', date('Y-m-d')) // เฉพาะวันที่ปัจจุบัน
            ->groupBy(DB::raw('HOUR(created_at)'))
            ->orderBy('hour', 'ASC')
            ->get();

        // 🔹 จัดรูปแบบข้อมูลให้อยู่ใน array เพื่อส่งออกไปแสดงผล
        $chartData = [
            "month" => [
                "day" => $dailyVisits->pluck('day')->toArray(), // ดึงค่า "day" เป็น array
                "count" => $dailyVisits->pluck('count')->toArray(), // ดึงค่า "count" เป็น array
            ],
            "day" => [
                "hour" => $hourlyVisits->pluck('hour')->toArray(), // ดึงค่า "hour" เป็น array
                "count" => $hourlyVisits->pluck('count')->toArray(), // ดึงค่า "count" เป็น array
            ]
        ];

        return response()->json($chartData); // ส่งข้อมูลออกไปเป็น JSON
    }
}
