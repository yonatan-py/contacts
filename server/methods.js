Meteor.methods({
	'addContact': function  (contact) {
		var id = Contacts.insert(contact);
		return id;
		console.log(Contacts.find().fetch())
	},
	'addContactToUser': function (contactId, userId) {
		
		var user;
		if(!userId){
			user = Meteor.user();
		}
		var contacts = user.contacts || [];
		contacts.push(contactId);
		Meteor.users.update(user._id, {"$set":{contacts:contacts}})
	},
    'addUser': function(email){
        console.log(email);
        Email.send({
            from: "baa@baa.com",
            to: email,
            replyTo: "baa@baa.com",
            subject: "you've been ivited",
            text: "fdafdsa"
        });
        var secret = "";
        for(var i=0; i < 10; i++){
            secret += Math.random();
        }
        console.log(secrect);
        Invites.insert({});
        return true;
    }
});