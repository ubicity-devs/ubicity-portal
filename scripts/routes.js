'use strict';
/**
 * Definition of the flows within the application.
 */
angular.module('ubicity').config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    // ------------------------------------------------------------------------------------------------------
    $stateProvider.state("home", {
	url : "/",
	views : {
	    '' : {
		templateUrl : 'views/home.html'
	    }
	}
    })
    // ------------------------------------------------------------------------------------------------------
    .state("resources", {
	url : "/resources",
	templateUrl : 'views/resources.html'
    })
    // ------------------------------------------------------------------------------------------------------
    .state("demo", {
	abstract : true,
	url : "/demo",
	views : {
	    '' : {
		templateUrl : 'views/parent.html'
	    }
	}
    }).state("demo.dashboard", {
	url : "/dashboard",
	templateUrl : 'views/demo.dashboard.html'
    }).state("demo.twitter", {
	url : "/twitter",
	templateUrl : 'views/demo.twitter.html'
    }).state("demo.rss", {
	url : "/rss",
	templateUrl : 'views/demo.rss.html'
    });
} ]);