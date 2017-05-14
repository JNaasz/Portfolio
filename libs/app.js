var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
$routeProvider

.when('/index', {
  templateUrl: "../views/home.html"
})
.when('/about', {
  templateUrl: "../views/about.html"
})
.when('/contact', {
  templateUrl: "../views/contact.html"
})
.when('/resume', {
  templateUrl: "../views/resume.html"
})
.when('/home', {
  templateUrl: "../views/home.html"
})

.otherwise({
  redirectTo: "/home"
})

}) // closes app.config
