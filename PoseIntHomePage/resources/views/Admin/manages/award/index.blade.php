@extends('Admin.index')


@section('content')
    <!-- Navbar -->

    <div class="container-fluid">

        Manage Award

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            เพิ่ม Award
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">เพิ่ม Project</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form action="{{ route('admin.manage.award.store') }}" method="POST">
                        @csrf
                        <div class="modal-body">
                            <div class="mb-3">
                                <label>ชื่อโครงการ</label>
                                <input type="text" name="title" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>คำอธิบาย</label>
                                <textarea name="description" class="form-control"></textarea>
                            </div>
                            <div class="mb-3">
                                <label>สถานะ</label>
                                <select name="status" class="form-control">
                                    <option value="pending">รอดำเนินการ</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <table class="table">
            <thead>
                <tr>
                    <th>id</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($awards as $award)
                    <tr>
                        <td>{{ $award->id }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>


        {{ $awards->links() }}
    </div>
@endsection
