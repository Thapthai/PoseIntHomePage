@extends('HomePageV2.layout')

@push('style')
    <style>

    </style>
@endpush

@section('content')
    <main class="main">
        <!-- Page Title -->
        <div class="page-title dark-background" data-aos="fade"
            style="background-image: url({{ asset('Images/main-background.jpg') }});">
            <div class="container position-relative">
                <h1>Starter Page</h1>
                <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam
                    molestias.</p>
            </div>
        </div><!-- End Page Title -->

        <!-- Starter Section Section -->
        <section class="about section">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3>Innovative CSSD Platforms</h3>

                        <div class="position-relative">

                            <img src="{{ asset('Images/projects/001-1568x882.png') }}" class="img-fluid rounded-4"
                                alt="">
                        </div>

                    </div>
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">

                        <div class="position-relative ">

                            <img src="{{ asset('Images/business-solution.png') }}" alt=""
                                class="img-fluid rounded-4" />
                            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a>
                        </div>

                        <div class="mt-3">
                            <p> นวัตกรรมการบริหารงานจ่ายกลางของโรงพยาบาล
                                เป็นการนำเทคโนโลยีมาช่วยเพื่อลดความซ้ำซ้อนของกระบวนการ ป้องกันความผิดพลาดในการทำงาน
                                รวมถึงสามารถตรวจสอบย้อนกลับเมื่อเกิดอุบัติการณ์ได้อย่างรวดเร็ว
                                เพื่อลดความสูญเสียที่จะเกิดกับผู้ป่วยที่มารับบริการ</p>


                        </div>
                    </div>
                </div>

            </div>

        </section>



    </main>
@endsection
