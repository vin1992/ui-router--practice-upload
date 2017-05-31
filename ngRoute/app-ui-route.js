var app = angular.module('app',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $stateProvider.state('home',{
    url:'/',
    template:"<div ui-view></div>",
    abstract:true
  })
  .state('home.login',{
    url:"/login",
    templateUrl:"./view/login.html",
    controller:"LoginController"
  })
  .state('home.other',{
    url:'/other',
    templateUrl:"./view/other.html",
    controller:"OtherController"
  })
  // $urlRouterProvider.otherwise('/');
}])
