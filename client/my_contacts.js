Template.myContacts.contacts = function () {
	return Contacts.find();
}

Template.myContacts.events({
	'click .view-contact': function(){
		Session.set('currentAction', "view-contact");
		Session.set('contact', this);
	}
});
