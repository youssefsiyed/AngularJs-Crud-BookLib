var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/books', {
      controller: 'BooksController',
      templateUrl: 'views/books/books.html'
    })
    .when('/books/details/:id', {
      controller: 'BooksController',
      templateUrl: 'views/books/book_details.html'
    })
    .when('/books/add', {
      controller: 'BooksController',
      templateUrl: 'views/books/add_book.html'
    })
    .when('/books/edit/:id', {
      controller: 'BooksController',
      templateUrl: 'views/books/edit_book.html'
    })
    ////////////////////////////////////////////////
    .when('/users', {
      controller: 'UsersController',
      templateUrl: 'views/users/users.html'
    })
    .when('/users/details/:id', {
      controller: 'UsersController',
      templateUrl: 'views/users/user_details.html'
    })
    .when('/users/add', {
      controller: 'UsersController',
      templateUrl: 'views/users/user_add.html'
    })
    .when('/users/edit/:id', {
      controller: 'UsersController',
      templateUrl: 'views/users/user_edit.html'
    })
    //////////////////////////////////////////////
    .otherwise({
      redirectTo: '/users'
    });
});
