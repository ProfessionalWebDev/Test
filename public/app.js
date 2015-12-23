var myApp = angular.module('myApp', ['ui.router','ngAnimate','ui.bootstrap']);

myApp.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: '/views/home.html'
		})
		.state('itemCreate',{
			url: '/itemCreate',
			templateUrl: '/views/create.html',
			controller: 'createCtrl'
		})
		.state('itemEdit',{
			url: '/itemCreate/:id',
			templateUrl: '/views/create.html',
			controller: 'createCtrl'
		})
		.state('itemList',{
			url: '/itemList',
			templateUrl: '/views/list.html',
			controller: 'listCtrl'
		})
		.state('itemDetails',{
			url: '/itemDetails/:id',
			templateUrl: '/views/view.html',
			controller: 'viewCtrl'
		});
		
	$urlRouterProvider.otherwise('/home');
	
});