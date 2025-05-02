<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.3-dist/css/bootstrap.css') }}">

    <script src="{{ asset('bootstrap-5.3.3-dist/js/bootstrap.js') }}"></script>

    <title>Login</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2 class="text-center text-dark mt-5">Login</h2>
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <div class="card my-5">

                    <form method="POST" action="{{ route('admin.login') }}" class="card-body cardbody-color p-lg-5">
                        @csrf
                        <div class="text-center">
                            <img src="{{ asset('Images/logo/POSE-LOGO-FINAL5-1-768x359.png') }}"
                                class="img-fluid profile-image-pic my-3" width="200px">
                        </div>

                        <div class="mb-3">
                            <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                                placeholder="User Name" name="email" required>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="password" placeholder="password"
                                name="password" required>
                        </div>
                        <div class="text-center"><button type="submit"
                                class="btn btn-primary px-5 mb-5 w-100">Login</button></div>

                    </form>
                    
                </div>

            </div>
        </div>
    </div>

</body>

</html>
