angular.module('nextCapital', ["xeditable"])
       .controller('TodoCtrl', function($scope, $http){
        $scope.todos = [];

        var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos.json?api_token=' + sessionStorage.getItem('api_token');
        $http.get(link)
             .success(function(response){
                $scope.todos = response;
             });

        $scope.addTodo = function(){
          $scope.todos.push({description: $scope.formTodo, is_complete: false});

          var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos';
          $http({
            method: 'POST',
            url: link,
            data: {api_token: sessionStorage.getItem('api_token'), todo: {description: $scope.formTodo}}
          }).success(function(response){
            console.log(response);
            $scope.formTodo = "";
          });
        };

        $scope.markComplete = function(todo){
          console.log(todo.is_complete)

          var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos/' + todo.id;
          $http({
            method: 'PUT',
            url: link,
            data: {api_token: sessionStorage.getItem('api_token'), todo: {description: $scope.formTodo, is_complete: todo.is_complete}}
          }).success(function(response){
            console.log(response)
          })
        };

        $scope.editTodo = function(desc, index){
          var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos/' + $scope.todos[index].id;
          $http({
            method: 'PUT',
            url: link,
            data: {api_token: sessionStorage.getItem('api_token'), todo: {description: desc, is_complete: $scope.todos[index].is_complete}}
          }).success(function(response){
            console.log(response)
          })

          // Shorter syntax for $http
          // return $http.put(link, {api_token: sessionStorage.getItem('api_token'), todo: {description: desc, is_complete: $scope.todos[index].is_complete}}).success(function(response){console.log(response)});
        };


         $scope.sendEmail = function(){
           // create a new instance of the Mandrill class with your API key
           var email = new mandrill.Mandrill('04d0NW4LZO0Y4lLJca_iZA');
           // var email = new mandrill.Mandrill(process.env.API_KEY);

           // create a variable for the API call parameters
           var params = {
               "message": {
                   "from_email": sessionStorage.getItem('email'),
                   "to":[{"email":""}],
                   "subject": "My Todo List",
                   "text": "",
               }
           };

           params.message.to[0].email = $scope.emailAddress;
           params.message.text = $scope.todos;
           debugger

           email.messages.send(params, function(result) {
               console.log(result);
           }, function(error) {
               console.log(error);
           });

           $scope.emailAddress = '';
         };

      })
      // .controller('EmailCtrl', function($scope, $http){

      //   $scope.sendEmail = function(){
      //     // create a new instance of the Mandrill class with your API key
      //     var email = new mandrill.Mandrill('04d0NW4LZO0Y4lLJca_iZA');
      //     // var email = new mandrill.Mandrill(process.env.API_KEY);

      //     // create a variable for the API call parameters
      //     var params = {
      //         "message": {
      //             "from_email": sessionStorage.getItem('email'),
      //             "to":[{"email":""}],
      //             "subject": "My Todo List",
      //             "text": "",
      //         }
      //     };

      //     params.message.to[0].email = $scope.emailAddress;
      //     params.message.text = $scope.todos;
      //     debugger

      //     email.messages.send(params, function(result) {
      //         console.log(result);
      //     }, function(error) {
      //         console.log(error);
      //     });


      //   };

      // })
      .run(function(editableOptions) {
          editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        });

$(function() {
  $( "#sortable" ).sortable({placeholder: "ui-state-highlight"});
  $( "#sortable" ).disableSelection();
});


$('#logout').click(function(e){
  e.preventDefault();

  var request = $.ajax({
    method: 'DELETE',
    url: 'http://recruiting-api.nextcapital.com/users/sign_out',
    data: {api_token: sessionStorage.getItem('api_token'), user_id: sessionStorage.getItem('id')}
  }).done(function(response){
    window.location.href = '/'
    // window.location.href = '/nextcapital-todo/'
  });
});

// Doing logout this way results in the error "please sign in first" compared to doing it with jQuery/Ajax
  // $scope.logout = function(){
  //   var link = 'http://recruiting-api.nextcapital.com/users/sign_out';

  //   $http({
  //     method: 'DELETE',
  //     url: link,
  //     data: {api_token: sessionStorage.getItem('api_token'), user_id: sessionStorage.getItem('id')}
  //   }).success(function(response){
  //     console.log(response);
  //     alert('stuff happened')
  //     debugger
  //     window.location.href = '/'
  //     // window.location.href = '/nextcapital-todo/'
  //   });
  // }


