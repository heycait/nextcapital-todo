angular.module('nextCapital', [])
       .controller('TodoCtrl', function($scope, $http){
        $scope.todos = [];

        var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos.json?api_token=' + sessionStorage.getItem('api_token');
        $http.get(link)
             .success(function(response){
                $scope.todos = response;
             });

        $scope.addTodo = function(){
          alert('you clicked')
          $scope.todos.push({description: $scope.formTodo, is_complete: false});

          var link = 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos';
          $http({
            method: 'POST',
            url: link,
            data: {api_token: sessionStorage.getItem('api_token'), todo: {description: $scope.formTodo}}
          }).success(function(response){
            console.log(response);
            alert('stuff happened')
            debugger
          });
        };

          // $scope.markComplete = function(){
          //   alert('you marked me!')
          // }

      });

          $(document).ready(function() {

            var source = $("#todo-template").html();
            var template = Handlebars.compile(source);

            $('#logout').click(function(e){
              e.preventDefault();

              var request = $.ajax({
                method: 'DELETE',
                url: 'http://recruiting-api.nextcapital.com/users/sign_out',
                data: {api_token: sessionStorage.getItem('api_token'), user_id: sessionStorage.getItem('id')}
              }).done(function(response){
                window.location.href = '/'
              });
            });


            // $('#add-todo').submit(function(e){
            //   e.preventDefault();

            //   var input = $( "input[name='todo']").val();
            //   var request = $.ajax({
            //     method: 'POST',
            //     url: 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos',
            //     data: {api_token: sessionStorage.getItem('api_token'), todo: {description: input}},
            //   }).done(function(response){
            //     console.log(response);

            //     var context = {todo: response.description};
            //     var html = template(context);
            //     $('#todo-list').append(html);
            //   });
            // });

          });



// $(document).ready(function() {
//   var source = $("#todo-template").html();
//   var template = Handlebars.compile(source);

//   $('#logout').click(function(e){
//     e.preventDefault();

//     var request = $.ajax({
//       method: 'DELETE',
//       url: 'http://recruiting-api.nextcapital.com/users/sign_out',
//       data: {api_token: sessionStorage.getItem('api_token'), user_id: sessionStorage.getItem('id')}
//     }).done(function(response){
//       window.location.href = '/nextcapital-todo/'
//     });
//   });

//   $('#add-todo').submit(function(e){
//     e.preventDefault();

//     var input = $( "input[name='todo']").val();
//     var request = $.ajax({
//       method: 'POST',
//       url: 'http://recruiting-api.nextcapital.com/users/' + sessionStorage.getItem('id') + '/todos',
//       data: {api_token: sessionStorage.getItem('api_token'), todo: {description: input}},
//     }).done(function(response){
//       console.log(response);

//       var context = {todo: response.description};
//       var html = template(context);
//       $('#todo-list').append(html);
//     });
//   });

// });


// {"id":1248,"email":"caitlyn@mail.com","api_token":"6_LMm4JhVFzNAhW_pP5X","todos":[]}~ :>