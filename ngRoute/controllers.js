app.controller('HomeController',['$scope','data',function($scope,data){
	$scope.list = ["zhangsan","lisi","wnagwu"];
	$scope.datalist = data;
}])
app.controller('LoginController', ['$scope', function($scope){
	$scope.username="vin";
	$scope.password = "12345";
	$scope.log = function () {
		alert('正在登录中>>>')
	}
}])
app.controller('OtherController', ['$scope','$routeParams','$location', function($scope,$routeParams,$location){
	console.log($routeParams);
	$scope.path = $location.path();
	$scope.absUrl = $location.absUrl();
	$scope.hash = $location.hash();
	$scope.host = $location.host();
	$scope.port = $location.port();
	$scope.protocol = $location.protocol();
	$scope.search = $location.search();
	$scope.url = $location.url();
	$scope.link = function () {
		// $location.path('/home');
		// $location.path('/home').replace();
	}
	$scope.search = function () {
		// $location.path('/home');
		$location.search('qianbailu.com');
	}
	$scope.fix = function () {
		// $location.path('/home');
		$location.url('a');
	}
}])
