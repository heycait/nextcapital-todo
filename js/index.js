$(document).ready(function() {

  $('#signup-form').submit(function(e){
    e.preventDefault();

    var form_data = $(this).serialize();
    var request = $.ajax({
      method: 'POST',
      url: 'http://recruiting-api.nextcapital.com/users',
      data: form_data,
    }).done(function(response){
      console.log(response);

      sessionStorage.setItem('api_token', response.api_token);
      sessionStorage.setItem('email', response.email);
      sessionStorage.setItem('id', response.id);
      sessionStorage.setItem('todos', response.todos);

      window.location.href = '/todos.html'
      // window.location.href = '/nextcapital-todo/todos.html'
    });
  });

  $('#login-form').submit(function(e){
    e.preventDefault();

    var form_data = $(this).serialize();
    var request = $.ajax({
      method: 'POST',
      url: 'http://recruiting-api.nextcapital.com/users/sign_in',
      data: form_data,
    }).done(function(response){
      console.log(response);

      sessionStorage.setItem('api_token', response.api_token);
      sessionStorage.setItem('email', response.email);
      sessionStorage.setItem('id', response.id);
      sessionStorage.setItem('todos', response.todos);

      window.location.href = '/todos.html'
      // window.location.href = '/nextcapital-todo/todos.html'
    });
  });
});
