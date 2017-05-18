var app = angular.module('myModule');

app.controller('backgroundController', function($scope, $interval) {

    // set the view model as this scope
    var vm = this

    var slides = [
       'images/blue.jpg' ,
       'images/snowdog.jpg',
       'images/superior.jpg'
    ];

    vm.slide = slides[0];

    $interval(function(){
      if(vm.slide === slides[0]){
          vm.slide = slides[1];
        } else if(vm.slide === slides[1]){
          vm.slide = slides[2];
        } else {
          vm.slide = slides[0];
        };
    }, 3000, 0);
});
