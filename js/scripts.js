// Business logic for AddressBook
var addresses = new AddressBook();

function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}


// Business logic for contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


$(document).ready(function(event){
  $(".addresses").hide();
  $(".address-form form").submit(function(event) {
    event.preventDefault();
    var newContact = new Contact();

    newContact.firstName = $("input#first-name").val();
    newContact.lastName = $("input#last-name").val();
    newContact.phoneNumber= $("input#phone").val();

    addresses.addContact(newContact);

    $("#name").text(addresses.contacts[0].fullName());
    $("#phone-num").text(addresses.contacts[0].phoneNumber);
    $(".addresses").show();
    });
});
