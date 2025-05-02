<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Poseintelligence</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link href="{{ asset('Images/logo/POSE-LOGO.png') }}" rel="icon" type="image/png">
    <link href="{{ asset('Images/logo/POSE-LOGO.png') }}" rel="apple-touch-icon">



    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/aos/aos.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">

    <!-- Main CSS File -->
    <link href="{{ asset('assets/css/main.css') }}" rel="stylesheet">

</head>

<body>

    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">

            <a href="{{ route('homepage') }}" class="logo d-flex align-items-center me-auto">

                <img src="{{ asset('Images/logo/POSE-LOGO.png') }}" alt="POSE Intelligence">
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li><a href="#hero" class="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#awards">Awards</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>

                    <li><a href="#contact">Contact</a></li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
        </div>
    </header>

    @yield('content')


    <footer id="footer" class="footer dark-background">
        <div class="container footer-top">
            <div class="row gy-4">
                <div class="col-lg-6 col-md-6 footer-about">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <span class="sitename">
                            <img src="{{ asset('Images/logo/POSE-LOGO.png') }}" alt="POSE Intelligence">
                        </span>
                    </a>
                    <div class="footer-contact pt-3">
                        <p> บริษัท โพส อินเทลลิเจ้นซ์ จำกัด
                            ผู้นำด้านการพัฒนาซอฟต์แวร์ การบริหารจัดการเครื่องมือแพทย์
                            เวชภัณฑ์ ครุภัณฑ์ และ การบริหารจัดการผ้าในโรงพยาบาล</p>
                    </div>

                </div>


                <div class="col-lg-6 col-md-12 footer-newsletter">
                    <h4>Contact Us </h4>
                    <p>ที่อยู่: 1 ซอย รามอินทรา107
                        แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230</p>
                    <p> 02-917-8681-4, 063-190-9768</p>
                    <p> posehealthcare@gmail.com</p>
                    <p> posehealthcare.olm@gmail.com</p>

                </div>

            </div>
        </div>

        <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">Pose Intelligence</strong> <span>All Rights
                    Reserved</span>
            </p>

        </div>

    </footer>


    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Preloader -->
    <div id="preloader"></div>

    <!-- Vendor JS Files -->
    <script src="{{ asset('assets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}  "></script>
    <script src="{{ asset('assets/vendor/php-email-form/validate.js') }}"></script>
    <script src="{{ asset('assets/vendor/aos/aos.js') }} "></script>
    <script src="{{ asset('assets/vendor/glightbox/js/glightbox.min.js') }}  "></script>
    <script src="{{ asset('assets/vendor/purecounter/purecounter_vanilla.js') }}  "></script>
    <script src="{{ asset('assets/vendor/swiper/swiper-bundle.min.js') }}  "></script>
    <script src="{{ asset('assets/vendor/imagesloaded/imagesloaded.pkgd.min.js') }}  "></script>
    <script src="{{ asset('assets/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>


    <!-- Main JS File -->
    <script src="{{ asset('assets/js/main.js') }}"></script>

</body>

</html>
