Template.addUser.events({
    'click .add-user button': function(){
        var email = $(".add-user input").val();
        Meteor.call('addUser', email, function(error, result){
            console.log(result);
        });
    }
});
