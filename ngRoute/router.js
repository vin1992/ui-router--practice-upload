var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
			/*$locationProvider.html5Mode(false);
			$locationProvider.hashPrefix('!');*/
			$routeProvider.when('/',{
				templateUrl:'./view/home.html',
				controller:'HomeController',
			})
			.when('/home',{
				templateUrl:'./view/home.html',
				controller:'HomeController',
				resolve:{
					'data':['$http',function ($http) {
						return $http.get('./db.json',null).then(
							function (res) {
								console.log(res.data)
								return res.data.userInfo;
							},
							function (rej) {
								console.log('error request')
							}
							)
					}]
				},
				// reloadOnSearch:true
			})
			.when('/login',{
				templateUrl:'./ngRoute/view/login.html',
				controller:'LoginController'
			})
			.when('/other/:id',{
				templateUrl:'view/other.html',
				controller:'OtherController'
			})
			
			$locationProvider.html5Mode(true);
		}])