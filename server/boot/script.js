module.exports = function(app) {
  var User = app.models.user;
User.create([
    {username: 'foufou', email: 'fouedmelki@gamail.com', password: 'pwd'},
 
], function(err, users) {
    if (err) return (err);
  });
};