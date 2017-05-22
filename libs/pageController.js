var app = angular.module('myModule');

// home page controller
app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

// resume page controller
app.controller('resumeController', function($scope) {
    $scope.pageClass = 'page-resume';
});

// portfolio page controller
app.controller('portfolioController', function($scope) {
    $scope.pageClass = 'page-portfolio';
});
