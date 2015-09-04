$(document).ready(function() {

  var user = {};

  $('#test').click(function(e){
    e.preventDefault();
    alert("you clicked!")
    window.location.href = "/homepage.html"
  })

  $('#login-form').submit(function(e){
    e.preventDefault();

    var form_data = $(this).serialize();
    var request = $.ajax({
      method: 'POST',
      url: 'http://recruiting-api.nextcapital.com/users/sign_in',
      data: form_data,
    }).done(function(response){
      console.log(response);
      user.api_token = response.api_token;
      user.email = response.email;
      user.id = response.id;
      window.location.href = '/homepage.html'
    });

    $('#logout').submit(function(e){
      e.preventDefault();

      var request = $.ajax({
        method: 'DELETE',
        url: 'http://recruiting-api.nextcapital.com/users/sign_out',
        data: {'api_token': user.api_token, 'user_id': user.id}
      }).done(function(response){
        console.log(response)
        alert('you logged out!')
        debugger
      })
    });

  });



});


// {"id":1248,"email":"caitlyn@mail.com","api_token":"6_LMm4JhVFzNAhW_pP5X","todos":[]}~ :>