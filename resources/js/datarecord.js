const viewdatarecord = require('./view/datarecord');

$(document).on('click', "#btnaddData", function () {
    Swal.fire({
        title: 'Add Data Records',
        html: viewdatarecord.forms({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: ''
        }),
        confirmButtonColor: "#31ce36",
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        showCancelButton: true,
        preConfirm: function preConfirm(value) {
            return new Promise(function (resolve, reject) {
                let request = {
                    name: $('#name').val(),
                    address: $('#address').val(),
                    city: $('#city').val(),
                    state: $('#state').val(),
                    zip: $('#zip').val(),
                    phone: $('#phone').val(),
                    email: $('#email').val()
                }

                var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (request.name == '') {
                    Swal.showValidationMessage('Please enter name.');
                    Swal.enableButtons();
                    return false;
                } else if (request.address == '') {
                    Swal.showValidationMessage('Please enter address.');
                    Swal.enableButtons();
                    return false;
                } else if (request.city == '') {
                    Swal.showValidationMessage('Please enter city.');
                    Swal.enableButtons();
                    return false;
                } else if (request.state == '') {
                    Swal.showValidationMessage('Please enter state.');
                    Swal.enableButtons();
                    return false;
                } else if (request.zip == '') {
                    Swal.showValidationMessage('Please enter zip code.');
                    Swal.enableButtons();
                    return false;
                } else if (request.phone == '') {
                    Swal.showValidationMessage('Please enter phone.');
                    Swal.enableButtons();
                    return false;
                } else if (request.email == '') {
                    Swal.showValidationMessage('Please enter email.');
                    Swal.enableButtons();
                    return false;
                } else if (!request.email.match(mailformat)) {
                    Swal.showValidationMessage('Invalid email address.');
                    Swal.enableButtons();
                    return false;
                } else {
                    $.ajax({
                        url: base_url + "/datarecord",
                        type: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        data: request,
                        success: function (response) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: 'Successfully added.'
                            }).then(function () {
                                window.location.href = '/';
                            })
                        },
                        error: function (data, textStatus, errorThrown) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Something went wrong!',
                                text: data.responseJSON.message
                            })
                        },
                    });
                }
            });
        }
    });
});

$(document).on('click', "#btnEditData", function () {
    var id = parseInt($(this).data('record'));

    $.ajax({
        url: base_url + "/datarecord",
        type: 'GET',
        data: { id: id },
        success: function (res) {
            Swal.fire({
                title: 'Update Data Records',
                html: viewdatarecord.forms({
                    name: res[0].name,
                    address: res[0].address,
                    city: res[0].city,
                    state: res[0].state,
                    zip: res[0].state,
                    phone: res[0].phone,
                    email: res[0].email
                }),
                confirmButtonColor: "#31ce36",
                confirmButtonText: "Save",
                cancelButtonText: "Cancel",
                showCancelButton: true,
                preConfirm: function preConfirm(value) {
                    return new Promise(function (resolve, reject) {
                        let request = {
                            id: id,
                            name: $('#name').val(),
                            address: $('#address').val(),
                            city: $('#city').val(),
                            state: $('#state').val(),
                            zip: $('#zip').val(),
                            phone: $('#phone').val(),
                            email: $('#email').val()
                        }

                        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                        if (request.name == '') {
                            Swal.showValidationMessage('Please enter name.');
                            Swal.enableButtons();
                            return false;
                        } else if (request.address == '') {
                            Swal.showValidationMessage('Please enter address.');
                            Swal.enableButtons();
                            return false;
                        } else if (request.city == '') {
                            Swal.showValidationMessage('Please enter city.');
                            Swal.enableButtons();
                            return false;
                        } else if (request.state == '') {
                            Swal.showValidationMessage('Please enter state.');
                            Swal.enableButtons();
                            return false;
                        } else if (request.zip == '') {
                            Swal.showValidationMessage('Please enter zip code.');
                            Swal.enableButtons();
                            return false;
                        } else if (request.phone == '') {
                            Swal.showValidationMessage('Please enter phone.');
                            Swal.enableButtons();
                            return false;
                        } else if (request.email == '') {
                            Swal.showValidationMessage('Please enter email.');
                            Swal.enableButtons();
                            return false;
                        } else if (!request.email.match(mailformat)) {
                            Swal.showValidationMessage('Invalid email address.');
                            Swal.enableButtons();
                            return false;
                        } else {
                            $.ajax({
                                url: base_url + "/datarecord",
                                type: 'PUT',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: request,
                                success: function (response) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success',
                                        text: 'Successfully update.'
                                    }).then(function () {
                                        window.location.href = '/';
                                    })
                                },
                                error: function (data, textStatus, errorThrown) {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Something went wrong!',
                                        text: data.responseJSON.message
                                    })
                                },
                            });
                        }
                    });
                }
            });
        },
        error: function (data, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: data.responseJSON.message
            })
        },
    });
});

$(document).on('click', "#btnDelData", function () {
    var id = parseInt($(this).data('record'));

    $.ajax({
        url: base_url + "/datarecord",
        type: 'GET',
        data: { id: id },
        success: function (res) {
            Swal.fire({
                title: 'Delete Data',
                text: 'Are you sure you want to delete ' + res[0].name + '?',
                icon: 'question',
                confirmButtonColor: "#f25961",
                confirmButtonText: "Yes, Delete it!",
                cancelButtonText: "No",
                showCancelButton: true,
                preConfirm: function preConfirm(value) {
                    return new Promise(function (resolve, reject) {
                        let request = {
                            id: id
                        }
                        $.ajax({
                            url: base_url + "/datarecord",
                            type: 'delete',
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            data: request,
                            success: function (response) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Data Records',
                                    text: 'Successfully deleted.'
                                }).then(function () {
                                    window.location.href = '/';
                                })
                            },
                            error: function (data, textStatus, errorThrown) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Something went wrong!',
                                    text: data.responseJSON.message
                                })
                            },
                        });
                    });
                }
            });
        },
        error: function (data, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: data.responseJSON.message
            })
        },
    });
});