var myApp = angular.module('myApp');

myApp.controller('UsersController', [
  '$scope',
  '$http',
  '$location',
  '$routeParams',
  function($scope, $http, $location, $routeParams) {
    console.log('Controller loaded...');

    $scope.loading = false;
    $scope.propertyName = 'name'; // order name
    $scope.propertyUserName = ''; // order asc/desc
    $scope.limit = 6; // limitation
    $scope.reverse = true;

    $scope.currentPage = 0;
    $scope.pageSize = 10;

    //////////////////////////////////////////////////
    $scope.numberOfPages = function() {
      return Math.ceil($scope.users.length / $scope.pageSize);
    };
    /////////////////////////////////////////////////
    $scope.sortBy = function(propertyName) {
      //$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
    /////////////////////////////////////////////////
    $scope.sortByAsc = function() {
      $scope.propertyUserName = 'name';
    };
    /////////////////////////////////////////////////
    $scope.sortByDesc = function() {
      $scope.propertyUserName = '-name';
    };
    /////////////////////Get Users////////////////////
    $scope.getUsers = function() {
      NProgress.start();
      $http
        .get('https://jsonplaceholder.typicode.com/users')
        .success(function(response) {
          $scope.users = response;
        });
      NProgress.remove();
    };

    /////////////////////////////////////////////////
    $scope.getOneUser = function() {
      var id = $routeParams.id;
      $http
        .get('https://jsonplaceholder.typicode.com/users/' + id)
        .success(function(response) {
          $scope.user = response;
        });
    };
    ////////////////////////ADD METHOD////////////////////////
    $scope.AddUser = function() {
      $http
        .post('https://jsonplaceholder.typicode.com/users/', $scope.user)
        .success(function(response) {
          swal({ title: 'Good job!', icon: 'success' });
          setTimeout(function() {
            window.location.href = '#/users';
          }, 2000);
        });
    };
    //////////////////////UPDATE METHOD//////////////////////////
    $scope.updateUser = function() {
      var id = $routeParams.id;
      $http
        .put('https://jsonplaceholder.typicode.com/users/' + id, $scope.user)
        .success(function(response) {
          swal({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success'
          });
        });
      ////////////////////////
      setTimeout(function() {
        window.location.href = '#/users';
      }, 2000);
    };
    ////////////// DELETE METHOD ///////////////////
    $scope.removeUser = function(id) {
      $http
        .delete('https://jsonplaceholder.typicode.com/users/' + id)
        .success(function(response) {
          /////////////////////////
          swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this User!',
            icon: 'warning',
            buttons: true,
            dangerMode: true
          }).then(willDelete => {
            if (willDelete) {
              swal('User has been deleted!', {
                icon: 'success'
              });
            }
          });
          ////////////////////////
          setTimeout(function() {
            window.location.href = '#/users';
          }, 3000);
        });
    };
  }
]);
