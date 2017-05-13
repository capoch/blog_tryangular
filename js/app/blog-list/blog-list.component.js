'use strict';

angular.module('blogList').
  component('blogList', {
    // template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
    templateUrl: '/templates/blog-list.html',
    controller: function(Post, $routeParams, $scope){
      $scope.items = Post.query();
    }
});
  // controller('BlogListController', function($scope){
  //   console.log("hello")
  //   $scope.title = 'Hi There faggot'
  //   $scope.clicks = 0
  //   $scope.someClickTest = function(){
  //     console.log("clicked")
  //     $scope.clicks += 1
  //     $scope.title = "Oh now you clicked it "+$scope.clicks+" times, you miserable cunt"
  //   }
  // });

  //component('blogList')
