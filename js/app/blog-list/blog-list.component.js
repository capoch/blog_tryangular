'use strict';

angular.module('blogList').
  component('blogList', {
    // template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
    templateUrl: '/templates/blog-list.html',
    controller: function($routeParams, $scope){
      console.log($routeParams)
      var blogItems = [
        {title: "Some title 1", id: 1, description: "This is a book"},
        {title: "Title 2", id: 2, description: "This is a book"},
        {title: "This no 3", id: 3, description: "This is a book"},
        {title: "4 Sho", id: 4, description: "This is a book"}
      ]

      $scope.items = blogItems;

      $scope.title = 'Hi There faggot'
      $scope.clicks = 0
      $scope.someClickTest = function(){
        console.log("clicked")
        $scope.clicks += 1
        $scope.title = "Oh now you clicked it "+$scope.clicks+" times, you miserable cunt"
      }
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
