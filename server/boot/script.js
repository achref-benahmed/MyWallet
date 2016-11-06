module.exports = function(app) {
  var User = app.models.user;
User.create([
    {username: 'foued', email: 'fouedmelki@gmail.com', password: 'pwd'},
 
], function(err, users) {
    if (err) return (err);
  });
};