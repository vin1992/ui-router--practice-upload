 angular.module('app',['ui.router'])
      .config(function($stateProvider,$urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('');
        $urlRouterProvider.when('','/email');

        $locationProvider.html5Mode(true).hashPrefix('!');

        $stateProvider
        .state('custom',{
          abstract:true,
          url:'/custom',
          template:'<div ui-view></div>'
        })
        .state('custom.start',{
        url:'/start',
        templateUrl:'./view/start.html'
        })
        .state('custom.email',{
        url:'/email',
        templateUrl:'./view/email.html'
        })
        .state('custom.finish',{
        url:'/finish',
        templateUrl:'./view/finish.html'
        })
      })