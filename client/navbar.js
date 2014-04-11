Template.navbar.user = function(){
    return {admin: true};
    console.log(Meteor.users.findOne({_id:Meteor.userId()}));
    return Meteor.users.findOne({_id:Meteor.userId()});
}
