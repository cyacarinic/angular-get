angular.module('httpExample', [])
.controller('testController', ['$scope', '$http',
  function($scope, $http, $templateCache){
    $scope.method = "--";
    $scope.textarea = 'false';

    $scope.url = "Seleccione un método";

    $scope.enviar = function() {
      $scope.code = null;
      $scope.response = null;

      console.log($scope.rawData);


      $http({
        method: $scope.method,
        url: $scope.url,
        data: $scope.rawData
      })
        .then(function(response) {
          $scope.status = response.status;
          $scope.data = response.data["results"];
          console.log(response);
        }, function(error) {
          $scope.data = error.data || 'Request failed';
          $scope.status = error.status;
          console.log(error);
      });

    };

    $scope.updateModel = function(method, url) {      
      $scope.method = method;
      $scope.rawData = null;
      $scope.textarea='false';

      if(method=='POST') {
        $scope.url = "http://192.168.0.108:8010/users";
        $scope.textarea='true';
        $scope.rawData= '{ "email":"email@correo.com", "password":"123" }';
        // $scope.rawData= "{ 'email':'email@correo.com', 'password':'123' }";

      } else if(method=='PUT') {
        $scope.url = "http://192.168.0.108:8010/change_password/$id_usuario";
        $scope.textarea='true';
        $scope.rawData= '{ "password":"123", "newpassword":"123" }';
        // $scope.rawData= "{ 'password':'123', 'newpassword':'123' }";

      } else if(method=='GET') {
        $scope.url = "http://192.168.0.108:8010/users";
        
      } else {
        $scope.url = "yi yi"        
      }
    };

  }])

