Meteor.subscribe("myContacts");
Meteor.subscribe("userData");

Template.main.loggedIn = function(){
    return Boolean(Meteor.userId());
}

Template.mainContent.currentAction = function(action){
    return action == Session.get('currentAction');
}

Template.app.events({
    'click li.add-contact': function(){
        console.log('add add-contact');
        Session.set('currentAction', "add-contact");
    },
    'click li.my-contacts': function(){
        console.log('my my-contacts');
        Session.set('currentAction', "my-contacts");
    },
    'click li.add-user': function(){
        console.log('add user');
        Session.set('currentAction', "add-user");
    }
});

Template.main.newUser = function(){
    var params = getUrlParams();
    return params.hasOwnProperty("new_user");
}

function getUrlParams(){
    params = {};
    var path = location.href;
    path = path.split("?")
    path = path[1];

    if (path) {
        path = path.split('&');
        path.forEach(function (p) {
            var items = p.split('=');
            params[items[0]]= items[1];
        });
    }

    return params;
}
