Template.addContact.events({
	"click .add": function (event) {
		var form = $(event.toElement).parent('form')
		var name = form.find('.name').val();
		Meteor.call('addContact', {name: name}, function(error, contactId){
			Meteor.call('addContactToUser', contactId);
			Meteor.subscribe("myContacts");
			Session.set('currentAction', "my-contacts");
		});	
	}
});