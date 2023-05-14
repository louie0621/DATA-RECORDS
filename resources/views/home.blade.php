<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    {{-- HEADER --}}
    @include('layouts.header')
</head>

<body>
    <div class="wrapper">

        {{-- SIDEBAR --}}
        @include('layouts.sidebar')

        <div class="main-panel">
            {{-- Main Content --}}
            @yield('content')
        </div>
    </div>

    {{-- Script --}}
    @include('layouts.scripts')

    {{-- Optional Script --}}
    @yield('script')

    <script>
        $(document).ready(function() {

            $('#multi-filter-select').DataTable({
                "pageLength": 5,
                initComplete: function() {
                    this.api().columns().every(function() {
                        var column = this;
                        var select = $('<select class="form-control"><option value=""></option></select>')
                            .appendTo($(column.footer()).empty())
                            .on('change', function() {
                                var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );

                                column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                            });

                        column.data().unique().sort().each(function(d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>')
                        });
                    });
                }
            });
        });
    </script>
</body>

</html>