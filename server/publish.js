Meteor.publish("myContacts", function () {
	if(!this.userId) return;
	var user = Meteor.users.findOne(this.userId);
	var contacts = user.contacts || [];
	return Contacts.find({
		_id:{
			"$in": contacts
		}
	});
});

Meteor.publish("userData", function () {
    return Meteor.users.find();
});