window.onload=function()
{
		document.addEventListener("deviceready"), onDeviceReady, false);
}

function onDeviceReady()
{
//EMPTY
}

function saveContact()
{
	var firstName = document.getElementById("first").value;
	var lastName = document.getElementById("last").value;
	var telephoneNumber = document.getElementById("number").value;
	var phoneType = document.getElementById("type").value;
	navigator.notification.alert("Hello there!");
	//var cntContact = navigator.contacts.create();
	
	//cntContact.name.givenName = firstName;
	//cntContact.name.familyName = lastName;
	//var phoneNumbers = [];
	//phoneNumbers[0] = new ContactField(phoneType, telephoneNumber, false);
	//cntContact.phoneNumbers = phoneNumbers;

	//cntContact.save(onSaveSuccess,onSaveError);
}
	
function onSaveSuccess(contact) 
{
    alert("Contact saved to address book.");
}
 
// onSaveError: Failed to get the contacts
//
function onSaveError(contactError) 
{
    alert("Error = " + contactError.code);
}