module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
User.create([
    {username: 'foued', email: 'fouedmelki@gmail.com', password: 'pwd'},
 
], function(err, users) {
    if (err) return (err);
   
    // Create projects, assign project owners and project team members
    
    // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) return debug(err);
      debug(role);
 
      // Make Bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].id
      }, function(err, principal) {
        if (err) return debug(err);
        debug(principal);
      });
    });
  });
};