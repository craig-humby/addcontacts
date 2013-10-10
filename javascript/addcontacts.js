document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	document.getElementById("btnSave").addEventListener("click", saveContact, false);
}

function saveContact()
{
	var txtFirstName = document.getElementById("first").value;
	var txtLastName = document.getElementById("last").value;
	var intTelNum= document.getElementById("number").value;
	var txtPhoneType = document.getElementById("type").value;	
	var objContact = navigator.contacts.create();
	objContact.displayName = txtFirstName + txtLastName;
	var txtContactName = new ContactName();
	txtContactName.givenName = txtFirstName;
	txtContactName.familyName = txtLastName;
	objContact.name = txtContactName; 
	var arrPhoneNumbers = [1];
	phoneNumbers[0] = new ContactField(phoneType, telephoneNumber, false);
	objContact.phoneNumbers = arrPhoneNumbers;

	objContact.save(onSaveSuccess,onSaveError);
}
	
function onSaveSuccess(contact) 
{
    navigator.notification.alert("Contact saved to address book.", alertDismissed, 'Add Contacts', 'OK');
}
 
// onSaveError: Failed to get the contacts
//
function onSaveError(contactError) 
{
    navigator.notification.alert("Error = " + contactError.code, alertDismissed, 'Add Contacts', 'OK');
}

function alertDismissed()
{
	//EMPTY	
}