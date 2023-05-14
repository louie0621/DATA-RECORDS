/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/view/datarecord.js":
/*!*****************************************!*\
  !*** ./resources/js/view/datarecord.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = {
  forms: function forms(data) {
    return '\
      <div class="form-group" style="text-align: left">\
        <label for="name">Name *</label>\
        <input type="text" class="form-control " id="name" placeholder="Name" name="name" value="' + data.name + '" autocomplete="name" autofocus="" required="">\
      </div>\
      <div class="form-group" style="text-align: left">\
        <label for="address">Address *</label>\
        <input type="text" class="form-control " id="address" placeholder="Address" name="address" value="' + data.address + '" autocomplete="address" autofocus="" required="">\
      </div>\
      <div class="form-group" style="text-align: left">\
        <label for="city">City *</label>\
        <input type="text" class="form-control " id="city" placeholder="City" name="city" value="' + data.city + '" autocomplete="city" autofocus="" required="">\
      </div>\
      <div class="form-group" style="text-align: left">\
        <label for="state">State *</label>\
        <input type="text" class="form-control " id="state" placeholder="State" name="state" value="' + data.state + '" autocomplete="state" autofocus="" required="">\
      </div>\
      <div class="form-group" style="text-align: left">\
        <label for="zip">Zip Code *</label>\
        <input type="text" class="form-control " id="zip" placeholder="Zip code" name="zip" value="' + data.zip + '" autocomplete="zip" autofocus="" required="">\
      </div>\
      <div class="form-group" style="text-align: left">\
        <label for="phone">Phone Number *</label>\
        <input type="text" class="form-control " id="phone" placeholder="Phone number" name="phone" value="' + data.phone + '" autocomplete="phone" autofocus="" required="">\
      </div>\
      <div class="form-group" style="text-align: left">\
        <label for="email">Email *</label>\
        <input type="email" class="form-control " id="email" placeholder="Email" name="email" value="' + data.email + '" autocomplete="email" autofocus="" required="">\
      </div>\
      ';
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./resources/js/datarecord.js ***!
  \************************************/
var viewdatarecord = __webpack_require__(/*! ./view/datarecord */ "./resources/js/view/datarecord.js");
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
        var request = {
          name: $('#name').val(),
          address: $('#address').val(),
          city: $('#city').val(),
          state: $('#state').val(),
          zip: $('#zip').val(),
          phone: $('#phone').val(),
          email: $('#email').val()
        };
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
            success: function success(response) {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Successfully added.'
              }).then(function () {
                window.location.href = '/';
              });
            },
            error: function error(data, textStatus, errorThrown) {
              Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: data.responseJSON.message
              });
            }
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
    data: {
      id: id
    },
    success: function success(res) {
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
            var request = {
              id: id,
              name: $('#name').val(),
              address: $('#address').val(),
              city: $('#city').val(),
              state: $('#state').val(),
              zip: $('#zip').val(),
              phone: $('#phone').val(),
              email: $('#email').val()
            };
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
                success: function success(response) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Successfully update.'
                  }).then(function () {
                    window.location.href = '/';
                  });
                },
                error: function error(data, textStatus, errorThrown) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: data.responseJSON.message
                  });
                }
              });
            }
          });
        }
      });
    },
    error: function error(data, textStatus, errorThrown) {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: data.responseJSON.message
      });
    }
  });
});
$(document).on('click', "#btnDelData", function () {
  var id = parseInt($(this).data('record'));
  $.ajax({
    url: base_url + "/datarecord",
    type: 'GET',
    data: {
      id: id
    },
    success: function success(res) {
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
            var request = {
              id: id
            };
            $.ajax({
              url: base_url + "/datarecord",
              type: 'delete',
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
              data: request,
              success: function success(response) {
                Swal.fire({
                  icon: 'success',
                  title: 'Data Records',
                  text: 'Successfully deleted.'
                }).then(function () {
                  window.location.href = '/';
                });
              },
              error: function error(data, textStatus, errorThrown) {
                Swal.fire({
                  icon: 'error',
                  title: 'Something went wrong!',
                  text: data.responseJSON.message
                });
              }
            });
          });
        }
      });
    },
    error: function error(data, textStatus, errorThrown) {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: data.responseJSON.message
      });
    }
  });
});
})();

/******/ })()
;