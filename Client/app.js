var myApp = angular.module('myApp', ['ui.router','ngAnimate','ui.bootstrap']);

myApp.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: '/views/Home.html'
		})
		.state('itemCreate',{
			url: '/itemCreate',
			templateUrl: '/views/Create.html',
			controller: 'createCtrl'
		})
		.state('itemEdit',{
			url: '/itemCreate/:id',
			templateUrl: '/views/Create.html',
			controller: 'createCtrl'
		})
		.state('itemList',{
			url: '/itemList',
			templateUrl: '/views/List.html',
			controller: 'listCtrl'
		})
		.state('itemDetails',{
			url: '/itemDetails/:id',
			templateUrl: '/views/View.html',
			controller: 'viewCtrl'
		});
		
	$urlRouterProvider.otherwise('/home');
	
});