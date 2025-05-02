@extends('HomePageV2.layout')

@push('style')
    <style>

    </style>
@endpush

@section('content')
    <main class="main">
        <section id="hero" class="hero section dark-background">
            <img src="{{ asset('Images/main-background.jpg') }}" class="imgBackGround" data-aos="fade-in">
            <div class="container d-flex flex-column align-items-center">
                <img src="{{ asset('Images/logo/POSE-LOGO.png') }}" alt="POSE Intelligence" width="250px" data-aos="fade-up"
                    data-aos-delay="100">

                <h3 data-aos="fade-up" data-aos-delay="200">Innovative Hospital Platforms</h3>
                <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="https://www.youtube.com/watch?v=o1r9QayWp3M&t=4s"
                        class="glightbox btn-watch-video d-flex align-items-center"><i
                            class="bi bi-play-circle"></i><span>Watch Video</span></a>
                </div>
            </div>

        </section>

        <!-- About Section -->
        <section id="about" class="about section">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3>Innovative Hospital Platforms</h3>
                        <img src="{{ asset('Images/POSE-bg1.png') }}" class="img-fluid rounded-4 mb-4" alt="">

                        <p>บริษัท โพส อินเทลลิเจ้นซ์ จำกัด ผู้นำด้านการพัฒนาซอฟต์แวร์ การบริหารจัดการเครื่องมือแพทย์
                            เวชภัณฑ์ ครุภัณฑ์ และ การบริหารจัดการผ้าในโรงพยาบาลด้วยเทคโนโลยีที่ทันสมัย เช่น Medical Device
                            UV Laser Marking, RFID</p>

                        <p> เป้าหมายหลัก คือ มุ่งมั่นพัฒนาโซลูชันที่ช่วยยกระดับมาตรฐานในวงการแพทย์และสาธารณสุข
                            เพื่อสนับสนุนโรงพยาบาลและสถานพยาบาลให้มีระบบการจัดการที่ทันสมัยและมีประสิทธิภาพสูงสุด
                            ช่วยให้โรงพยาบาลสามารถบริหารจัดการทรัพยากรทางการแพทย์ได้อย่างเป็นระบบ
                            ลดต้นทุน ลดความสูญเสีย และเพิ่มคุณภาพการให้บริการแก่ผู้ป่วย</p>
                    </div>
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                        <div class="content ps-0 ps-lg-5">
                            <h3>Business Solution</h3>
                            <p> ในยุคที่เทคโนโลยีมีบทบาทสำคัญในอุตสาหกรรมการแพทย์
                                โรงพยาบาลและสถาบันทางการแพทย์จำเป็นต้องมีระบบบริหารจัดการที่ทันสมัย เพื่อเพิ่มประสิทธิภาพ
                                ลดต้นทุน
                                และยกระดับคุณภาพการดูแลผู้ป่วย บริษัท โพส อินเทลลิเจ้นซ์ จำกัด นำเสนอ
                                แพลตฟอร์มโรงพยาบาลอัจฉริยะ
                                ที่ช่วยบริหารจัดการ เครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และระบบผ้าในโรงพยาบาล
                                ผ่านเทคโนโลยีล้ำสมัย
                                เช่น Medical Device UV Laser Marking และ RFID</p>
                            <h3>Software Development</h3>
                            <p> การพัฒนาซอฟต์แวร์ที่มีประสิทธิภาพเป็นหัวใจสำคัญของ แพลตฟอร์มโรงพยาบาลอัจฉริยะ ของ บริษัท โพส
                                อินเทลลิเจ้นซ์ จำกัด เรามุ่งเน้น การพัฒนาระบบบริหารจัดการเครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์
                                และระบบผ้าในโรงพยาบาล โดยใช้เทคโนโลยีล้ำสมัย เช่น RFID Tracking, Medical Device UV Laser
                                Marking
                                และระบบอัตโนมัติ เพื่อช่วยให้โรงพยาบาลสามารถทำงานได้อย่าง แม่นยำ รวดเร็ว และปลอดภัย</p>

                            <div class="position-relative mt-4">
                                {{-- <img src="assets/img/about-2.jpg" class="img-fluid rounded-4" alt=""> --}}
                                <img src="{{ asset('Images/business-solution.png') }}" alt=""
                                    class="img-fluid rounded-4" />
                                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                    class="glightbox pulsating-play-btn"></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section id="awards" class="services section light-background">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Pose Intelligence</h2>
                <p>Awards<br></p>
            </div><!-- End Section Title -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row gy-5">

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/awards/ip2021.png') }}" class="img-fluid" alt="">
                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-trophy"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>IP Champion Awards 2021</h3>
                                </a>
                                <p> </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/awards/RSP001.png') }}" class="img-fluid" alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-trophy"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>RSP Innovation Awards 2020</h3>
                                </a>
                                <p> </p>
                            </div>
                        </div>
                    </div><!-- End Service Item -->

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/awards/NSPNEW.png') }}" class="img-fluid" alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-trophy"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>NSP Innovation Awards 2020</h3>
                                </a>
                                <p></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section><!-- /Stats Section -->

        <!-- Services Section -->
        <section id="project" class="services section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Pose Intelligence</h2>
                <p>Projects<br></p>
            </div><!-- End Section Title -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row gy-5">

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/projects/001-1568x882.png') }}" class="img-fluid"
                                    alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-activity"></i>
                                </div>
                                <a href="{{ route('homepage.project', [1]) }}" class="stretched-link">
                                    <h3>Innovative CSSD Platforms</h3>
                                </a>
                                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus
                                    dolores iure perferendis.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/projects/002_2-1568x882.png') }}" class="img-fluid"
                                    alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-broadcast"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>Linen Management Platforms</h3>
                                </a>
                                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque
                                    eum hic non ut nesciunt dolorem.</p>
                            </div>
                        </div>
                    </div><!-- End Service Item -->

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/projects/003_2-1568x882.png') }}" class="img-fluid"
                                    alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-easel"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>Inventory Management Platforms</h3>
                                </a>
                                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id
                                    voluptas adipisci eos earum corrupti.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/projects/004_2-1568x882.png') }}" class="img-fluid"
                                    alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-easel"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>Asset Tracking Platforms</h3>
                                </a>
                                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id
                                    voluptas adipisci eos earum corrupti.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/projects/006_2-1568x882.png') }}" class="img-fluid"
                                    alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-easel"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>Smart Hand Hygiene</h3>
                                </a>
                                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id
                                    voluptas adipisci eos earum corrupti.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="service-item">
                            <div class="img">
                                <img src="{{ asset('Images/projects/POS-Drugstore-Platforms-1568x882.png') }}"
                                    class="img-fluid" alt="">

                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-easel"></i>
                                </div>
                                <a href="service-details.html" class="stretched-link">
                                    <h3>POS Drugstore Platforms</h3>
                                </a>
                                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id
                                    voluptas adipisci eos earum corrupti.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section><!-- /Services Section -->

        <!-- Clients Section -->
        <section id="clients" class="clients section light-background">

            <div class="container" data-aos="fade-up">

                <div class="row gy-4">

                    <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">
                    </div><!-- End Client Item -->

                    <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
                    </div><!-- End Client Item -->

                    <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
                    </div><!-- End Client Item -->

                    <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
                    </div><!-- End Client Item -->

                    <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
                    </div><!-- End Client Item -->

                    <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">
                    </div><!-- End Client Item -->

                </div>

            </div>

        </section><!-- /Clients Section -->


        <section id="contact" class="contact section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>POSE Intelligence </p>
            </div><!-- End Section Title -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row gy-4">
                    <div class="col-lg-6 ">
                        <div class="row gy-4">

                            <div class="col-lg-12">
                                <div class="info-item d-flex flex-column justify-content-center align-items-center"
                                    data-aos="fade-up" data-aos-delay="200">
                                    <i class="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>ที่อยู่: 1 ซอย รามอินทรา107 แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230</p>
                                </div>
                            </div><!-- End Info Item -->

                            <div class="col-md-6">
                                <div class="info-item d-flex flex-column justify-content-center align-items-center"
                                    data-aos="fade-up" data-aos-delay="300">
                                    <i class="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>02-917-8681-4</p>
                                    <p>063-190-9768</p>
                                </div>
                            </div><!-- End Info Item -->

                            <div class="col-md-6">
                                <div class="info-item d-flex flex-column justify-content-center align-items-center"
                                    data-aos="fade-up" data-aos-delay="400">
                                    <i class="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>posehealthcare@gmail.com</p>
                                    <p>posehealthcare.olm@gmail.com</p>
                                </div>
                            </div><!-- End Info Item -->

                        </div>
                    </div>

                    <div class="col-lg-6">
                        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                            data-aos-delay="500">
                            <div class="row gy-4">

                                <div class="col-md-6">
                                    <input type="text" name="name" class="form-control" placeholder="Your Name"
                                        required="">
                                </div>

                                <div class="col-md-6 ">
                                    <input type="email" class="form-control" name="email" placeholder="Your Email"
                                        required="">
                                </div>

                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="subject" placeholder="Subject"
                                        required="">
                                </div>

                                <div class="col-md-12">
                                    <textarea class="form-control" name="message" rows="4" placeholder="Message" required=""></textarea>
                                </div>

                                <div class="col-md-12 text-center">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div><!-- End Contact Form -->

                </div>

            </div>

        </section><!-- /Contact Section -->

    </main>
    @push('script')
    @endpush
@endsection
