@extends('home')

{{-- BODY --}}
@section('content')
<div class="content">
    <div class="page-inner">
        <div class="page-header">
            <h4 class="page-title">Data Records</h4>
            <ul class="breadcrumbs">
                <li class="nav-home">
                    <a href="#">
                        <i class="flaticon-home"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex align-items-center">
                            <button class="btn btn-primary btn-round ml-auto" id="btnaddData">
                                <i class="fa fa-plus"></i>
                                Add
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="multi-filter-select" class="display table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Zip</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Zip</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    @foreach($data as $datas)
                                    <tr>
                                        <td>{{ $datas->name }}</td>
                                        <td>{{ $datas->address }}</td>
                                        <td>{{ $datas->city }}</td>
                                        <td>{{ $datas->state }}</td>
                                        <td>{{ $datas->zip }}</td>
                                        <td>{{ $datas->phone }}</td>
                                        <td>{{ $datas->email }}</td>
                                        <td>
                                            <div class="input-group-append">
                                                <button class="btn btn-icon btn-link" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></button>
                                                <div class="dropdown-menu">
                                                    <button type="button" class="dropdown-item text-warning btn btn-link" id="btnEditData" data-record="{{ $datas->id }}"><i class="fas fa-pen"></i> Edit</button>
                                                    <div role="separator" class="dropdown-divider"></div>
                                                    <button type="button" class="dropdown-item text-danger btn btn-link" id="btnDelData" data-record="{{ $datas->id }}"><i class="fas fa-times"></i> Delete</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

{{-- ADDED SCRIPT --}}
@section('script')
<script src="{{ asset('js/system/datarecord.js') }}"></script>
@endsection