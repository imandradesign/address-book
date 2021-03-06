// Business logic for AddressBook
var addresses = new AddressBook();

function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}


// Business logic for contacts
function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Business logic for addresses
function Address(addType, street, city, state) {
  this.addType = addType;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.addType + ": " + this.street + ", " + this.city + " " + this.state;
}

// Business logic for form fields
function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $(".new-address-section").hide();
}


$(document).ready(function(){
  $("#add-address").click(function() {
    $("#new-addresses").append(
      '<div class="new-address new-address-section">' +
      '<div class="form-group">' +
      '<select class="form-control" id="addType">' +
      "<option>Home</option>" +
      "<option>Work</option>" +
      "</select>" +
      "</div>" +
      '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street">' +
      "</div>" +
      '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input type="text" class="form-control new-city">' +
      "</div>" +
      '<div class="form-group">' +
      '<label for="new-state">State</label>' +
      '<input type="text" class="form-control new-state">' +
      "</div>" +
      "</div>"
      );
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val().charAt(0).toUpperCase() + $("input#new-first-name").val().slice(1).toLowerCase();
    var inputtedLastName = $("input#new-last-name").val().charAt(0).toUpperCase() + $("input#new-last-name").val().slice(1).toLowerCase();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedType = $(this).find('#addType').val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState)
      newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>").hide().fadeIn();

    $("ul#contacts").hover(function(){
      $(this).css("color", "#008080")
    }, function(){
      $(this).css("color", "black")
    })

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();
  });
});
