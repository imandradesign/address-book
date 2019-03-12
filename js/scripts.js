// Business logic for AddressBook
var contacts = [];
var findContacts = contacts.forEach(function(contact){
      $(".addresses ol").append("<li>" + contact + "</li>")
    });

function AddressBook() {
  debugger;
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  debugger;
  this.contacts.push(contact)
}


// Business logic for contacts
function Contact(firstName, lastName, phoneNumber) {
  debugger;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  debugger;
  return this.firstName + " " + this.lastName;
}


$(document).ready(function(event){
  debugger;

  $(".address-form form").submit(function(event) {
    debugger;
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var phoneInput = $("input#phone").val();
    var newContact = new Contact(firstName, lastName, phoneInput);

    AddressBook.addContact(newContact);
    AddressBook();
    findContacts();
    event.preventDefault();
    });
});
