var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoCtrl', function($scope){
  $scope.todoItems = ["go for a run", "develop an angular application"];

  // Adds an item
  $scope.addTodo = function() {
    $scope.todoItems.push($scope.enteredTodo);
    // clear the text field
    $scope.enteredTodo = "";
  };

  $scope.removeTodo = function(name) {
    var i = $scope.todoItems.indexOf(name);
    $scope.todoItems.splice(i, 1);
  };
});
