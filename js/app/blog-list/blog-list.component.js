'use strict';

angular.module('blogList').
  component('blogList', {
    // template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
    templateUrl: '/templates/blog-list.html',
    controller: function(Post, $location, $rootScope, $routeParams, $scope){
      $scope.goToItem = function(post){
        // rootScope is necessary because we stopped immediate propagation
        $rootScope.$apply(function(){
          $location.path('/blog/' + post.id)
        })
      }
      $scope.items = Post.query();
    }
});
