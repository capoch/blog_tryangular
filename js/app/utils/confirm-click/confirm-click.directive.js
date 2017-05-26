'use strict';
angular.module('confirmClick').
  directive('confirmClick', function($sce){
    return {
      restrict: "A",
      link: function(scope, element, attr) {
        var msg = attr.confirmClick || "Are you sure?";
        var clickAction = attr.confirmedClick;
        element.bind("click", function(event){
          event.stopImmediatePropagation();
          event.preventDefault();
          if (window.confirm(msg)) {
            scope.$eval(clickAction)
          } else {
            console.log("Cancelled")
          }
        })
      }
    }
  })


// angular.module('confirmClick').
//   directive('confirmClick', function($rootScope,$location){
//     return {
//       scope: {
//         message: "@message",
//         post: "=post"
//       },
//       restrict: "E",
//       template: "<a ng-href='#' confirm-click>{{ post.title }}</a>",
//       link: function(scope, element, attr) {
//         var msg = scope.message || "Are you sure?"
//         element.bind("click", function(event){
//           if (window.confirm(msg)) {
//             $location.path('/blog/' + scope.post.id)
//             // //if $location.path doesn't work, use rootScope
//             // $rootScope.$apply(function(){
//             //   $location.path('/blog/' + scope.post.id)
//             // })
//           }
//         })
//       }
//     }
//   })
