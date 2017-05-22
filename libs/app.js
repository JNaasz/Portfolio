var app = angular.module('myModule', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
$routeProvider

.when('/index', {
  templateUrl: "views/home.html",
  controller: "mainController"
})
.when('/about', {
  templateUrl: "views/about.html",
  controller: "aboutController"
})
.when('/contact', {
  templateUrl: "views/contact.html",
  controller: "contactController"
})
.when('/resume', {
  templateUrl: "views/resume.html",
  controller: "resumeController"
})
.when('/portfolio', {
  templateUrl: "views/portfolio.html",
  controller: "portfolioController"
})
.when('/home', {
  templateUrl: "views/home.html",
  controller: "mainController"
})

.otherwise({
  redirectTo: "/home"
})

}) // closes app.config
