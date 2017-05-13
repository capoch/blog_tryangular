'use strict';

angular.module('blogDetail').
  component('blogDetail', {
    // template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
    templateUrl: '/templates/blog-detail.html',
    controller: function($location, $routeParams, $scope){
      var blogItems = [
        {title: "Some title 1", id: 1, description: "This is a book"},
        {title: "Title 2", id: 2, description: "Plain and simple"},
        {title: "This no 3", id: 3, description: "this is basically it"},
        {title: "4 Sho", id: 4, description: "Shizzle"},
      ]

      $scope.title = 'Blog ' + $routeParams.id
      $scope.notFound = true
      angular.forEach(blogItems, function(post){
        if (post.id == $routeParams.id){
          $scope.notFound = false
          $scope.post = post
        }
      })

      if ($scope.notFound) {
        $location.path("/404")
      }
    }
  });
