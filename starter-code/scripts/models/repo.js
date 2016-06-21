
(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX!?
       Don't forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/dylanjsa90/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: callback()
    });

  };

  repos.withAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
