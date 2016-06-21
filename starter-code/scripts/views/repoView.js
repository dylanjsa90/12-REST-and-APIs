(function(module) {
  var repoView = {};
  /* NOTE: Remember that new Handlebars template? Let's compile it!
      Save the result in this `render` variable that we will pass to
      the append method below. */
  var repoCompiler = Handlebars.compile('#repo-template'); // Finish this Handlebars method here!


  repoView.renderRepos = function() {
    $('#about ul').empty().append(repos.withAttribute('name').map(repoCompiler));

  };
  repo.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
