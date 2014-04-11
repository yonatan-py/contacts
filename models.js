Meteor.Collection.prototype.drop = function() {
	var collection = this;
	collection.find().forEach(function(item){
		collection.remove(item._id);
	})
};

Contacts = new Meteor.Collection("Contacts");
Invites = new Meteor.Collection("Invites");

