
// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('04d0NW4LZO0Y4lLJca_iZA');
// var email = new mandrill.Mandrill(process.env.API_KEY);

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"",
        "to":[{"email":""}],
        "subject": "Sending a text email from the Mandrill API",
        "text": "I'm learning the Mandrill API at Codecademy."
    }
};

params.message.from_email = sessionStorage.getItem('email');
params.message.to[0].email = $scope.emailAddress;

$scope.sendEmail = function(){
    email.messages.send(params, function(result) {
        log(result);
    }, function(error) {
        log(error);
    });
}



