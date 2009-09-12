function githubCallback(data) {
  var limit = 10;
  
  $('#projects').empty();

  var repos = $.grep(data.user.repositories, function(){
    return !this.fork
  });

  repos.sort(function(a, b){
    return b.watchers - a.watchers
  });

  $.each(repos.slice(0, limit), function(){
    $('#projects').append('<li><a href="'+ this.url +'">'+ this.name +'</a></li>');
  });
}
