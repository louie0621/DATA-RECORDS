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